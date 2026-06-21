from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import Project
from .serializers import ProjectCreateSerializer, ProjectShortSerializer, ProjectSerializer



class ProjectViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset = Project.objects.all()

    def get_queryset(self):
        return Project.objects.filter(memberships__user=self.request.user).distinct()

    def get_serializer_class(self):
        if self.action == "list":
            return ProjectShortSerializer
        if self.action == 'retrieve':
            return ProjectSerializer
        if self.action == "create":
            return ProjectCreateSerializer
        
            
