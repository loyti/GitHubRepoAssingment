# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, HttpResponse, redirect
from django.utils.crypto import get_random_string
from django.shortcuts import render, redirect
from django import forms
from django.contrib import messages
import datetime
from time import gmtime, strftime
import re
from models import User


#EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

def index(request):
	allUsers = User.objects.values()
	context = {
		'allUsers': allUsers
	}
	return render(request, 'users/index.html', context)

def new(request):

	return render(request, 'users/new.html')

def edit(request, id):
	check_user = User.objects.filter(pk=id)
        if check_user:
                user = check_user[0]
        else:
                return redirect('/')
        context = {
                'user' : user
        }

	return render(request, 'users/edit.html', context)

def show(request, id):
	check_user = User.objects.filter(pk=id)
	if check_user:
		user = check_user[0]
	else:
		return redirect('/')
	context = {
		'user' : user
	}
	return render(request, 'users/show.html', context)

def delete(request, id):
	user = User.objects.get(pk=id)
	user.delete()
	return redirect('/')

def create(request):
	errors = []
	dateNow = datetime.datetime.now()
	if request.method == "POST":
		first_name = request.POST['first_name']
		last_name = request.POST['last_name']
		email = request.POST['email']
		if request.POST['first_name'] == "":
			errors.append("Please provide your first name")
		if request.POST['last_name'] == "":
			errors.append("Please provide your last name")
		if request.POST['email'] == "":
			errors.append("Please provide your email")
#		elif EMAIL_REGEX.match(email):
#			errors.append("Please provide a valid email 'name@domain.us' Thank you")
		if len(errors) > 0:
			for error in errors:
				print errors
				messages.error(request, error)
			return redirect('/users/new')

		new_user = User(first_name = request.POST['first_name'], last_name = request.POST['last_name'], email = request.POST['email'])
		new_user.save()
		new_id = new_user.id

#		User.objects.create(first_name=first_name, last_name=last_name, email=email)

		return redirect('/users/' + str(new_id))

def update(request, id):
	if request.method == "POST":
		user = User.objects.get(id=request.POST['id'])
		print user
		user.first_name = request.POST['first_name']
		user.last_name = request.POST['last_name']
		user.email = request.POST['email']
		user.save()
		urlID = user.id
	return redirect('/users/' + str(urlID))
