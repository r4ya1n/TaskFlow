from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.generics import ListAPIView
from tasks.serializers import TagSerializer
from tasks.models import Tag
from .models import Project
from .serializers import ProjectListSerializer, ProjectDetailSerializer, ProjectCreateSerializer

class ProjectTagsView(ListAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = TagSerializer
    
    def get_queryset(self):
        project_id = self.kwargs['project_id']
        
        return Tag.objects.filter(tasks__project_id=project_id)

class ProjectViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset = Project.objects.all()

    def get_queryset(self):
        return Project.objects.filter(memberships__user=self.request.user).distinct()

    def get_serializer_class(self):
        if self.action == "list":
            return ProjectListSerializer
        if self.action == "retrieve":
            return ProjectDetailSerializer
        if self.action == "create":
            return ProjectCreateSerializer
        return ProjectDetailSerializer
        
            
