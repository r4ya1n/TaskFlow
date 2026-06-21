from rest_framework import serializers
from .models import Project, Membership, User, Role

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'username', 'first_name', 'last_name']

class ProjectMemberSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    
    class Meta:
        model = Membership
        fields = ['user', 'role']

class ProjectSerializer(serializers.ModelSerializer):
    members = ProjectMemberSerializer(source='memberships', many=True, read_only=True)
    
    class Meta:
        model = Project
        fields = ['id', 'title', 'members']
        
class ProjectShortSerializer(serializers.ModelSerializer):    
    class Meta:
        model = Project
        fields = ['id', 'title']

class MembershipInputSerializer(serializers.Serializer):
    user_email = serializers.EmailField()
    role = serializers.ChoiceField(choices=Role.choices)

    def validate_user_email(self, value):
        try:
            user = User.objects.get(email=value)
        except User.DoesNotExist:
            raise serializers.ValidationError("User with this email not found")
        
        self._resolved_user = user
        return value
    
    def validate_role(self, value):
        if value == Role.OWNER:
            raise serializers.ValidationError("Role 'OWNER' cannot be assigned through the members list.")
        return value
    
    def get_resolved_user(self):
        return getattr(self, "__resolved_user", None)

class ProjectCreateSerializer(serializers.ModelSerializer):
    members = MembershipInputSerializer(many=True, required=False, write_only=True)

    class Meta:
        model = Project
        fields = ["id", "title", "default_visability", "members"]

    def create(self, validated_data):
        members_data = validated_data.pop("members", [])
        
        project = Project.objects.create(**validated_data)

        request = self.context.get("request")
        if request and hasattr(request, "user") and request.user.is_authenticated:
            Membership.objects.create(project=project, user=request.user, role=Role.OWNER)
        else:
            raise serializers.ValidationError("Authorization is required")

        for member_data in members_data:
            user = User.objects.get(email=member_data["user_email"])

            if user != request.user:
                Membership.objects.create(
                    project=project, user=user, role=member_data["role"]
                )

        return project

