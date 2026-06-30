from rest_framework import serializers
from .models import CheckItem, Tag, Task


class CheckItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = CheckItem
        fields = ['id', 'name', 'is_done']
        read_only_fields = ['id']
        
class CheckItemCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = CheckItem
        fields = ['name', 'is_done']

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ['id', 'name']
        read_only_fields = ['id']

class TaskShortSerializer(serializers.ModelSerializer):
    tags = TagSerializer(many=True, read_only=True)
    executor_id = serializers.IntegerField(source='executor.id', read_only=True)
    
    class Meta:
        model = Task
        fields = ['id', 'title', 'description', 'executor_id', 'tags', 'status', 'priority', 'deadline']
        
class TaskSerializer(TaskShortSerializer):
    check_items = CheckItemSerializer(many=True, read_only=True)
    author_id = serializers.IntegerField(source='author.id', read_only=True)
    
    class Meta:
        model = Task
        fields = TaskShortSerializer.Meta.fields + ['author_id', 'check_items']
        
class TaskCreateSerializer(serializers.ModelSerializer):
    # author_id? project_id? tags? checkitems?
    class Meta:
        model = Task
        fields = ["title", "description", "status", "priority", "deadline", "executor_id"]
    
    def create(self, validate_data):
        request = self.conetext['request']
        
    