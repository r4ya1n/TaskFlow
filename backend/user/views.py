from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from django.contrib.auth import authenticate, login, logout
from .models import CustomUser
from .serializers import RegisterSerializer, LoginSerializer, MeSerializer

class RegisterView(generics.CreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = RegisterSerializer
    
class MeView(APIView):
    permission_classes = [IsAuthenticated]
    
    def get(self, request):
        serializer = MeSerializer(request.user)
        return Response(serializer.data)
    
class LoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        email = serializer.validated_data["email"]
        password = serializer.validated_data["password"]

        user = authenticate(request, username=email, password=password)

        if user is None:
            return Response({"detail": "Invalid credentials"}, status=400)

        login(request, user)

        return Response({
            "detail": "Logged in",
            "user_id": user.id,
            "email": user.email
        })


class LogoutView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        logout(request)
        return Response({"detail": "Logged out"})