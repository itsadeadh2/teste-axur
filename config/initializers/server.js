const http = require("http");
const variables = require("../envs/variables");
const logger = require("../../src/clients/logger");

const app = require("../../src/app");

const port = variables.port || 3000;

const start = () => {
  http.createServer(app).listen(port, () => {
    logger.info(`[SERVER] Listening on port ${port}`);
  });
};

module.exports = start;
