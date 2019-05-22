const db = require("../model/db_connection.js");

const getCommunityListings = param => {
  if (param !== undefined) {
    throw Error("There was an argument");
  } else {
    return db.query("SELECT * FROM communities").then(response => {
      return response.rows;
    });
  }
};

const getSpecificCommunity = id => {
  if (typeof id !== "number") {
    throw Error("Invalid argument, should be an integer");
  } else {
    return db
      .query("SELECT * FROM communities WHERE id = $1", [id])
      .then(response => {
        return response.rows;
      });
  }
};

module.exports = {
  getCommunityListings,
  getSpecificCommunity
};
