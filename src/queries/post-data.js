const db = require("../model/db_connection.js");

const postSpecificDish = data => {
  console.log(data, "this is in post-data");
  //
  // glutenFree bool DEFAULT '0',
  // nuts bool DEFAULT '0',
  // dairy bool DEFAULT '0',
  // halal bool DEFAULT '0',
  // kosher bool DEFAULT '0',
  // shellfish

  if (data.vegetarian) {
    data.vegetarian = 1;
  } else {
    data.vegetarian = 0;
  }

  if (data.vegan) {
    data.vegan = 1;
  } else {
    data.vegan = 0;
  }

  if (data.glutenFree) {
    data.glutenFree = 1;
  } else {
    data.glutenFree = 0;
  }

  if (data.nuts) {
    data.nuts = 1;
  } else {
    data.nuts = 0;
  }

  if (data.dairy) {
    data.dairy = 1;
  } else {
    data.dairy = 0;
  }

  if (data.halal) {
    data.halal = 1;
  } else {
    data.halal = 0;
  }
  if (data.kosher) {
    data.kosher = 1;
  } else {
    data.kosher = 0;
  }
  if (data.shellfish) {
    data.shellfish = 1;
  } else {
    data.shellfish = 0;
  }

  return db
    .query(
      "INSERT INTO dishes(creatorID, communityID, name, teaser, description, portions, portions_remaining, date_cooked, collection_time, collection_location, image, vegetarian, vegan, glutenFree, nuts, dairy, halal, kosher, shellfish, spiciness) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20) RETURNING dishID, name, image",
      [
        "2",
        "1",
        data.title,
        data.teaser,
        data.additional,
        data.servings,
        data.servings,
        data.cooked,
        data.collection,
        data.location,
        data.imgUrl,
        data.vegetarian,
        data.vegan,
        data.glutenFree,
        data.nuts,
        data.dairy,
        data.halal,
        data.kosher,
        data.shellfish,
        data.spiciness
      ]
    )
    .then(response => {
      console.log("New dish added to database", response.rows);
      return response.rows;
    });
};

const postSpecificCommunity = data => {
  return db
    .query(
      "INSERT INTO communities(adminID, name, location, description, image) VALUES ($1, $2, $3, $4, $5) RETURNING communityID, name, image",
      [2, data.title, data.borough, data.description, data.imgUrl]
    )
    .then(response => {
      console.log("New Community added to database", response.rows);
      return response.rows;
    });
};

module.exports = { postSpecificDish, postSpecificCommunity };
