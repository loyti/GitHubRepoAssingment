# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2017-07-22 13:55
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0007_auto_20170722_1354'),
    ]

    operations = [
        migrations.RenameField(
            model_name='quote',
            old_name='favQoutes',
            new_name='favQuotes',
        ),
    ]
