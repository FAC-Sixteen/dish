const { Pool } = require("pg");
require("dotenv").config();

let connectionString =
  process.env.NODE_ENV === "test"
    ? process.env.TEST_DATABASE_URL
    : process.env.DATABASE_URL;

if (!connectionString) throw new Error("Database url must be set");

module.exports = new Pool({
  connectionString,
  ssl: !connectionString.includes("localhost")
});
