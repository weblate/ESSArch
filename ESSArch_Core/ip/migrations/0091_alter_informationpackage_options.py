# Generated by Django 4.0.7 on 2022-12-29 16:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('ip', '0090_alter_eventip_eventidentifiervalue'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='informationpackage',
            options={'ordering': ['generation', '-create_date'], 'permissions': (('can_upload', 'Can upload files to IP'), ('set_uploaded', 'Can set IP as uploaded'), ('create_sip', 'Can create SIP'), ('submit_sip', 'Can submit SIP'), ('transfer_sip', 'Can transfer SIP'), ('change_sa', 'Can change SA connected to IP'), ('lock_sa', 'Can lock SA to IP'), ('unlock_profile', 'Can unlock profile connected to IP'), ('can_receive_remote_files', 'Can receive remote files'), ('receive', 'Can receive IP'), ('preserve', 'Can preserve IP'), ('preserve_dip', 'Can preserve DIP'), ('get_from_storage', 'Can get extracted IP from storage'), ('get_tar_from_storage', 'Can get packaged IP from storage'), ('get_from_storage_as_new', 'Can get IP "as new" from storage'), ('create_as_new', 'Can create IP as new generation'), ('add_to_ingest_workarea', 'Can add IP to ingest workarea'), ('add_to_ingest_workarea_as_tar', 'Can add IP as tar to ingest workarea'), ('add_to_ingest_workarea_as_new', 'Can add IP as new generation to ingest workarea'), ('diff-check', 'Can diff-check IP'), ('query', 'Can query IP'), ('prepare_ip', 'Can prepare IP'), ('delete_first_generation', 'Can delete first generation of IP'), ('delete_last_generation', 'Can delete last generation of IP'), ('delete_archived', 'Can delete archived IP'), ('see_all_in_workspaces', 'Can see all IPs workspaces'), ('see_other_user_ip_files', 'Can see files in other users IPs')), 'verbose_name': 'information package', 'verbose_name_plural': 'information packages'},
        ),
    ]
