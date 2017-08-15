# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from django import forms
from django.contrib import messages
import datetime
import random
from time import gmtime, strftime

# Create your views here.

def index(request):
	session = request.session
	session['gold'] = session.get('gold', 0)
	session['activities'] = session.get('activities',[])
	return render(request, 'dninja/index.html')

def process_gold(request):
	session = request.session
	gold = request.session.get('gold', 0)
        activities = session.get('activities',[])
	dateNow = datetime.datetime.now()

	if request.POST['building'] == "farm":
		addGold = random.randint(10,20)
	if request.POST['building'] == "cave":
                addGold = random.randint(5,10)
	if request.POST['building'] == "house":
                addGold = random.randint(2,5)
	if request.POST['building'] == "casino":
                addGold = random.randint(-50,50)

	if addGold > 0:
		print addGold, gold
		classColor = "green"
		msg = "Earned {} from the {} at {}".format(addGold, request.POST['building'], dateNow)
	else:
		print addGold, gold
		classColor = "red"
		msg = "Lost {} from the Casino at {}".format(addGold, dateNow)

	session['gold'] += addGold
	
	activities.insert(0,(msg, classColor))

	session['activities'] = activities

	if session['gold'] < 0:
		msg = "You lost everything but we'll give you a fresh start"
		return redirect('/noGold')
	return redirect('/')

def noGold(request):
	request.session.clear()
	return redirect('/')
