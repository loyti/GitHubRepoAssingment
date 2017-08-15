from flask import Flask, render_template, redirect, request, session, flash
import random

app = Flask(__name__)
app.secret_key = "secretKey"

@app.route('/')
def index():
	session['opponentOutcome'] = session.get('opponentOutcome', random.randint(1,100))
	return render_template("index.html")

@app.route('/process_guess', methods=['POST'])
def process_guess():
	opponentNum = session['opponentOutcome']
	userGuess = request.form['numberGuess']
	print opponentNum, userGuess

	if opponentNum == int(userGuess):
		userOutcome = 'Amazing! You guessed it!'
	elif opponentNum > int(userGuess):
		userOutcome = "You're too low"
	else:
		userOutcome = "You're too high"

	session['userOutcome'] = userOutcome

	return redirect('/')	

@app.route('/clearNum', methods=['POST'])
def clearNum():
	session.clear()
	return redirect('/')

app.run(debug=True)
