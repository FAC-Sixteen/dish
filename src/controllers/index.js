const express = require("express");
const path = require("path");
const router = express.Router();
const { failureMessage } = require("./failure-messages");
const { successMessage } = require("./success-messages");

router.get("/", (req, res) => {
  res.render("home");
  console.log("This is the home route.");
});

const repeatRoute = route => {
  const pathText = route.split("/")[1];
  const action = pathText.split("-")[1];
  const item = pathText.split("-")[0];
  const outcome = pathText.split("-")[2];
  console.log(item, action);
  router.get(route, (req, res) => {
    res.render(outcome, { action, item });
  });
};

const routes = [
  "/dish-list-failure",
  "/dish-claim-failure",
  "/community-add-failure",
  "/community-join-failure",
  "/account-register-failure",
  "/dish-list-success",
  "/dish-claim-success",
  "/community-add-success",
  "/community-join-success",
  "/account-register-success"
];

routes.forEach(route => repeatRoute(route));

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
