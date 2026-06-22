from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import Task
from .serializers import TaskShortSerializer
from .filters import TaskFilter

class TaskViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    
    filter_backends = [DjangoFilterBackend]
    filterset_class = TaskFilter
    
    def get_queryset(self):
        return Task.objects.filter(project__memberships__user=self.request.user).distinct()
    
    def get_serializer_class(self):
        if self.action == 'list':
            return TaskShortSerializer