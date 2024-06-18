from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import viewsets
from .models import AppUser
from .serializers import UserSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = AppUser.objects.all()
    serializer_class = UserSerializer



def set_up(request):
    data = {
        'message': 'Hello world!'
    }
    return JsonResponse(data)

def login_user(request):
    pass

def logout_user(request):
    pass