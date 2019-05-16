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

module.exports = router;