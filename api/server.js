const express = require('express')
const app = express()
const cors = require('cors')
const corsOptions = require('./config/corsOptions')
// Cross Origin Resource Sharing
app.use(cors(corsOptions))
// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }))

// built-in middleware for json
app.use(express.json())

//router login and register
app.use('/select', require('./route/selectRoute'))


module.exports = {
    path: '/api',
    handler: app
}