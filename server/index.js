require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const models = require('./models/models');
const cors = require('cors');
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandlingMiddleware');

const PORT = process.env.PORT || 5000;

const app = express(); // отсюда начинается запуск приложения
// нужно настроить корс для отправки запросов с браузера
app.use(cors());
app.use(express.json()) // для того, чтобы приложение могло парсить json format
app.use('/api', router); // указываем адрес, по которому роутер должен обрабатываться

// middleware который работает с ошибками обязательно должен идти и регистрироваться в самом конце
app.use(errorHandler); // здесь нет функции next потому что этот middleware явялется замыкающим

const start = async () => { // function to connect to our db
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => {
            console.log(`SERVER started on port ${PORT}`)
        })
    } catch(e){
        console.log(e)
    }
}

start()