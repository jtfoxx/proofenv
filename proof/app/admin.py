from django.contrib import admin
from app.models import Category, User, Program, Asset
from django.contrib.auth.models import Group
from django.contrib.auth.admin import UserAdmin
from app.forms import CategoryAdminForm, UserAdminForm
from django import forms
from app.models import ROLES


class UserAdmin(admin.ModelAdmin):
    list_display = (
        "username",
        "first_name",
        "last_name",
        "role",
        "last_login",
        "date_joined",
        "is_active"
    )
    search_fields = ("username", "first_name", "last_name")
    fields = (
        ("first_name", "last_name"),
        ("username", "password"),
        ("role", "is_active"),
        ("last_login", "date_joined"),
    )

    form = UserAdminForm

    def save_model(self, request, instance, form, changes):
        if instance.pk:
            user = User.objects.get(pk=instance.pk)
            if user.password != instance.password:
                instance.set_password(instance.password)
        else:
            instance.set_password(instance.password)
        instance.save()


class ProgramAdmin(admin.ModelAdmin):
    list_display = ("category", "name", "image", "idx")
    search_fields = ("name",)
    list_filter = ("category",)


class AssetAdmin(admin.ModelAdmin):
    list_display = ("url", "title", "program", "role", "day", "created_at")
    search_fields = ("title", "url", "description", "role")


class CategoryAdmin(admin.ModelAdmin):
    list_display = ("name", "role", "idx")
    form = CategoryAdminForm


admin.site.register(User, UserAdmin)
admin.site.register(Program, ProgramAdmin)
admin.site.register(Asset, AssetAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.unregister(Group)
