from django.urls import path, include, re_path
from rest_framework import routers
from app import views
from frontend.views import home

app_name = "app"

router = routers.DefaultRouter()
router.register("programs", views.ProgramViewSet, basename='program')
router.register("assets",
                views.AssetViewSet, basename='asset')


urlpatterns = [
    path("", views.home, name="home"),
    path("add_user", views.add_user, name="add_user"),
    path("login_page/", views.LoginView.as_view(), name="login_page"),
    path("logged_in", views.logged_in, name="logged_in"),
    path("logout_page/", views.logout_page, name="logout_page"),
    path("api/", include(router.urls)),
    path("accounts/", include("django.contrib.auth.urls")),
    # re_path(r'.*', home),

]
