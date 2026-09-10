const express = require('express') // фреймворк для серверной части NodeJs

const db = require('./db') // подключение к бд

const models = require('./models/model') // покдлючение моделей бд

const cors = require('cors') 

const PORT = process.env.PORT || 5000 // порт через .env

const fileUpload = require('express-fileupload') // пакет для express загрузка файлов

const router = require('./routes/index') // роутинг маршуты

const app = express() // инициализация app express

const errorHandler = require('./middleware/ErrorHandlingMiddleware') //промежуточный пункт решений 

const path = require('path') // встроенный в NodeJs пакет для построения пути к файлам

/**
 * По факту Express передает 4 аргуемента в функцию errorHandler
 * @param {Error} err - ошибка
 * @param {Request} req - запрос
 * @param {Response} res - ответ на запрос
 * @param {NextFunction} next - следующий middleware
 * 
 * эти аргументы передаются также в router, который передается в app.use
 * если на каком то маршуте будет ошибка, то произойдет вызов функции next с параметром ошибки
 * если ошибка не будет, то произойдет вызов функции next без параметров
 * express же увидит что next с ошибкой и вызовет функцию errorHandler
 */

app.use(cors()); // для доступа к API с другого домена
app.use(express.json()) // для парсинга json
app.use(express.static(path.resolve(__dirname, 'static'))) // для статических файлов
app.use(fileUpload({})) // для загрузки файлов
app.use('/api', router) // для маршрутизации запросов
app.use(errorHandler) // для обработки ошибок

/**
 * Запускаем App слушать порт из env.
 */

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})



/**
 * функция подключения к бд 
 * внутри компонента db мы подключаем пакет sequelize для работы с бд 
 */

const start = async () => {
  try {
    await db.authenticate() //подключение к бд с данными из db
    await db.sync() // синхронизация данных в бд c моделями
    console.log('Database connected')
  } catch (err) {
    console.error('Unable to connect to the database:', err)
  }
}

start()

