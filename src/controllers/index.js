//Import Node modules
const express = require("express");
const path = require("path");
const router = express.Router();

// Import our functions

router.get("/", (req, res) => {
  res.render("home");
  console.log("This is the home route.");
});

// Success/failure pages routes

router.get("/:item-:action-:outcome", (req, res) => {
  const { item, action, outcome } = req.params;
  res.render(outcome, {
    action,
    item
  });
});

// Listings pages routes

router.get("/:item-:type", (req, res) => {
  const { item, type } = req.params;
  // data has to be defined as an empty array
  let data = []; //DO NOT CHANGE
  data = [
    {
      name: "Burrito",
      user: "Sandra",
      image:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-breakfast-burrito-horizontaljpg-1541624805.jpg?resize=980:*",
      teaser: "A teaser",
      description: "a description",
      vegetarian: 1,
      vegan: 0,
      "gluten-free": 1,
      spiciness: 2,
      halal: 1,
      nuts: 1,
      cooked: "yesterday",
      servings: 3
    }
  ];
  res.render(type, {
    type,
    item,
    data
  });
});

// Basic pages routes

router.get("/:path", (req, res) => {
  const { path } = req.params;
  res.render(path);
});

module.exports = router;
