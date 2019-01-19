from django.contrib import admin
from .models import Card, Popup, Room
from django.contrib import admin

class CardAdmin(admin.ModelAdmin):
    list_display = ['name']

class PopupAdmin(admin.ModelAdmin):
    list_display = ['name', 'description', 'published']
    list_filter = ['published', 'published']
    search_fields = ('name', 'description')
    fieldsets = (
        (None, {
            'fields': ('name', 'description')
        }),
        ('Option', {
            'fields': ('published', ),
            'classes': ('collapse', )
        }),
    )

class RoomAdmin(admin.ModelAdmin):
  list_display = ['name', 'html1', 'html2', 'html3']


# Register your models here.
admin.site.site_title = 'Site Title'
admin.site.site_header = 'Site Header'
# admin.site.register(Card, CardAdmin)
# admin.site.register(Popup, PopupAdmin)
admin.site.register(Room, RoomAdmin)