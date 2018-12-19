# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2017-02-23 10:16
from __future__ import unicode_literals

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('configuration', '0005_defaultcolumnvisible_defaultsorting_defaultvalue'),
    ]

    operations = [
        migrations.CreateModel(
            name='ArchivePolicy',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('policy_id', models.CharField(max_length=32, unique=True, verbose_name='Policy ID')),
                ('policy_name', models.CharField(max_length=255, verbose_name='Policy Name')),
                ('policy_stat', models.BooleanField(default=False, verbose_name='Policy Status')),
                ('ais_project_name', models.CharField(blank=True, max_length=255, verbose_name='AIS Policy Name')),
                ('ais_project_id', models.CharField(blank=True, max_length=255, verbose_name='AIS Policy ID')),
                ('mode', models.IntegerField(choices=[(0, 'master'), (2, 'ais')], default=0)),
                ('wait_for_approval', models.IntegerField(choices=[(0, 'no'), (2, 'ingestrequest')], default=2, verbose_name='Wait for approval')),
                ('checksum_algorithm', models.IntegerField(choices=[(1, 'md5'), (2, 'sha-256')], default=1, verbose_name='Checksum algorithm')),
                ('validate_checksum', models.BooleanField(default=True, verbose_name='Validate checksum')),
                ('validate_xml', models.BooleanField(default=True, verbose_name='Validate XML')),
                ('ip_type', models.IntegerField(choices=[(1, 'tar')], default=1, verbose_name='IP type')),
                ('preingest_metadata', models.IntegerField(choices=[(0, 'disabled'), (1, 'res')], default=0, verbose_name='Pre ingest metadata')),
                ('ingest_metadata', models.IntegerField(choices=[(1, 'mets'), (4, 'mets (eard)')], default=4, verbose_name='Ingest metadata')),
                ('information_class', models.IntegerField(choices=[(0, '0'), (1, '1'), (2, '2'), (3, '3'), (4, '4')], default=0, verbose_name='Information class')),
                ('ingest_delete', models.BooleanField(default=True, verbose_name='Delete SIP after success to create AIP')),
            ],
            options={
                'ordering': ['policy_name'],
                'verbose_name': 'archive policy',
                'verbose_name_plural': 'archive policies',
            },
        ),
    ]
