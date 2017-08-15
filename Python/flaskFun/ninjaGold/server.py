from flask import Flask, render_template, redirect, request, session, flash
import random
import datetime

app = Flask(__name__)
app.secret_key = "secretKey"

@app.route('/')
def index():
	session['gold'] = session.get('gold', 0)
	session['activities'] = session.get('activities',[])
	return render_template("index.html")

@app.route('/process_gold', methods=["POST"])
def process_gold():
	dateNow = datetime.datetime.now()
	if request.form['building'] == "farm":
		addGold = random.randint(10,20)
	if request.form['building'] == "cave":
		addGold = random.randint(5,10)
	if request.form['building'] == "house":
		addGold = random.randint(2,5)
	if request.form['building'] == "casino":
		addGold = random.randint(-50,50)
	if addGold > 0:
		classColor = "green"
		msg = "Earned {} from the {} at {}".format(addGold, request.form['building'], dateNow)
	else:
		classColor = "red"
		msg = "Lost {} from the Casino at {}".format(addGold, dateNow)

	session['activities'].insert(0,(msg, classColor))

	session['gold'] += addGold

	if session['gold'] < 0:
		return redirect('/noGold')
	return redirect('/')

@app.route('/noGold', methods=["GET"])
def noGold():
	session.clear()
	return redirect('/')

app.run(debug=True)
