from django.shortcuts import render
from django.http import JsonResponse

def set_up(request):
    data = {
        'message': 'Hello, world!'
    }
    return JsonResponse(data)