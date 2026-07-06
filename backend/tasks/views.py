from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import Task, CheckItem
from .serializers import TaskListSerializer, TaskDetailSerializer, TaskCreateSerializer, CheckItemSerializer
from .filters import TaskFilter

class CheckItemViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = CheckItemSerializer

    def get_queryset(self):
        task_id = self.kwargs["task_id"]
        return CheckItem.objects.filter(
            task_id=task_id, task__project__memberships__user=self.request.user
        ).distinct()

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
