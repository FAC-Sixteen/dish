const db = require("../model/db_connection.js");

// transactionID SERIAL PRIMARY KEY,
// category transaction_category,
// userID INT,
// communityID INT,
// dishID INT

const claimDish = data => {
  return db
    .query(
      "INSERT INTO transactions(category, userID, communityID, dishID) VALUES ($1, $2, $3, $4, $5) RETURNING communityID, name, image",
      [2, data.title, data.borough, data.description, data.imgUrl]
    )
    .then(response => {
      return response.rows;
    });
};

module.exports = { claimDish };
