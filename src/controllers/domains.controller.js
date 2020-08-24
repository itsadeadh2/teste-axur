const service = require("../services/hubspot");
const hubspot = require("../clients/hubspot");

exports.get = async (req, res) => {
  try {
    const data = await service.getDomainsCount(hubspot.listId);
    res.send(data || {});
  } catch (error) {
    res.status(400).send(error);
  }
};
