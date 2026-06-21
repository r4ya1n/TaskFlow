from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import ProjectViewSet

app_name = "project"

router = DefaultRouter()

router.register(r'', ProjectViewSet, basename='project')

urlpatterns = [
    path('', include(router.urls))
]
