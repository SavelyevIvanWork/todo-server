const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');
const cors = require('cors')
const userController = require("../controllers/userController");
const {check} = require('express-validator')
const {verifyUser} = require("../verifyUser");
// const corsOptions = {
//         "origin": "*",
//         "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
//         // "exposedHeaders": 'Content-Length, X-Foo, X-Bar',
// }

router.get('/', verifyUser, todoController.todoGet)
router.post('/', verifyUser, todoController.todoCreate);
router.put('/:id', verifyUser, todoController.todoUpdate);
router.post('/all-todo-completed', verifyUser, todoController.allTodoUpdate);
router.delete('/:id', verifyUser, todoController.todoDelete);
router.post('/all-todo-delete', verifyUser, todoController.allTodoDelete);

router.post('/registration', [check ('username', 'Имя пользователя не должно быть пустым!').notEmpty(),
    check('password', 'Пароль должен быть не меньше 4 и не больше 10 символов!').isLength({min: 4, max: 10})],
    userController.userRegistration)

router.post('/login', userController.userLogin)


module.exports = router;
