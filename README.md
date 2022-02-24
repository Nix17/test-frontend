# FrontTask

Для имитации взаимодейтсвия с БД (сервером) был использован [JSON Server](https://github.com/typicode/json-server#getting-started)

>Команда установки JSON Server

```npm install -g json-server```

В корне проекта лежит файл <b>db.json</b> - он и будет условной БД.

Для запуска сервера используем команду:

```json-server --watch db.json```

Наша БД будет доступна по ссылке http://localhost:3000/

