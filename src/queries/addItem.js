const db = require("../model/db_connection.js");

const boolToBit = require("../views/helpers/boolToBit");

const postSpecificDish = (dishData, userData) => {
  const {
    vegetarian,
    vegan,
    glutenFree,
    nuts,
    dairy,
    halal,
    kosher,
    shellfish
  } = dishData;

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
      "INSERT INTO dishes(creatorID, communityID, name, teaser, description, portions, portions_remaining, date_cooked, collection_time, collection_location, image, vegetarian, vegan, glutenFree, nuts, dairy, halal, kosher, shellfish, spiciness) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20) RETURNING id, name, image",
      [
        userData.id,
        "1",
        dishData.title,
        dishData.teaser,
        dishData.additional,
        dishData.servings,
        dishData.servings,
        dishData.cooked,
        dishData.collection,
        dishData.location,
        dishData.imgUrl,
        ...bitArray,
        dishData.spiciness
      ]
    )
    .then(response => {
      return response.rows[0];
    });
};

const postSpecificCommunity = (communityData, userData) => {
  return db
    .query(
      "INSERT INTO communities(adminID, name, location, description, image) VALUES ($1, $2, $3, $4, $5) RETURNING id, name, image",
      [
        userData.id,
        communityData.title,
        communityData.borough,
        communityData.description,
        communityData.imgUrl
      ]
    )
    .then(response => {
      return response.rows[0];
    });
};

module.exports = { postSpecificDish, postSpecificCommunity };
