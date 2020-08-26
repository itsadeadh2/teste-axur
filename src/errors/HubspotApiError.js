module.exports = class HubspotApiError extends Error {
  constructor(message = 'Failed to communicate with Hubspot API') {
    super(message)
    this.name = this.constructor.name
    Error.captureStackTrace(this, this.constructor)
  }
}
