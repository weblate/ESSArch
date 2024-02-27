# Generated by Django 4.1.7 on 2023-03-13 20:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('configuration', '0028_alter_storagepolicy_checksum_algorithm'),
    ]

    operations = [
        migrations.AlterField(
            model_name='storagepolicy',
            name='checksum_algorithm',
            field=models.IntegerField(choices=[(1, 'MD5'), (2, 'SHA-1'), (3, 'SHA-256'), (4, 'SHA-384'), (5, 'SHA-512')], default=1, verbose_name='Checksum algorithm'),
        ),
    ]
