const dbConnection = require("./db_connection");
const { readFile } = require("fs");

const sql = readFile(`${__dirname}/db_build.sql`).toString();

const runDbBuild = () =>
  new Promise((resolve, reject) => {
    dbConnection.query(sql, (err, res) => {
      if (err) reject(err);
      console.log("database being built");
      resolve(true);
    });
  });

module.exports = runDbBuild;
