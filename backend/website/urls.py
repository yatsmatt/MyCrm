from django.urls import path,include
from . import views
from rest_framework.routers import DefaultRouter
 
router = DefaultRouter()
router.register(r'users', views.UserViewSet)

urlpatterns = [
    path("home/", views.set_up),
    path('', include(router.urls)),
    path("create/",views.CreateCustomUser.as_view(),name='user-create'),
    path("createsuper/",views.CreateCustomSuperUser.as_view(),name='user-create'),
]+router.urls
