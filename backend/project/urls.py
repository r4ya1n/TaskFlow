from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import ProjectViewSet, ProjectTagsView

app_name = "project"

router = DefaultRouter()

router.register(r'', ProjectViewSet, basename='project')

urlpatterns = [
    path('<int:project_id>/tags/', ProjectTagsView.as_view()),
    path('', include(router.urls))
]
