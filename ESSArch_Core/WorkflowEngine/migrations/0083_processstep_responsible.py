# Generated by Django 4.1.10 on 2023-08-08 17:03

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('WorkflowEngine', '0082_processstep_queue_processtask_queue'),
    ]

    operations = [
        migrations.AddField(
            model_name='processstep',
            name='responsible',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='steps', to=settings.AUTH_USER_MODEL),
        ),
    ]