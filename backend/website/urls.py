from django.urls import path
from . import views

urlpatterns = [
    path("main/", views.set_up)
]
