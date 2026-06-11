from django.db import models


class Status(models.TextChoices):
    TODO = "TODO", "К работе"
    IN_PROGRESS = "IN_PROGRESS", "В работе"
    IN_REVIEW = "IN_REVIEW", "На ревью"
    DONE = "DONE", "Выполнено"

    
class Priority(models.TextChoices):
    LOW = "LOW", "Низкий"
    MEDIUM = "MEDIUM", "Средний"
    HIGH = "HIGH", "Высокий"
    URGENT = "URGENT", "Срочно"

class Tag(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name

class Task(models.Model):
    title = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    description = models.TextField()
    status = models.CharField(
        max_length=20,
        choices=Status.choices,
        default=Status.TODO.value
    )
    priority = models.CharField(
        max_length=20,
        choices=Priority.choices,
        default=Priority.MEDIUM.value
    )
    deadline = models.DateTimeField()
    tags = models.ManyToManyField(Tag, blank=True, related_name="tasks")

    def __str__(self):
        return self.title


class CheckItem(models.Model):
    task = models.ForeignKey(Task, on_delete=models.CASCADE, related_name="check_items")
    name = models.CharField(max_length=200)
    is_done = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.name} - {'✓' if self.is_done else '✗'}"