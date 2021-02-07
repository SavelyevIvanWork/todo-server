const express = require('express')
const mongoose = require('mongoose');

// Создаём схему

const Schema = mongoose.Schema;
const TodoModelSchema = new Schema({
    id: String,
    complited: Boolean,
    message: String,
    user: { type: Schema.Types.ObjectId, ref: 'User' }
});

// Компилируем модель из схемы
const TodoModel = mongoose.model('TodoModel', TodoModelSchema);

module.exports = TodoModel


