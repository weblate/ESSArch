# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-09-25 08:14
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('WorkflowEngine', '0066_auto_20170924_1844'),
    ]

    operations = [
        migrations.AlterField(
            model_name='processtask',
            name='information_package',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='ip.InformationPackage'),
        ),
    ]
