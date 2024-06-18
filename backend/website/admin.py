from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import AppUser

class CustomUserAdmin(BaseUserAdmin):
    model = AppUser
    list_display = ['email', 'fullname', 'date_of_birth', 'is_staff', 'is_active']
    ordering = ('email',)

admin.site.register(AppUser, CustomUserAdmin)
