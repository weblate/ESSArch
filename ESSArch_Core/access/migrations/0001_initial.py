# Generated by Django 3.1.2 on 2021-06-13 06:13

from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AccessAidType',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=255, unique=True, verbose_name='name')),
            ],
            options={
                'verbose_name': 'access aid type',
                'verbose_name_plural': 'access aid types',
            },
        ),
        migrations.CreateModel(
            name='AccessAid',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=255, unique=True, verbose_name='name')),
                ('description', models.TextField(blank=True, verbose_name='description')),
                ('start_date', models.DateField(null=True, verbose_name='start date')),
                ('end_date', models.DateField(null=True, verbose_name='end date')),
                ('security_level', models.IntegerField(null=True, verbose_name='security level')),
                ('link', models.TextField(blank=True, verbose_name='href')),
                ('type', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='access_aids', to='access.accessaidtype')),
            ],
        ),
    ]
