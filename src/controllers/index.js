//Import Node modules
const express = require("express");
const path = require("path");
const router = express.Router();

//Import queries
const {
  getDishListings,
  getSpecificDish
} = require('../queries/getDishData');

const {
  getCommunityListings,
  getSpecificCommunity
} = require('../queries/getCommunityData');

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
  // data has to be defined as an empty array
  let data = []; //DO NOT CHANGE
  if (item === 'dish') {
    getDishListings()
      .then(response => {
        res.render(type, {
          type,
          item,
          data: response
        });
      })
      .catch(err => console.log(err))
  } else if (item === 'community') {
    getCommunityListings()
      .then(response => {
        console.log(response)
        res.render(type, {
          type,
          item,
          data: response
        });
      })
      .catch(err => console.log(err))
  } else {
    res.send('Error 500')
  }
})

// Basic pages routes

router.get("/:path", (req, res) => {
  const {
    path
  } = req.params;
  res.render(path);
});

module.exports = router;