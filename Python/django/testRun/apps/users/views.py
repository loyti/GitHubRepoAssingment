# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, HttpResponse, redirect
from models import User

# Create your views here.
def index(request):
	users = Users.objects.all()
	return render (response, "/users.index.html")

def login(request): 
	response = "placeholder to login"
	return HttpResponse(response)

def register(request):
	response = "placeholder for new user registration"
	return HttpResponse(response)

def new(request):
	if request.method == "POST":
		first_name = request.POST['first_name']
		last_name = request.POST['last_name']
		email = request.POST['email']
		User.objects.create(first_name=first_name, last_name=last_name, email=email)
	return redirect('/register')

def show(request, id):
	check_user = User.objects.filter(pk=id)
	if check_user: 
		user = check_user[0]
	else:
		return redirect('/')

	context = {
		"user" : user,
		"user_messages" : Post.objects.filter(recipient=user)
	}
	return render(request, "users/show.html", context)

def create_post(request):
	if request.method != "POST":
		return redirect ('/')
	user = User.objects.get(pk=id)
	Post.objects.create(content=request.POST['content'], recipient_id=request.POST['recipient'])
	return redirect('/users/'+str(request.POST['recipient']))
