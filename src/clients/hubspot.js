/* eslint-disable no-loop-func */
/* eslint-disable no-undef */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
const axios = require('axios').default
const variables = require('../../config/envs/variables')
const endpoints = require('../routes/endpoints')
const logger = require('./logger')

const createContact = async (user) => {
  logger.info(`[HUBSPOT] Creating contact of ${user.first_name}`)
  const newUser = {
    properties: [
      {
        property: 'email',
        value: user.email,
      },
      {
        property: 'firstname',
        value: user.first_name,
      },
      {
        property: 'lastname',
        value: user.last_name,
      },
    ],
  }
  const { data } = await axios.post(`${endpoints.HUB_BASE_URL}${endpoints.HUB_CONTACTS}`, newUser, {
    params: { hapikey: variables.apiKey },
  })
  return data
}

exports.createList = async (listName) => {
  logger.info('[HUBSPOT] Generating hubspot contacts list ')
  const { data } = await axios.post(
    `${endpoints.HUB_BASE_URL}${endpoints.HUB_CONTACTS_LIST}`,
    { name: listName },
    { params: { hapikey: variables.apiKey } }
  )
  logger.info(`[HUBSPOT] Generated hubspot list '${data.name}' with id ${data.listId}`)
  this.listId = data.listId
  return data
}

exports.addContactsToList = async (lista, contatos) => {
  logger.info(`[HUBSPOT] Adding contacts to list ${lista}`)
  const { data } = await axios.post(
    `${endpoints.HUB_BASE_URL}${endpoints.HUB_CONTACTS_LIST}/${lista}/add`,
    { vids: contatos },
    { params: { hapikey: variables.apiKey } }
  )
  return data
}

exports.createContactFromUsers = async (users) => {
  const usersList = []

  for (user of users) {
    await new Promise((resolve) => {
      setTimeout(async () => {
        const { vid } = await createContact(user)
        resolve(usersList.push(vid))
      }, variables.waitTimeHubspot)
    })
  }
  return usersList
}

exports.getContactListById = async (listId) => {
  const { data } = await axios.get(`${endpoints.HUB_BASE_URL}${endpoints.HUB_CONTACTS_LIST}/${listId}/contacts/all`, {
    params: { hapikey: variables.apiKey, property: 'email', count: 100 },
  })
  const contatos = data.contacts
  return contatos
}

exports.listId = undefined
