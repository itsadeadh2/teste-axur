/* eslint-disable no-unused-vars */
/* eslint-disable valid-typeof */
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const logger = require("./clients/logger");
const HubspotApiError = require("./errors/HubspotApiError");

const app = express();

app.use(cors());
app.use(morgan("tiny"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: "*/*" }));
app.use((err, req, res, next) => {
  if (typeof err === HubspotApiError) {
    res.status(400).send(err.message);
  } else {
    res.status(500).send(err.mssage);
  }
  next(err);
});

app.use((_err, _req, res, _next) => {
  res.json({});
});

logger.info("[SERVER] Initializing routes");
require("./startup/router")(app);

module.exports = app;
