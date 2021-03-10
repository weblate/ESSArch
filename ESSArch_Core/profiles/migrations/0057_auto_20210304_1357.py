# Generated by Django 3.1.2 on 2021-03-04 12:57

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('configuration', '0024_auto_20200309_1535'),
        ('profiles', '0056_auto_20201014_1920'),
    ]

    operations = [
        migrations.AlterField(
            model_name='submissionagreement',
            name='policy',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='submission_agreements',
                                    to='configuration.storagepolicy', verbose_name='storage policy'),
        ),
    ]