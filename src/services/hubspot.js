const hubspotClient = require("../clients/hubspot");

exports.getDomainsCount = async (listId) => {
  const contatos = await hubspotClient.getContactListById(listId);
  const domains = [];
  contatos.forEach((contato) => {
    let email = contato.properties.email.value;
    email = email.substring(email.indexOf("@") + 1, email.length);
    domains.push(email);
  });
  const filteredDomains = [];
  domains.forEach((domain) => {
    const index = filteredDomains.findIndex(
      (objdomain) => objdomain.domain === domain
    );
    if (index === -1) {
      filteredDomains.push({ domain, quantity: 1 });
    } else {
      filteredDomains[index].quantity += 1;
    }
  });
  return filteredDomains;
};
