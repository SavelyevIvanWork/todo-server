const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const {validationResult} = require('express-validator')
const {secret} = require('../config')

const generateAccessToket = (id) => {
    const payload = {
        id
    }
    return jwt.sign(payload, secret, {expiresIn: '24h'})
}

class userController {
    async registration(req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({message: 'Ошибка при регистрации!', errors})
            }
            const {username, password} = req.body
            const candidate = await User.findOne({username})
            if (candidate) {
                return res.status(400).json({message: 'Пользователь с таким именем уже существует!'})
            }
            const hashPassword = bcrypt.hashSync(password, 7)
            const user = new User({username, password: hashPassword})
            await user.save()
            return res.json({message: 'Пользователь успешно зарегестрирован!'})
        } catch (e) {
            console.log(e)
            return res.status(400).json({message: 'Ошибка регистрации!'})
        }
    }

    async login(req, res) {
        try {
            const {username, password} = req.body
            const user = await User.findOne({username})
            console.log(user)
            if (!username) {
                res.status(400).json({message: `Пользователь с именем ${username} не найден!`})
            }
            const validPassword = bcrypt.compareSync(password, user.password)
            if (!validPassword) {
                res.status(400).json({message: `Введен неверный пароль!`})
            }
            const token = generateAccessToket(user._id)
            return res.json({token})
        } catch (e) {
            console.log(e)
            return res.status(400).json({message: 'Неверный логин!'})
        }

    }
}

module.exports = new userController()