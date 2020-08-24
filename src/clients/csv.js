const fs = require("fs");
const path = require("path");
const csv = require("fast-csv");
const logger = require("./logger");

exports.getUsersFromCsv = () => {
  logger.info("[HUBSPOT] Reading users from CSV");
  return new Promise((resolve, reject) => {
    const users = [];
    try {
      fs.createReadStream(path.resolve(__dirname, "../../data", "contatos.csv"))
        .pipe(csv.parse({ headers: true }))
        .on("error", (error) => logger.error(error))
        .on("data", (row) => users.push(row))
        .on("end", () => resolve(users));
    } catch (e) {
      reject(e);
    }
  });
};
