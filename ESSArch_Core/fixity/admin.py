from django.contrib import admin
from django.db import models
from django_json_widget.widgets import JSONEditorWidget

from ESSArch_Core.fixity.models import (
    ActionTool, 
    IPProfile,
    ProfileDesc,
    ExternalToolDesc,
)


class ActionToolAdmin(admin.ModelAdmin):
    fields = ('name', 'enabled', 'type', 'environment', 'file_processing', 'delete_original', 'path', 'cmd', 'form')
    list_display = ('name', 'enabled', 'type', 'environment', 'file_processing', 'delete_original')
    formfield_overrides = {
        models.JSONField: {'widget': JSONEditorWidget},
    }


admin.site.register(ActionTool, ActionToolAdmin)
admin.site.register(IPProfile)
admin.site.register(ProfileDesc)
admin.site.register(ExternalToolDesc)
