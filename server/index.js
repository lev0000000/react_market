const express = require('express')

const db = require('./db')

const models = require('./models/model')

const cors = require('cors')

const PORT = process.env.PORT || 5000

const fileUpload = require('express-fileupload')

const router = require('./routes/index')

const app = express()

const errorHandler = require('./middleware/ErrorHandlingMiddleware')

const path = require('path')

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


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})



const start = async () => {
  try {
    await db.authenticate()
    await db.sync()
    console.log('Database connected')
  } catch (err) {
    console.error('Unable to connect to the database:', err)
  }
}

start()

