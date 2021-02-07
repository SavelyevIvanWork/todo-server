const express = require('express');
const router = express.Router();
const todo_controller = require('../controllers/todoController');
const cors = require('cors')
const userController = require("../controllers/userController");
const {check} = require('express-validator')
const {verifyUser} = require("../verifyUser");
// const corsOptions = {
//         "origin": "*",
//         "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
//         // "exposedHeaders": 'Content-Length, X-Foo, X-Bar',
// }

router.get('/',verifyUser, todo_controller.todo_get)
router.post('/', verifyUser, todo_controller.todo_create);
router.put('/:id', verifyUser, todo_controller.todo_update);
router.delete('/:id',verifyUser, todo_controller.todo_delete);


router.post('/registration', [check ('username', 'Имя пользователя не должно быть пустым!').notEmpty(),
    check('password', 'Пароль должен быть не меньше 4 и не больше 10 символов!').isLength({min: 4, max: 10})],
    userController.registration)

router.post('/login', userController.login)


module.exports = router;
