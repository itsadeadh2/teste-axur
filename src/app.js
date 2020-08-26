/* eslint-disable no-unused-vars */
/* eslint-disable valid-typeof */
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const logger = require('./clients/logger')
const errorHandler = require('./middlewares/errorHandler')

const app = express()

app.use(cors())
app.use(morgan('tiny'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ type: '*/*' }))
app.use(errorHandler)

logger.info('[SERVER] Initializing routes')
require('./startup/router')(app)

module.exports = app
