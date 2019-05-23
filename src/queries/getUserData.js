const db = require("../model/db_connection.js");

const getSpecificUser = id => {
  if (typeof id !== "number") {
    throw Error("Invalid argument, should be an integer");
  } else {
    return db
      .query("SELECT * FROM users WHERE id = $1", [id])
      .then(response => {
        // console.log("Here is the chef:", response.rows)
        return response.rows;
      });
  }
};

module.exports = {
  getSpecificUser
};
