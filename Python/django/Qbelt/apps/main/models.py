from __future__ import unicode_literals

from django.db import models

from django.utils.timezone import utc

from datetime import datetime, timedelta

import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
noNumberPls = re.compile(r'^[a-zA-Z]+$')

# Create your models here.

class UserManager(models.Manager):
    def user_validator(self, postData):
        errors = []

        if 'email' in postData:
            if len(postData['email']) == 0:
                errors.append('Please enter your email address.')
            elif not EMAIL_REGEX.match(postData['email']):
                errors.append('Please enter a valid email address.')

        if 'user_name' in postData:
            if len(postData['user_name']) == 0:
                errors.append('Please enter your name.')
            elif len(postData['user_name']) < 3:
                errors.append('User name should be no fewer than 3 letters')
            elif not noNumberPls.match(postData['user_name']):
                errors.append('User name should have no numbers or special characters in it.')

        if 'alias' in postData:
            if len(postData['alias']) == 0:
                errors.append('Please enter your alias.')
            elif len(postData['alias']) < 3:
                errors.append('Alias should be no fewer than 3 letters')
            elif not noNumberPls.match(postData['alias']):
                errors.append('Alias should have no numbers or special characters in it.')

        if 'password' in postData:
            if len(postData['password']) == 0:
                errors.append('Please enter your password.')
            elif len(postData['password']) < 8:
                errors.append('Password should be no fewer than 8 characters')
            elif postData['password'] != postData['conf_pass']:
                errors.append('Password Confirmation do not match. Please try again.')

        if 'birthday' in postData:
            if len(postData['birthday']) == 0:
                errors.append('Please enter your birth date')
            else:
                birthday = postData['birthday']
                date_format = "%Y-%m-%d"
                birth = datetime.strptime(birthday, date_format).date()
                now = datetime.now().date()

                if birth > now:
                    errors.append('You cannot be born in the future and be reading this. Birthdate must be in the past.')
                elif birth == now:
                    errors.append('Infants cannot register an account. No way you have been born today.')

        return errors

class QuoteManager(models.Manager):
    def quote_validator(self, postData):
        errors = []
        
        if 'author' in postData:
            if len(postData['author']) < 3:
                errors.append('Please enter author name with a least three characters')

        if 'content' in postData:
            if len(postData['content']) < 10:
                errors.append('Please provide a longer quote')

        return errors

class User(models.Model):
    user_name = models.CharField(max_length=255)
    alias = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    birthday = models.DateField(null=True)
    quoteCount = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()

class Quote(models.Model):
    author = models.CharField(max_length=255)
    content = models.TextField()
    user = models.ForeignKey(User, related_name="quotes")
    user_favs = models.ManyToManyField(User, related_name="fav_quotes", blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = QuoteManager()
