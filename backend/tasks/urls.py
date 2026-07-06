from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TaskViewSet, CheckItemViewSet

app_name = "tasks"

router = DefaultRouter()
router.register('', TaskViewSet, basename='tasks')

urlpatterns = [
    path('<int:task_id>/check-items/', CheckItemViewSet.as_view({'get': 'list', 'post': 'create'}), name='checkitem-list'),
    path('<int:task_id>/check-items/<int:pk>/', CheckItemViewSet.as_view({'get': 'retrieve', 'put': 'update', 'patch': 'partial_update', 'delete': 'destroy'}), name='checkitem-detail'),
    path('', include(router.urls)),
]