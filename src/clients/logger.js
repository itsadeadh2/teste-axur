const winston = require('winston')

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'logs/info.log', level: 'info' }),
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
  ],
  format: winston.format.combine(winston.format.colorize({ all: true }), winston.format.simple()),
})

module.exports = logger
