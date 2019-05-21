const db = require("../model/db_connection.js");

const getDishListings = param => {
  if (param !== undefined) {
    throw Error("There was an argument");
  } else {
    return db.query("SELECT * FROM dishes").then(response => {
      return response.rows;
    });
  }
};

const getSpecificDish = id => {
  if (typeof id !== "number") {
    throw Error("Invalid argument, should be an integer");
  } else {
    return db
      .query("SELECT * FROM dishes WHERE id = $1", [id])
      .then(response => {
        return response.rows;
      });
  }
};

module.exports = {
  getDishListings,
  getSpecificDish
};
