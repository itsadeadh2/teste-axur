const server = require('./config/initializers/server')
const logger = require('./src/clients/logger')
const hubspot = require('./config/initializers/hubspot')

// Initialize

hubspot
  .populate()
  .then(() => {
    server()
  })
  .catch((err) => {
    logger.error('[APP] initialization failed \n', err)
  })
