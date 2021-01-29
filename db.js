//Создаём экземпляр модели
const TodoModel = require('./models')

exports.todo_create = async function ({id, complited, message}) {
    const todo_instance = new TodoModel({
        id,
        complited,
        message
    })

    // Сохраняем модель
    return await todo_instance.save();

}

exports.todo_get = async function () {
    return await TodoModel.find()
}

exports.todo_update = async function ({complited, message}) {
    if (complited) {
        return await TodoModel.updateOne({complited})
    } else if (message) {
        return await TodoModel.updateOne({message})
    }
}

exports.todo_delete = async function (id) {
    return await TodoModel.deleteOne({ id });
}


