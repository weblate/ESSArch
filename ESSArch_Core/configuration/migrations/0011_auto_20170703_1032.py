# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2017-07-03 08:32
from __future__ import unicode_literals

from django.db import migrations, models


def forwards_func(apps, schema_editor):
    ArchivePolicy = apps.get_model("configuration", "ArchivePolicy")
    db_alias = schema_editor.connection.alias

    ArchivePolicy.objects.using(db_alias).filter(checksum_algorithm=1).update(checksum_algorithm=0)
    ArchivePolicy.objects.using(db_alias).filter(checksum_algorithm=2).update(checksum_algorithm=3)


def reverse_func(apps, schema_editor):
    ArchivePolicy = apps.get_model("configuration", "ArchivePolicy")
    db_alias = schema_editor.connection.alias

    ArchivePolicy.objects.using(db_alias).filter(checksum_algorithm=0).update(checksum_algorithm=1)
    ArchivePolicy.objects.using(db_alias).filter(checksum_algorithm=3).update(checksum_algorithm=2)


class Migration(migrations.Migration):

    dependencies = [
        ('configuration', '0010_merge_20170321_1342'),
    ]

    operations = [
        migrations.AlterField(
            model_name='archivepolicy',
            name='checksum_algorithm',
            field=models.IntegerField(choices=[(0, 'md5'), (3, 'sha-256')], default=1, verbose_name='Checksum algorithm'),
        ),
        migrations.RunPython(forwards_func, reverse_func),
    ]
