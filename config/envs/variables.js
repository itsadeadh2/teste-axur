module.exports = {
  port: process.env.APP_PORT,
  waitTimeHubspot: process.env.APP_HUBSPOT_DELAY || 500,
  apiKey: process.env.APP_API_KEY || "ff8e0385-1e87-4661-ba5d-b25e16fd67a0",
  nomeCandidato: process.env.APP_NOME_CAND || "Thiago",
  sobreNomeCandidato: process.env.APP_SOBREN_CAND || "Barbosa da Silva",
};
