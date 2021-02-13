const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const User = new Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true}
});

const UserModels = model('User', User);

exports.userSearch = function({username}) {
    return UserModels.findOne({username})
}

exports.userCreate = async function ({username, password}) {
    const user = new UserModels({
        username,
        password
    })
    return await user.save();
}



