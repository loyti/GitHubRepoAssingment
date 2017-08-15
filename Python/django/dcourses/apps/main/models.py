# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.

class CourseManager(models.Manager):
	def form_validator(self, postData):
		errors = {}
		if len(postData['name']) < 11:
			errors['name'] = "Please have correct course title to be a least 10 characters"
		if len(postData['desc']) < 16:
			errors['desc'] = "Please include a longer description about the course"
		return errors

class Course(models.Model):
	name = models.CharField(max_length=255)
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)
	objects = CourseManager()

class Description(models.Model):
	desc = models.CharField(max_length=255)
	created_at = models.DateTimeField(auto_now_add=True)
        updated_at = models.DateTimeField(auto_now=True)
	course = models.OneToOneField(Course, related_name="description",on_delete=models.CASCADE)

class Comment(models.Model):
	content = models.TextField()
	created_at = models.DateTimeField(auto_now_add=True)
        updated_at = models.DateTimeField(auto_now=True)
	course = models.ForeignKey(Course, related_name="comments")
