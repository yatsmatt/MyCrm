from rest_framework import serializers
from .models import AppUser

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = AppUser
        fields = ('id','email', 'fullname',  'date_of_birth', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = AppUser.objects.create_user(**validated_data)
        return user

class SuperUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = AppUser
        fields = ('id','email', 'fullname',  'date_of_birth', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = AppUser.objects.create_superuser(**validated_data)
        return user