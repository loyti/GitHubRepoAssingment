from flask import Flask, render_template, redirect, request, session, flash
from mysqlconnection import MySQLConnector
from flask.ext.bcrypt import Bcrypt
from flask.ext.bcrypt import generate_password_hash
import re
from datetime import datetime, timedelta
import bcrypt
import os,binascii



# create a regular expression object that we can use run operations on
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

app = Flask(__name__)
bcrypt = Bcrypt(app)
app.secret_key = "donotsharesecret"

mysql = MySQLConnector(app, 'logReg')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/register', methods=["POST"])
def register():
	form = request.form
	errors = []

	if len(form['first_name']) == 0:
		errors.append('Please enter your first name.')
	elif len(form['first_name']) < 2:
		errors.append('Your first name must be more than 1 letter long.')
	elif not form['first_name'].isalpha():
		errors.append('Your first name may only contain letters.')	

	if len(form['last_name']) == 0: 
		errors.append('Please enter your last name.')
	elif len(form['last_name']) < 2:
		errors.append('Your last name must be more than 1 letter long.')
	elif not form['last_name'].isalpha():
		errors.append('Your last name may only contain letters.')

	if len(form['email']) == 0: 
		errors.append('Please enter your email.')
	elif not EMAIL_REGEX.match(form['email']):
		errors.append("Please enter a valid format email address 'name@domain.us'")

	if len(form['password']) == 0:
		errors.append('Please choose a password')
	elif len(form['password']) < 8:
		errors.append('Please choose a password greater than 7 characters')
	elif form['password'] != form['passconf']:
		errors.append('Please make sure your passwords match')

	if len(errors) > 0: 
		for error in errors:
			flash(error,'errors')
	else:
		check_email = mysql.query_db('SELECT * FROM users WHERE email = :email', {'email': form['email']})
		if len(check_email) > 0:
			flash("Account at that email already exists", 'errors')
		else:
			query = """INSERT INTO users 
			(first_name, last_name, email, password, created_at, updated_at) 
			VALUES (:first_name, :last_name, :email, :password, NOW(), NOW())"""		
			pw_hash = bcrypt.generate_password_hash('password')
			data = {
				'first_name': form['first_name'],
				'last_name': form['first_name'],
				'email': form['email'],
				'password': pw_hash
			}
		
			try: 
				user_id = mysql.query_db(query, data)
				flash("Congratulations! You are now registered. Please login to continue.")
			except: 
				flash("Something is wrong. Please check errors:","errors")

	return redirect('/') 

@app.route('/login', methods=["POST"])
def login():
	form = request.form
	if EMAIL_REGEX.match(form['email']):
		users = mysql.query_db('SELECT * FROM users WHERE email = :email', {'email': form['email']})
		
        if len(users) > 0:
            user = users[0]
            if bcrypt.check_password_hash(user['password'], form['password']):
                session['current_user'] = user['id']
                flash("Successful login! Welcome!", "success")
                return redirect('/theWall')

	flash('Poor login credentials. Please try again', 'errors')
	return redirect('/')


@app.route('/theWall')
def theWall():
	if 'current_user' not in session:
		flash("You must be logged in to go there!", "errors")
		return redirect('/')
	
	current_user = mysql.query_db("SELECT * FROM users WHERE id = :id", {"id": session['current_user']})
	curr_messages = """SELECT users.first_name, users.last_name, DATE_FORMAT(messages.created_at,'%M %D %Y at %H:%i%p') AS created_at, messages.message FROM messages JOIN users ON users.id = messages.user_id ORDER BY messages.created_at DESC"""
	current_messages = mysql.query_db(curr_messages)
	curr_comments = """SELECT users.first_name, users.last_name, DATE_FORMAT(comments.created_at,'%M %D %Y at %H:%i%p') AS created_at, comments.comment, comments.id, comments.user_id FROM comments JOIN users ON users.id = comments.user_id ORDER BY comments.created_at"""
	current_comments = mysql.query_db(curr_comments)
	return render_template('theWall.html', user=current_user[0], messages=current_messages, comments=current_comments)

@app.route('/makeMessage', methods=["POST"])
def makeMessage():
	if 'current_user' not in session:
		flash("You must be logged in to go there!", "errors")
		return redirect('/')

	form = request.form

	if len(form['message']) == 0:
		flash('Please enter a message to post.')
		return redirect('/theWall')
	
	query = """INSERT INTO messages (message, created_at, updated_at, user_id) 
		VALUES (:message, NOW(), NOW(), :user_id)"""
	try: 
		curr_msg = mysql.query_db(query, {"message": form['message'], "user_id": session['current_user']})
		flash('Congrats! Your message is posted!')
	except: 
			flash('OH $#@^! Something is wrong. Please try again')
	return redirect('/theWall')

@app.route('/makeComment', methods=["POST"])
def makeComment():
	if 'current_user' not in session:
		flash("You must be logged in to go there!", "errors")
		return redirect('/')

	form = request.form

	if len(form['comment']) == 0:
		flash('Please enter a comment to reply.')
		return redirect('/theWall')
	query = """INSERT INTO comments (comment, created_at, updated_at, message_id, user_id) 
		VALUES (:comment, NOW(), NOW(), :message_id, :user_id)"""
	#try: 
	curr_comm = mysql.query_db(query, {"comment": form['comment'], "message_id" :form['message_id'], "user_id": session['current_user']})
	#	flash('Congrats! Your comment is posted!')
	#except: 
	#	flash('OH $#@^! Something is wrong. Please try again')
	return redirect('/theWall')

@app.route('/deleteMessage')
def deleteMessage():
		form = request.form
		date = form['message_time']
		timeLeft = datetime.strptime(date, '%Y-%m-%d %H:%i:%S')
		result = datetime.now() - timeLeft
		if result < timedelta(minutes=30):
			delete_query = "DELETE FROM messages WHERE id = :id;"
			query_data = {'id': form['delete']}
			try: 
				delete_message = mysql.query_db(delete_query, query_data)
				flash('Say goodbye! The message is gone forever.')
			except: 
				flash('OH $#@^! Something is wrong. Please try again')
		else: 
			flash("It's been too long and your message is here to stay forever!")
		
		return redirect('/theWall')

@app.route('/logout')
def logout():
    session.clear()
    return redirect('/')

app.run(debug=True)
