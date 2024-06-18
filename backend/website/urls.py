from django.urls import path,include
from . import views
from django.contrib import messages
from rest_framework.routers import DefaultRouter
from .views import UserViewSet

router = DefaultRouter()
router.register('users', UserViewSet)

urlpatterns = [
    path("home/", views.set_up),
    path("login/", views.login_user),
    path("logout/", views.logout_user),
    path('', include(router.urls)),
]
