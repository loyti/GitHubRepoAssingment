# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, HttpResponse, redirect

# Create your views here.
def index(request):
	response = "Hello. I am your surveys"
	return HttpResponse(response)

def new(request):
	resonse = "Greetings and welcome to the survey section"
	return HttpResponse(response)
