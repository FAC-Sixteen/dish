const express = require("express");
const path = require("path");
const router = express.Router();
const { failureMessage } = require("./failure-messages");

router.get("/", (req, res) => {
  res.render("home");
  console.log("This is the home route.");
});

const repeatFailure = thing => {
  const pathText = thing.split("/")[1];
  const action = pathText.split("-")[1];
  const item = pathText.split("-")[0];
  const outcome = pathText.split("-")[2];
  console.log(item, action);
  router.get(thing, (req, res) => {
    outcome === "failure"
      ? failureMessage(res, action + "ing", item)
      : successMessage(res, action + "ing", item);
  });
};

const failureRoutes = [
  "/dish-list-failure",
  "/dish-claim-failure",
  "/community-add-failure",
  "/community-join-failure"
];

failureRoutes.forEach(route => repeatFailure(route));

// router.get("/dish-list-failure", (req, res) => {
//   failureMessage(res, "listing", "dish");
// });

// router.get("/dish-claim-failure", (req, res) => {
//   failureMessage(res, "claiming", "dish");
// });

// router.get("/community-add-failure", (req, res) => {
//   failureMessage(res, "adding", "community");
// });

// router.get("/community-join-failure", (req, res) => {
//   failureMessage(res, "joining", "community");
// });

module.exports = router;
