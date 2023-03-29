# Brad Traversy - Youtube tutorials 08 - Nest.js Crash Course

## [Tutorial video on Youtube](https://www.youtube.com/watch?v=wqhNoDE6pb4)

- Backend Crud API implemented in Nest.js
- MongoDB & Mongoose

## CRUD API

| Request | Address                  | Request body   | Results                            |
| ------- | ------------------------ | -------------- | ---------------------------------- |
| GET     | localhost:3000/items     |                | List all items                     |
| GET     | localhost:3000/items/:id |                | Get one item with a specific ID    |
| POST    | localhost:3000/items     | Item fields    | Create a new item                  |
| PUT     | localhost:3000/items/:id | Updated fields | Update one item with a specific ID |
| DELETE  | localhost:3000/items/:id |                | Delete one item with a specific ID |

## Environment variables:

- DB_CONNECT: the connection string to the MongoDB database server.

## Postmen collection for testing

- [Collection](https://github.com/ArpadGBondor/Brad_Traversy-Youtube_tutorials-08-Nest-Crash-Course/blob/master/Brad_Traversy_-_Nest_Crash_Course.postman_collection.json)
