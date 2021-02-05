//Создаём экземпляр модели
const TodoModel = require('./models/todoModel')

const mongoose = require("mongoose");

exports.todo_create = async function ({complited, message}) {
    const id = mongoose.Types.ObjectId()
    const todo_instance = new TodoModel({
        id: id.toString(),
        complited,
        message
    })

    // Сохраняем модель
    return await todo_instance.save();

}

exports.todo_get = async function () {
    return await TodoModel.find()
}

exports.todo_update = async function (id, {complited}) {
    return await TodoModel.updateOne({id}, {complited})
}

exports.todo_delete = async function (id) {
    return await TodoModel.deleteOne({id});
}


