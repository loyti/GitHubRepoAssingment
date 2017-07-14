# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, HttpResponse, redirect

from django.contrib import messages
from time import gmtime, strftime
from django.utils.crypto import get_random_string

# Create your views here.

def index(request):
	response = "Hello. Welcome to the Blogs"
	return HttpResponse(response)

def new(request):
	response = "New blog placeholder"
	return HttpResponse(response)

def create(request):
	response = "create blog placeholder"
	return HttpResponse(redirect('/'))

def show(request,blog_id):
	response = "placeholder for specific blog <blog_id>"
	return HttpResponse(response)

def edit(request):
	response = "placeholder to display blog number"
	return HttpResponse(response)

def destroy(request):
	response = "method to delete blogs"
	return HttpResponse(redirect('/'))
