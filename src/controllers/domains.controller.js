const service = require('../services/hubspot')
const hubspot = require('../clients/hubspot')

const paginate = (array, pageSize, pageNumber) => {
  const start = (pageNumber - 1) * pageSize
  const end = pageNumber * pageSize
  return array.slice(start, end)
}

exports.get = async (req, res) => {
  try {
    const { page } = req.query
    const { perPage } = req.query
    const data = await service.getDomainsCount(hubspot.listId)
    res.send(page && perPage ? paginate(data, perPage, page) : data || {})
  } catch (error) {
    res.status(400).send(error)
  }
}
