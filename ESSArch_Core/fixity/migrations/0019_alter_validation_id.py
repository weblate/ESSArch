# Generated by Django 4.2.11 on 2024-03-04 18:23

from django.db import migrations
import uuid

from django.db.migrations.operations.fields import AlterField
from django.db.models import NOT_PROVIDED
from django.db import models


class AlterField_char32_to_realUUID(AlterField):
    def database_forwards(self, app_label, schema_editor, from_state, to_state):
        to_model = to_state.apps.get_model(app_label, self.model_name)
        if self.allow_migrate_model(schema_editor.connection.alias, to_model):
            from_model = from_state.apps.get_model(app_label, self.model_name)
            from_field = from_model._meta.get_field(self.name)
            if hasattr(schema_editor.connection, 'mysql_is_mariadb') and schema_editor.connection.mysql_is_mariadb:
                cursor = schema_editor.connection.cursor()
                cursor.execute(
                    'SELECT COLUMN_TYPE FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME=%s and COLUMN_NAME=%s',
                    [from_model._meta.db_table, self.name])
                from_field_is_char32 = 'char(32)' in cursor.fetchone()
                mariadb_has_native_uuid_field = schema_editor.connection.features.has_native_uuid_field and \
                    schema_editor.connection.mysql_is_mariadb
                if from_field_is_char32 and mariadb_has_native_uuid_field:
                    from_field.__class__ = models.fields.CharField
                    from_field.db_collation = None
            to_field = to_model._meta.get_field(self.name)
            if not self.preserve_default:
                to_field.default = self.field.default
            schema_editor.alter_field(from_model, from_field, to_field)
            if not self.preserve_default:
                to_field.default = NOT_PROVIDED


class Migration(migrations.Migration):

    dependencies = [
        ('fixity', '0018_auto_20210826_1707'),
    ]

    operations = [
        AlterField_char32_to_realUUID(
            model_name='validation',
            name='id',
            field=models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False),
        ),
    ]
