//Import Node modules
const express = require("express");
const path = require("path");
const router = express.Router();
const postData = require('../queries/post-data.js')


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

// Basic post routes
router.post("/:item-add", (req, res) => {
  const {
    item
  } = req.params;


  // console.log(item, "this is the item posted");
  // console.log(req.body, "this is the req body");
if (item === "dish" ){
  postData.postSpecificDish(req.body)
  res.render("/dish-list-success")
}
else if (item === "community" ){
  postData.postSpecificCommunity(req.body)
  res.render("/community-list-success")
}

});

module.exports = router;
