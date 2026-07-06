## Технологии

- [Django](https://www.djangoproject.com/)
- [django-filter](https://django-filter.readthedocs.io/en/stable/)
- [Django Rest Framework](https://www.django-rest-framework.org/)
- [DRF Simple JWT](https://django-rest-framework-simplejwt.readthedocs.io/en/latest/)
- [SQLite](https://sqlite.org/docs.html)
- [UV](https://docs.astral.sh/uv/)

## Переменное окружение

```
SECRET_KEY = 'django-insecure-****************************************'
```

Рекомендую использовать команду для генерации пароля

```bash
uv run python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"
```
## Установка

1. `uv venv`
2. `uv sync`
3. `touch .env`
4. Заполняем `.env`
5. `uv run manage.py migrate`
6. `uv run manage.py runserver`

## Что сделано и планы

- [x] Регистрация и авторизация через `jwt` токены
- [x] Создание кастомного пользователя
- [x] Сериализаторы и Вьюшки для:
	- [x] `GET` `api/projects`
	- [x] `POST` `api/projects`
	- [x] `GET` `api/projects/<int:project_id>`
	- [x] `GET` `api/projects/<int:project_id>/tasks`
	- [x] `POST` `api/projects/<int:project_id>/tasks`
	- [x] `GET` `api/projects/<int:project_id>/tasks/<int:task_id>`
- [ ] Сделать правильные `PUT`, `PATCH`, `DELETE`, которые будут учитывать систему прав и ролей `MEMBER`, `ADMIN`, `OWNER`
- [ ] Подключить документация `Swagger` или `Open API`
- [ ] Сделать нефейковую регистрацию по почте, добавить возможность заходить через Google (в будущем подключить синхронизацию с календарем и диском)