# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2017-03-21 10:18
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import picklefield.fields

def create_default_for_existing_users(apps, schema_editor):
    User = apps.get_model("auth", "User")
    UserProfile = apps.get_model("essauth", "UserProfile")
    db_alias = schema_editor.connection.alias

    for user in User.objects.using(db_alias).filter(user_profile__isnull=True):
        UserProfile.objects.create(user=user)

def nothing(apps, schema_editor):
    pass

class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='UserProfile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ip_list_columns', picklefield.fields.PickledObjectField(default=['object_identifier_value', 'responsible', 'create_date', 'state', 'step_state', 'events', 'status', 'delete'], editable=False)),
                ('ip_list_view_type', models.CharField(choices=[('aic', 'AIC'), ('ip', 'IP')], default='aic', max_length=10)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='user_profile', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'db_table': 'essauth_userprofile',
            },
        ),
        migrations.RunPython(create_default_for_existing_users, nothing),
    ]
