const db = require("../model/db_connection.js");

const boolToBit = require("../views/helpers/boolToBit");

const postSpecificDish = data => {
  const {
    vegetarian,
    vegan,
    glutenFree,
    nuts,
    dairy,
    halal,
    kosher,
    shellfish
  } = data;

  const dietaryArray = [
    vegetarian,
    vegan,
    glutenFree,
    nuts,
    dairy,
    halal,
    kosher,
    shellfish
  ];
  const bitArray = dietaryArray.map(item => boolToBit(item));

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
        ...bitArray,
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
