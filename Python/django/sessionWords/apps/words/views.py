# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from django import forms
from django.contrib import messages
import datetime
from time import gmtime, strftime

def index(request):
	session = request.session
	session['messages'] = session.get('messages',[])
	return render(request, 'words/index.html')

def process(request):
	errors = []
	if request.method == "POST":
		if request.POST['words'] == "":
			errors.append("Please provide content")
		if 'color' not in request.POST:	
			errors.append("Please select a color")
		if len(errors) > 0:
			for error in errors:
				messages.error(request, error)
			return redirect ('/')

		words = request.POST['words']
		colors = request.POST['color']

		curr_time = strftime("%A %B %d, %Y %H:%M %p", gmtime())
		msgs = request.session['messages']
		msgs.insert(0,(words, colors, curr_time))
		request.session['messages'] = msgs

	return redirect('/')


def clearSession(request):
	if request.method == "POST":
		request.session.clear()
		return redirect('/')
