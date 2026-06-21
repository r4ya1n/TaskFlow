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
    
    # tags, executor_id
    class Meta:
        model = Task
        fields = ['id', 'title', 'executor_id', 'tags', 'status', 'priority', 'deadline']