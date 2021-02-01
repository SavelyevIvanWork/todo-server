const express = require('express');
const router = express.Router();
const todo_controller = require('./controller');
const cors = require('cors')

const corsOptions = {
        "origin": "*",
        "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
}

router.get('/', cors(corsOptions), todo_controller.todo_get)
router.post('/', cors(corsOptions), todo_controller.todo_create);
router.put('/:id', cors(corsOptions), todo_controller.todo_update);
router.delete('/:id', cors(corsOptions), todo_controller.todo_delete);

module.exports = router;
