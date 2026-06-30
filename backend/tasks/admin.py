from django.contrib import admin

from .models import Task, CheckItem, Tag

admin.site.register(Task)
admin.site.register(CheckItem)
admin.site.register(Tag)
