const express = require("express");

const domains = require("../routes/domains.route");

module.exports = (app) => {
  app.use(express.json());
  app.use("/domains", domains);
};
