from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Project, Membership
from .serializers import ProjectCreateSerializer, UserProjectSerializer


class MyProjectView(APIView):
    permission_classes = [IsAuthenticated]
    
    def get(self, request):
        user = request.user
        memberships = Membership.objects.filter(user=user).select_related("project")
        serializer = UserProjectSerializer(memberships, many=True)
        return Response(serializer.data)
    
class ProjectViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset = Project.objects.all()
    
    def get_serializer_class(self):
        if self.action == 'create':
            return ProjectCreateSerializer
