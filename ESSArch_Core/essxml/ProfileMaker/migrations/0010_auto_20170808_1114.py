# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2017-08-08 09:14
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ProfileMaker', '0009_auto_20161020_0959'),
    ]

    operations = [
        migrations.AddField(
            model_name='extensionpackage',
            name='nsmap',
            field=models.JSONField(default={}),
        ),
        migrations.AddField(
            model_name='templatepackage',
            name='nsmap',
            field=models.JSONField(default={}),
        ),
    ]
