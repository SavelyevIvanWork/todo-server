const express = require('express');
const router = express.Router();

const todo_controller = require('./controller');

router.get('/', todo_controller.todo_get)
router.post('/', todo_controller.todo_create);
router.put('/:id', todo_controller.todo_update);
router.delete('/:id', todo_controller.todo_delete);

module.exports = router;
