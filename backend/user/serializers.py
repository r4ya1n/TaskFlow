from rest_framework import serializers
from django.contrib.auth import authenticate
from .models import CustomUser

class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()
    def validate(self, attrs):
        user = authenticate(
            username=attrs.get("email"),
            password=attrs.get("password")
        )
        if not user:
            raise serializers.ValidationError("Invalid credentials")

        attrs["user"] = user
        return attrs
    
    
class MeSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = [
            'id',
            'email',
            'username',
            'first_name',
            'last_name',
            'is_verified'
        ]

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    
    class Meta:
        model = CustomUser
        fields = [
            'email',
            'username',
            'first_name',
            'last_name',
            'password'
        ]
        
    def create(self, validated_data):
        password = validated_data.pop("password")
        
        user = CustomUser.objects.create_user(
            password=password,
            **validated_data
        )
        
        return user
