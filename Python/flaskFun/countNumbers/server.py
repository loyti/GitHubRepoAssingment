from flask import Flask, render_template, redirect, request, session, flash
import random

app = Flask(__name__)
app.secret_key = "secretKey"

@app.route('/')
def index():
	session['counter'] = session.get('counter',0)
	return render_template("index.html")

@app.route('/process_play', methods=['POST'])
def process_play():
	session['counter'] += 1
	return redirect('/')

@app.route('/process_play2', methods=['POST'])
def process_play2():
	session['counter'] += 2
	return redirect('/')

@app.route('/clearCount', methods=['POST'])
def clearCount():
	session.pop('counter')
	return redirect('/')

app.run(debug=True)
