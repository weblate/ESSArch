# Generated by Django 2.2.6 on 2019-10-23 14:57

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('configuration', '0020_eventtype_category'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Agent',
        ),
    ]