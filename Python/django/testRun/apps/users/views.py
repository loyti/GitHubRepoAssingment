# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, HttpResponse, redirect

# Create your views here.
def index(request):
	response = "Hello. I am your user database"
	return HttpResponse(response)

def login(request): 
	response = "placeholder to login"
	return HttpResponse(response)

def register(request):
	response = "placeholder for new user registration"
	return HttpResponse(response)

def new(request):
	return redirect('/register')
