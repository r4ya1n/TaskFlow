[GitHub](https://github.com/r4ya1n/TaskFlow)

## Технологии

- [Vue](https://vuejs.org/guide/)
- [Vite](https://vite.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [PrimeVue](https://primevue.dev/)
- [Tailwind](https://tailwindcss.ru/docs/)
- [Axios](https://axios.rest/)
- [Pinia](https://pinia.vuejs.org/)

## Вспомогательные библиотеки

- [Vue-router](https://router.vuejs.org/)
- [Tabler](https://tabler.io/)
- [Axios-auth-refresh](https://github.com/flyrell/axios-auth-refresh)
- [Snakecase-keys](https://www.npmjs.com/package/snakecase-keys)
- [Camelcase-keys](https://www.npmjs.com/package/camelcase-keys)

**Пояснение**

- **PrimeVue** - готовые сложные компоненты (DatePicker, Selector). (*Жаль, что не разобрался раньше*).
- **Pinia** - хранение состояния глобальный объектов (пользователя, проекты, задачи). А так же удобная обертка для запросов
- **Tabler** - библиотека иконом
- **Axios-auth-refresh** - библиотека для обновления refresh jwt токена


## Установка

```
npm install
```

## Запуск

```
npm run dev
```

## Сборка

```
npm run build
```

## Что сделано и планы

- [x] Настроить авторизацию и регистрацию через jwt токены
- [x] Получение списка проектов и переключение между ними
- [x] Создание нового проекта через форму
- [x] Поиск и фильтры в задачах
- [x] Отображение своего списка задач для каждого проекта
- [x] Детальный просмотр задачи
- [x] Создание новой задачи через форму
- [ ] Рабочие чекбоксы для `Task` и `CheckItem`
- [ ] Возможность удалить задачу
- [ ] Изменение параметров задачи
- [ ] Добавить возможность прикреплять вложения к задаче
- [ ] Сделать предпросмотр некоторых вложений (фото, md)
- [ ] История изменений задачи (сделать уведомления)
- [ ] Добавить комментарии к задаче
- [ ] Сделать описание в формате Markdown
- [ ] Управление проектом
- [ ] Управление профилем

## Стратегические планы

- [ ] Сделать страничку проекта, где будут все вложения, общий чат команды, доска
- [ ] Реализовать календарь. Сделать синхронизацию с Google Calendar
- [ ] Сделать Dashboard со статистикой