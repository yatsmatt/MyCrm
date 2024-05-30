from django.urls import path
from . import views
from django.contrib import messages

urlpatterns = [
    path("home/", views.set_up),
    path("login/", views.login_user),
    path("logout/", views.logout_user)
]
