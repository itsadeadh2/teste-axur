const csv = require("../../src/clients/csv");
const hubspotClient = require("../../src/clients/hubspot");
const variables = require("../envs/variables");

exports.populate = async () => {
  // Read CSV
  const users = await csv.getUsersFromCsv();

  // Create list name
  let listName = `${variables.nomeCandidato}.${
    variables.sobreNomeCandidato
  }.${Date.now()}`;
  listName = listName.trim().replace(/\s/g, "_").toLowerCase();
  const { listId } = await hubspotClient.createList(listName);

  // Create contacts and retrieve id's
  const vids = await hubspotClient.createContactFromUsers(users);

  // Associate contacts with list
  const res = await hubspotClient.addContactsToList(listId, vids);
  return res;
};
