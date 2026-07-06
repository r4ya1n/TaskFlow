from rest_framework import serializers
from django.db import transaction
from .models import CheckItem, Tag, Task
from projects.models import Membership


class CheckItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = CheckItem
        fields = ["id", "name", "is_done"]
        read_only_fields = ["id"]


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ["id", "name"]
        read_only_fields = ["id"]


class TaskListSerializer(serializers.ModelSerializer):
    tags = TagSerializer(many=True, read_only=True)

    class Meta:
        model = Task
        fields = [
            "id",
            "title",
            "description",
            "executor",
            "tags",
            "status",
            "priority",
            "deadline",
        ]


class TaskDetailSerializer(TaskListSerializer):
    check_items = CheckItemSerializer(many=True, read_only=True)

    class Meta:
        model = Task
        fields = TaskListSerializer.Meta.fields + ["author", "check_items"]


class CheckItemInputSerializer(serializers.ModelSerializer):
    class Meta:
        model = CheckItem
        fields = ["name", "is_done"]


class TaskCreateSerializer(serializers.ModelSerializer):
    check_items = CheckItemInputSerializer(many=True, write_only=True, required=False)
    tags = serializers.ListField(
        write_only=True, required=False, child=serializers.CharField(max_length=50)
    )

    # validate executor
    class Meta:
        model = Task
        fields = [
            "title",
            "description",
            "status",
            "priority",
            "deadline",
            "executor",
            "check_items",
            "tags",
        ]
        extra_kwargs = {
            "executor": {"required": True, "allow_null": False},
        }

    def validate_executor(self, value):
        project_id = self.context["view"].kwargs["project_id"]
        membership = Membership.objects.filter(
            id=value.id, project_id=project_id
        ).first()
        if membership is None:
            raise serializers.ValidationError("The executor must be in this project.")

        return value

    def create(self, validated_data):
        project_id = self.context["view"].kwargs["project_id"]

        user = self.context["request"].user
        author = Membership.objects.filter(
            project_id=project_id, user_id=user.id
        ).first()

        tags_name = validated_data.pop("tags", [])
        check_items = validated_data.pop("check_items", [])

        with transaction.atomic():
            task = Task.objects.create(
                project_id=project_id, author=author, **validated_data
            )
            
            tags_name = [name.lower() for name in tags_name]
            tags = [Tag.objects.get_or_create(name=name)[0] for name in tags_name]
            task.tags.set(tags)

            for check_item in check_items:
                CheckItem.objects.create(
                    name=check_item["name"], is_done=check_item["is_done"], task=task
                )

        return task
    
    def to_representation(self, instance):
        return TaskDetailSerializer(instance, context=self.context).data
