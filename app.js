const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express();
const home_route = require('./routers')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/todo', home_route);

mongoose.set('bufferCommands', false); // отключить команды буффера

//Установим подключение
const mongoDB = 'mongodb+srv://user:user@cluster0.npczf.mongodb.net/todobd?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {useNewUrlParser: true});
mongoose.Promise = global.Promise;

// Получение подключения по умолчанию
var db = mongoose.connection;

// Привязать подключение к событию ошибки  (получать сообщения об ошибках подключения)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));




const port = 1234

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});





