from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TaskViewSet, TagViewSet, CheckItemViewSet

app_name = "task"

router = DefaultRouter()
router.register(r'tasks', TaskViewSet, basename='task')
router.register(r'tags', TagViewSet, basename='tag')
router.register(r'check-items', CheckItemViewSet, basename='checkitem')

urlpatterns = [
    path('', include(router.urls)),
]