const axios = require('axios').default;

const { apiKey } = require('../bin/variables')

exports.getAll = async () => {
    const { data } = await axios.get('https://api.hubapi.com/contacts/v1/lists/all/contacts/all', {params: {'hapikey': apiKey}});
    return data;
}

