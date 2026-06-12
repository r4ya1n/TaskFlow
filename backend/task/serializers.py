from rest_framework import serializers
from .models import Task, CheckItem, Tag


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

class TaskSerializer(serializers.ModelSerializer):
    check_items = CheckItemSerializer(many=True, read_only=True)
    tags = TagSerializer(many=True, read_only=True)

    tags_write = serializers.ListField(
        child=serializers.CharField(max_length=50),
        write_only=True,
        required=False
    )
    check_items_write = CheckItemCreateSerializer(many=True, write_only=True, required=False)
    
    class Meta:
        model = Task
        fields = ['id', 'title', 'description', 'status', 'priority', 'deadline', 'tags', 'tags_write', 'check_items', 'check_items_write', 'created_at']
        read_only_fields = ['id']

    def create(self, validated_data):
        tags_data = validated_data.pop('tags_write', [])
        check_items_data = validated_data.pop('check_items_write', [])
        
        task = Task.objects.create(**validated_data)
        
        for tag_name in tags_data:
            tag, _ = Tag.objects.get_or_create(name=tag_name)
            task.tags.add(tag)
            
        for item_data in check_items_data:
            CheckItem.objects.create(task=task, **item_data)
            
        return task
    
    def update(self, instance, validated_data):
        # Явно удаляем check_items_write, если они вдруг пришли в запросе.
        # Мы НЕ обрабатываем их здесь, так как обновление чек-листов идет через свой ViewSet.
        validated_data.pop('check_items_write', None)
        validated_data.pop('tags_write', None)
            
        # Обновляем остальные поля задачи стандартным способом
        return super().update(instance, validated_data)