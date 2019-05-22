const db = require("../model/db_connection.js");

const claimDish = (data, category) => {
  return db
    .query(
      "INSERT INTO transactions(category, userID, communityID, dishID) VALUES ($1, $2, $3, $4) RETURNING id",
      [
        category,
        parseInt(data.userID),
        parseInt(data.communityID),
        parseInt(data.dishID)
      ]
    )
    .then(response => {
      return response.rows;
    });
};

const joinCommunity = (data, category) => {
  return db
    .query(
      "INSERT INTO transactions(category, userID, communityID) VALUES ($1, $2, $3) RETURNING id",
      [category, parseInt(data.userID), parseInt(data.communityID)]
    )
    .then(response => {
      return response.rows;
    });
};

module.exports = { claimDish, joinCommunity };
