# Generated by Django 4.0.8 on 2023-02-21 15:27

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('auth', '0012_alter_user_first_name_max_length'),
        ('essauth', '0025_alter_groupgenericobjects_unique_together'),
        ('tags', '0074_tagversionuserobjectpermission_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='StructureUnitUserObjectPermission',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content_object', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='tags.structureunit')),
                ('permission', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='auth.permission')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'abstract': False,
                'unique_together': {('user', 'permission', 'content_object')},
            },
        ),
        migrations.CreateModel(
            name='StructureUnitGroupObjects',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content_object', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='tags.structureunit')),
                ('group', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='essauth.group')),
            ],
            options={
                'abstract': False,
                'unique_together': {('group', 'content_object')},
            },
        ),
        migrations.CreateModel(
            name='StructureUnitGroupObjectPermission',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content_object', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='tags.structureunit')),
                ('group', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='auth.group')),
                ('permission', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='auth.permission')),
            ],
            options={
                'abstract': False,
                'unique_together': {('group', 'permission', 'content_object')},
            },
        ),
    ]
