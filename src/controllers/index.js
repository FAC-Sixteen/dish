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
  const {
    item,
    action,
    outcome
  } = req.params;
  res.render(outcome, {
    action,
    item
  });
});

// Listings pages routes

router.get("/:item-:type", (req, res) => {
  const {
    item,
    type
  } = req.params;
  const data = [{
      image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-breakfast-burrito-horizontaljpg-1541624805.jpg?resize=980:*',
      teaser: 'THIS IS A TEST TEASER.',
      name: 'Burrito',
      type1: 'test'
    },
    {
      image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-breakfast-burrito-horizontaljpg-1541624805.jpg?resize=980:*',
      teaser: 'This is a better burrito.',
      name: 'Better Burrito',
      type1: 'test2'
    }
  ]
  res.render(type, {
    type,
    item,
    data
  });
});

// Basic pages routes

router.get("/:path", (req, res) => {
  const {
    path
  } = req.params;
  res.render(path);
});

module.exports = router;