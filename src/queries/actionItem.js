const db = require("../model/db_connection.js");

const claimDish = (data, userID) => {
  return db
    .query(
      "INSERT INTO transactions(category, userID, communityID, dishID) VALUES ($1, $2, $3, $4) RETURNING dishID",
      [
        "claim",
        parseInt(userID),
        parseInt(data.communityID),
        parseInt(data.dishID)
      ]
    )
    .then(response => {
      return response.rows;
    });
};

const joinCommunity = (data, userID) => {
  return db
    .query(
      "INSERT INTO transactions(category, userID, communityID) VALUES ($1, $2, $3) RETURNING id",
      ["join", parseInt(userID), parseInt(data.communityID)]
    )
    .then(response => {
      return response.rows;
    });
};

const decrementDish = dishID => {
  return db.query(
    "UPDATE dishes SET portions_remaining = portions_remaining -1 WHERE id = $1",
    [parseInt(dishID)]
  );
};

module.exports = { claimDish, joinCommunity, decrementDish };
