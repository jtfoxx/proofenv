from django.urls import path, include, re_path
from frontend import views

app_name = "frontend"
urlpatterns = [
    path("", views.home, name="home"),
]
