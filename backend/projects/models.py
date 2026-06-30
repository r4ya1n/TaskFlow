from django.db import models
from django.conf import settings
from django.contrib.auth import get_user_model

User = get_user_model()


class DeafaultTaskVisability(models.TextChoices):
    PUBLIC = "PUBLIC", "Открытая"
    PRIVATE = "PRIVATE", "Приватная"


class Role(models.TextChoices):
    OWNER = "OWNER", "Владелец"
    ADMIN = "ADMIN", "Админ"
    MEMBER = "MEMBER", "Участник"


class Project(models.Model):
    title = models.CharField(max_length=64)
    default_visability = models.CharField(
        max_length=20,
        choices=DeafaultTaskVisability.choices,
        default=DeafaultTaskVisability.PUBLIC.value,
    )
    members = models.ManyToManyField(
        settings.AUTH_USER_MODEL, through="Membership", related_name="members"
    )

    def __str__(self):
        return self.title


class Membership(models.Model):
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
    )
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='memberships')
    role = models.CharField(max_length=20, choices=Role.choices, default=Role.MEMBER)

    def __str__(self):
        return f"{self.user} {self.role} in {self.project}"
