# Generated by Django 3.0.4 on 2020-05-18 13:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fixity', '0008_rename_conversion_to_action'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='actiontool',
            options={'verbose_name': 'action tool', 'verbose_name_plural': 'action tools'},
        ),
        migrations.AddField(
            model_name='actiontool',
            name='docker',
            field=models.BooleanField(default=False, verbose_name='docker'),
        ),
        migrations.AddField(
            model_name='actiontool',
            name='file_processing',
            field=models.BooleanField(default=False, verbose_name='file processing (pattern)'),
        ),
        migrations.AlterField(
            model_name='actiontool',
            name='cmd',
            field=models.TextField(verbose_name='options or command'),
        ),
        migrations.AlterField(
            model_name='actiontool',
            name='enabled',
            field=models.BooleanField(default=True, verbose_name='enabled'),
        ),
        migrations.AlterField(
            model_name='actiontool',
            name='form',
            field=models.JSONField(
                blank=True, default='[\n        {\n            "key": "path",\n            "type": "input",\n            "templateOptions": {\n                "label": "PATH_i18n",\n                "required": true\n            },\n            "expressionProperties":{\n                "templateOptions.label":"\\"PATH\\" | translate"\n            }\n        }\n]', null=True, verbose_name='form'),
        ),
        migrations.AlterField(
            model_name='actiontool',
            name='type',
            field=models.CharField(choices=[('conversion', 'Conversion Tool'), ('collection', 'Collection Tool'), (
                'transformation', 'Transformation Tool'), ('validation', 'Validation Tool')], max_length=20, verbose_name='type'),
        ),
    ]
