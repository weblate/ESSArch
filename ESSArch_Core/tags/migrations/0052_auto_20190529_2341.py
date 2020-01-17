# -*- coding: utf-8 -*-
# Generated by Django 1.11.20 on 2019-05-29 21:41
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tags', '0051_auto_20190529_1114'),
    ]

    operations = [
        migrations.AlterField(
            model_name='structureunit',
            name='transfers',
            field=models.ManyToManyField(related_name='structure_units', to='tags.Transfer', verbose_name='transfers'),
        ),
        migrations.AlterField(
            model_name='tagversion',
            name='transfers',
            field=models.ManyToManyField(related_name='tag_versions', to='tags.Transfer', verbose_name='transfers'),
        ),
    ]
