//Создаём экземпляр модели
const TodoModel = require('./models/todoModel')
const User = require('./models/userModel')
const mongoose = require("mongoose");

exports.todo_create = async function (userId,{complited, message}) {
    const id = mongoose.Types.ObjectId()
    const todo_instance = new TodoModel({
        id: id.toString(),
        user: userId,
        complited,
        message
    })

    // Сохраняем модель
    return await todo_instance.save();

}

exports.todo_get = async function (userId) {
    return await TodoModel.find({user: userId})
}

exports.todo_update = async function (userId,id, {complited}) {
    return await TodoModel.updateOne({id, user: userId}, {complited})
}

exports.todo_delete = async function (userId,id) {
    return await TodoModel.deleteOne({id, user: userId});
}


