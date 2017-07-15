# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render, HttpResponse, redirect
from django.utils.crypto import get_random_string

from django.shortcuts import render

# Create your views here.

def index(request):
	context = {
		'randomWord': get_random_string(length=32),
		'randomNum': get_random_string(length=5)
	}
	return render(request, 'randomWord/index.html', context)

def addSession(request):
        if request.method == "POST":
                if "sessionCount" not in request.session: 
			request.session['sessionCount'] = 0
			return redirect('/randomWord')
		else:
			request.session['sessionCount'] += 1
                	return redirect('/randomWord')

def clearSession(request):
	if request.method == "POST":
		request.session['sessionCount'] = 0
		return redirect('/randomWord') 
