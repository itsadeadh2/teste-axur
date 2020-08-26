module.exports = (err, req, res, next) => {
  return res
    .status(500)
    .send({ message: 'Something went wrong while retrieving hubspot data, please try again later', data: err })
}
