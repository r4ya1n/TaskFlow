from rest_framework import serializers
from .models import Project, Membership, User, Role
from django.db import transaction

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'username', 'first_name', 'last_name']

class MemberSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    
    class Meta:
        model = Membership
        fields = ['id', 'user', 'role']

class ProjectListSerializer(serializers.ModelSerializer):    
    class Meta:
        model = Project
        fields = ['id', 'title']

class ProjectDetailSerializer(ProjectListSerializer):
    members = MemberSerializer(source='memberships', many=True, read_only=True)
    
    class Meta:
        model = Project
        fields = ProjectListSerializer.Meta.fields + ['members']

class MemberInputSerializer(serializers.ModelSerializer):
    email = serializers.EmailField()
    user = serializers.HiddenField(default=None)
    
    class Meta:
        model = Membership
        fields = ['role', 'email', 'user']
        
    def validate_role(self, value):
        if value == Role.OWNER:
            raise serializers.ValidationError("The owner can be only one user")
        return value
    
    def validate(self, attrs):
        user = User.objects.filter(email=attrs['email']).first()
        if user is None:
            raise serializers.ValidationError({"email": f"User with email {attrs['email']}  not found"})
        attrs['user'] = user
        return attrs
    
class ProjectCreateSerializer(serializers.ModelSerializer):
    members = MemberInputSerializer(many=True, write_only=True, required=False)
    
    class Meta:
        model = Project
        fields = ['title', 'default_visability', 'members']
        
    def create(self, validated_data):
        members_data = validated_data.pop('members', [])
        owner = self.context['request'].user
        
        with transaction.atomic():
            project = Project.objects.create(**validated_data)
            Membership.objects.create(role=Role.OWNER, user_id = owner.id, project_id = project.id)
            for member in members_data:
                user = member['user']
                if user == owner:
                    continue
                Membership.objects.create(
                    role=member['role'], user_id=user.id, project_id=project.id
                    )
        return project

