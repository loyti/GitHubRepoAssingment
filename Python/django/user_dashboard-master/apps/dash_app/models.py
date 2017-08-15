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

        if 'first_name' in postData:
            if len(postData['first_name']) == 0:
                errors.append('Please enter your first name.')
            elif len(postData['first_name']) < 2:
                errors.append('First name should be no fewer than 2 letters')
            elif not noNumberPls.match(postData['first_name']):
                errors.append('First name should have no numbers or special characters in it.')

        if 'last_name' in postData:
            if len(postData['last_name']) == 0:
                errors.append('Please enter your last name.')
            elif len(postData['last_name']) < 2:
                errors.append('Last name should be no fewer than 2 letters')
            elif not noNumberPls.match(postData['last_name']):
                errors.append('Last name should have no numbers or special characters in it.')

        if 'password' in postData:
            if len(postData['password']) == 0:
                errors.append('Please enter your password.')
            elif len(postData['password']) < 8:
                errors.append('Password should be no fewer than 8 characters')
            elif postData['password'] != postData['conf_pass']:
                errors.append('Password Confirmation do not match. Please try again.')

        return errors

    def past_validator(self, postData):
        start_date = postData['start_date'] # Change as necessary
        end_date = postData['end_date'] # Change as necessary

        date_format = "%d/%m/%Y %H:%M:%S" # Change as necessary

        # create datetime objects from the strings
        start = datetime.strptime(start_date, date_format)
        end = datetime.strptime(end_date, date_format)
        now = datetime.now()

        if end < now:
            event = 'past'
        elif start > now:
            event = 'future'
        else:
            event = 'now'
        return event

class User(models.Model):
    first_name = models.CharField(max_length=255)
    last_name  = models.CharField(max_length=255)
    email      = models.CharField(max_length=255)
    password   = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now    =True)
    user_level = models.IntegerField()
    desc       = models.TextField(null=True,blank=True)
    objects    = UserManager()


class Post(models.Model):
    content    = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now    =True)
    user       = models.ForeignKey(User, related_name = "posts")
    user_wall  = models.ForeignKey(User, related_name = "posts_wall", null=True)

    def get_time(self):
        if self.created_at:
            now = datetime.utcnow().replace(tzinfo=utc)
            timediff = now - self.created_at
            total_sec = timediff.total_seconds()

            # sec = timedelta(seconds=int(input(total_sec_duration)))
            # d = datetime(1,1,1) + sec

            # print("DAYS:HOURS:MIN:SEC")
            # print("%d:%d:%d:%d" % (d.day-1, d.hour, d.minute, d.second))


            # converts to months weeks days
            intervals = (
                    ('months', 2419200),# 60 * 60 * 24 * 7 * 4
                    ('weeks', 604800),  # 60 * 60 * 24 * 7
                    ('days', 86400),    # 60 * 60 * 24
                    ('hours', 3600),    # 60 * 60
                    ('minutes', 60),
                    ('seconds', 1),
                )

            result = []
            granularity = 2

            for name, count in intervals:
                value = int(total_sec) // count
                if value:
                    total_sec -= value * count
                    if value == 1:
                        name = name.rstrip('s')
                    result.append("{} {}".format(value, name))
            statement = ', '.join(result[:granularity])

            if timedelta(seconds=total_sec) > timedelta(days=150):
                return self.created_at

        return statement + ' ago'


class Comment(models.Model):
    content    = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now    =True)
    post       = models.ForeignKey(Post, related_name = "comments")
    user       = models.ForeignKey(User, related_name = "comments")

    def get_time(self):
        if self.created_at:
            now = datetime.utcnow().replace(tzinfo=utc)
            timediff = now - self.created_at
            total_sec = timediff.total_seconds()


            # converts seconds difference to months weeks days
            intervals = (
                    ('months', 2419200),# 60 * 60 * 24 * 7 * 4
                    ('weeks', 604800),  # 60 * 60 * 24 * 7
                    ('days', 86400),    # 60 * 60 * 24
                    ('hours', 3600),    # 60 * 60
                    ('minutes', 60),
                    ('seconds', 1),
                )

            result = []
            granularity = 2

            for name, count in intervals:
                value = int(total_sec) // count
                if value:
                    total_sec -= value * count
                    if value == 1:
                        name = name.rstrip('s')
                    result.append("{} {}".format(value, name))
            statement = ', '.join(result[:granularity])

            if timedelta(seconds=total_sec) > timedelta(days=150):
                return self.created_at

        return statement + ' ago'
