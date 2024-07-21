from django.http import JsonResponse
from rest_framework import generics
from .models import AppUser
from .serializers import UserSerializer,SuperUserSerializer
from rest_framework.permissions import AllowAny
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

class CreateCustomUser(generics.CreateAPIView):
    queryset = AppUser.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny] 

class CreateCustomSuperUser(generics.CreateAPIView):
    queryset = AppUser.objects.all()
    serializer_class = SuperUserSerializer
    permission_classes = [AllowAny] 

class UserViewSet(viewsets.ModelViewSet):
    queryset = AppUser.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny] 

    #delete the user by email
    @action(detail=False, methods=['get'], url_path='get-by-email')
    def get_by_email(self, request):
            email = request.data.get('email')
            print(email)
            if email is None:
                 return Response({"error: email send is null"})
            try:
                 user=AppUser.objects.get(email=email)
                 serializer=self.get_serializer(user)
                 return Response(serializer.data)
            except AppUser.DoesNotExist:
                 return Response({"error:email do not existe "})
   
    #delete the user by email
    @action(detail=False, methods=['delete'], url_path='delete-by-email')
    def delete_by_email(self, request):
            email = request.data.get('email')
            print(email)
            if email is None:
                 return Response({"error: email send is null"})
            try:
                 user=AppUser.objects.get(email=email)
                 user.delete()
                 return Response({"message: user as been delated"})
            except AppUser.DoesNotExist:
                 return Response({"error:email do not existe "})
            
def set_up(request):
    data = {
        'message': 'Hello world!'
    }
    return JsonResponse(data)



