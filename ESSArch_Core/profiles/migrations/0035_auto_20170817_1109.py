# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2017-08-17 09:09
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import jsonfield.fields
import uuid


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('profiles', '0033_submissionagreement_published'),
    ]

    operations = [
        migrations.CreateModel(
            name='ProfileIPData',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('data', jsonfield.fields.JSONField(default={})),
                ('version', models.IntegerField(default=0)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('relation', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='data_versions', to='profiles.ProfileIP')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'ordering': ['version'],
                'permissions': (('profile_management', 'Can manage profiles'),),
            },
        ),
        migrations.AddField(
            model_name='profileip',
            name='data',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='profiles.ProfileIPData'),
        ),
    ]
