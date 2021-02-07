const db = require("../db");

exports.todo_get = async function (req, res) {
    const todoList = await db.todo_get(req.userId);
    res.json(todoList);
};

exports.todo_create = async function (req, res) {
    const newTodo = await db.todo_create(req.userId,req.body);
    res.json(newTodo);
}

exports.todo_update = async function (req, res) {
    const todoUpdate = await db.todo_update(req.userId,req.params.id, req.body);
    res.json(todoUpdate);
}

exports.todo_delete = async function (req,res) {
    await db.todo_delete(req.userId,req.params.id);
    res.send("task has been remove");
}



