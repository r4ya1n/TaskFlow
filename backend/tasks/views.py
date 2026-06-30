from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import Task
from .serializers import TaskListSerializer, TaskDetailSerializer, TaskCreateSerializer
from .filters import TaskFilter


class TaskViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]

    filter_backends = [DjangoFilterBackend]
    filterset_class = TaskFilter

    def get_queryset(self):
        project_id = self.kwargs["project_id"]
        return Task.objects.filter(
            project_id=project_id, project__memberships__user=self.request.user
        ).distinct()

    def get_serializer_class(self):
        if self.action == "list":
            return TaskListSerializer
        if self.action == "retrieve":
            return TaskDetailSerializer
        if self.action == "create":
            return TaskCreateSerializer
        return TaskDetailSerializer
