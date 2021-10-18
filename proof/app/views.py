from django.db.models.query import QuerySet
from django.shortcuts import render, reverse
from rest_framework import viewsets, permissions
from django.contrib.auth.decorators import login_required
from django.http import HttpResponseRedirect, HttpResponse
from django.views import View
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.forms import AuthenticationForm
from django.views.decorators.csrf import csrf_exempt
from django.core import serializers
from app.models import *
from app.serializers import CategorySerializer, ProgramSerializer, AssetSerializer
from django.db.models import Q
from django.db import IntegrityError
import copy
import re


def get_by_role(user_role, **kwargs):
    categories = False
    for role in user_role.strip("][").replace("'", "").split(','):
        role = role.strip()
        c = Category.objects.filter(
            role__icontains=role, **kwargs).order_by("idx")
        if categories:
            categories = categories | c
        else:
            categories = c
    return categories


class CategoryListViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = CategorySerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user_role = copy.copy(self.request.user.role)
        if self.request.user.is_superuser:
            return Category.objects.all().order_by("idx")
        else:
            categories = get_by_role(user_role)
            return categories


class ProgramListViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = ProgramSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user_role = copy.copy(self.request.user.role)
        category = self.request.GET.get('category')
        return Program.objects.filter(category=category).order_by("idx")


class ProgramDetailViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = ProgramSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user_role = copy.copy(self.request.user.role)

        if self.request.user.is_superuser:
            return Program.objects.filter(pk=self.request.GET.get('program_id'))
        else:
            return Program.objects.filter(pk=self.request.GET.get('program_id'))
            # return get_programs_by_role(user_role, pk=self.request.GET.get('program_id'))


class AssetViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = AssetSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Asset.objects.select_related('program').filter(
            active=True, program_id=self.request.GET.get('program_id')).order_by("day")


class LoginView(View):
    template_name = "login/login.html"

    def get(self, request):
        form = AuthenticationForm()
        if request.user.is_authenticated:
            return HttpResponseRedirect("/logged_in")
        return render(request, self.template_name, {"form": form})

    def post(self, request):
        form = AuthenticationForm(data=request.POST)
        if form.is_valid():
            username = request.POST["username"]
            password = request.POST["password"]
            user = authenticate(username=username,
                                password=password, is_active=True)
            login(request, user)
            if user is not None:
                return HttpResponseRedirect(reverse("app:logged_in"))
        return render(request, self.template_name, {"form": form})


def home(request):
    return HttpResponseRedirect("/login_page")


def logout_page(request):
    if request.user.is_authenticated:
        logout(request)
    return HttpResponseRedirect(reverse("app:home"))


def logged_in(request):
    user = request.user
    print(user.username)
    if user.is_authenticated:
        if user.is_superuser:
            return HttpResponseRedirect(reverse("admin:index"))
        elif not user.is_superuser:
            return HttpResponseRedirect(reverse("frontend:home"))
    return HttpResponseRedirect("/login_page")


@ csrf_exempt
def add_user(request):
    Id = request.POST["Id"]
    Email = request.POST["Email"]
    FirstName = request.POST["FirstName"]
    LastName = request.POST["LastName"]
    role = request.POST.get('role', 'level1')

    try:
        u = User.objects.get(username=Email)
        if role not in u.role:
            roles = re.sub('[\]\[\s\']', '', u.role)
            roles = roles.split(',')
            roles.append(role)
            u.role = roles
            u.save()
    except User.DoesNotExist:
        u = User.objects.create_user(
            username=Email, password=Id, first_name=FirstName, last_name=LastName, role=role
        )

    if u is not None:
        return HttpResponse("Added %s" % u.username)

    return HttpResponse("Possible error occured")
