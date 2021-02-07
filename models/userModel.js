const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const User = new Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true}
});

module.exports = model('User', User);

