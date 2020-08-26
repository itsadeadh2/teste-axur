module.exports = {
  port: process.env.APP_PORT,
  waitTimeHubspot: process.env.APP_HUBSPOT_DELAY || 200,
  apiKey: process.env.APP_API_KEY,
  nomeCandidato: process.env.APP_NOME_CAND || 'Thiago',
  sobreNomeCandidato: process.env.APP_SOBREN_CAND || 'Barbosa da Silva',
}
