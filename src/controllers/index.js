const express = require("express");
const path = require("path");
const router = express.Router();
const { failureMessage } = require("./failure-messages");

router.get("/", (req, res) => {
  res.render("home");
  console.log("This is the home route.");
});

router.get("/dish-list-failure", (req, res) => {
  failureMessage(res, "listing", "dish");
});

router.get("/dish-claim-failure", (req, res) => {
  failureMessage(res, "claiming", "dish");
});

router.get("/community-add-failure", (req, res) => {
  failureMessage(res, "adding", "community");
});

router.get("/community-join-failure", (req, res) => {
  failureMessage(res, "joining", "community");
});

module.exports = router;
