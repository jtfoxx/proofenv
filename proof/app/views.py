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
from app.models import Asset, User, Program
from app.serializers import ProgramSerializer, AssetSerializer
from django.db.models import Q
from django.db import IntegrityError
import copy


class ProgramViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = ProgramSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):

        user_role = copy.copy(self.request.user.role)

        if self.request.user.is_superuser:
            return Program.objects.all().order_by("idx")
        else:
            programs = False
            for role in user_role.strip("][").replace("'", "").split(','):
                role = role.strip()
                p = Program.objects.filter(
                    role__icontains=role).order_by("idx")
                if programs:
                    programs = programs | p
                else:
                    programs = p
            return programs


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
        u = User.objects.create_user(
            username=Email, password=Id, first_name=FirstName, last_name=LastName, role=role
        )
    except IntegrityError:
        return HttpResponse("User already exists")

    if u is not None:
        return HttpResponse("Added %s" % u.username)

    return HttpResponse("Possible error occured")
