# Generated by Django 2.2.8 on 2019-12-13 10:06

from django.db import migrations, models
import django.db.models.deletion




class Migration(migrations.Migration):

    dependencies = [
        ('configuration', '0021_delete_agent'),
        ('profiles', '0052_submissionagreementipdata'),
    ]

    operations = [
        migrations.AddField(
            model_name='submissionagreement',
            name='policy',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, related_name='submission_agreements', to='configuration.StoragePolicy'),
        ),
    ]