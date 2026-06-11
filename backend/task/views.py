from rest_framework import viewsets, filters
from django_filters.rest_framework import DjangoFilterBackend
from .models import Task, Tag, CheckItem
from .serializers import TaskSerializer, TagSerializer, CheckItemSerializer


class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_fields = ['status', 'priority']
    ordering_fields = ['deadline']
    ordering = ['deadline']
    
class TagViewSet(viewsets.ModelViewSet):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer
    
class CheckItemViewSet(viewsets.ModelViewSet):
    queryset = CheckItem.objects.all()
    serializer_class = CheckItemSerializer
    
    def get_queryset(self):
        """
        Возвращаем чек-листы только для той задачи, ID которой указан в URL.
        """
        task_id = self.kwargs.get('task_id')
        return CheckItem.objects.filter(task_id=task_id)

    def perform_create(self, serializer):
        """
        При создании автоматически привязываем чек-лист к задаче из URL.
        """
        task_id = self.kwargs.get('task_id')
        serializer.save(task_id=task_id)