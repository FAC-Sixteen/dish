//Import Node modules

const express = require("express");
const path = require("path");
const router = express.Router();

// Import our functions
const titleCase = require('../views/helpers/title-case.js');

router.get("/", (req, res) => {
  res.render("home");
  console.log("This is the home route.");
});

// Success/failure pages routes

const repeatOutcomeRoute = route => {
  const pathText = route.split("/")[1];
  const action = pathText.split("-")[1];
  const item = pathText.split("-")[0];
  const outcome = pathText.split("-")[2];
  console.log(item, action);
  router.get(route, (req, res) => {
    res.render(outcome, { action, item });
  });
};

const outcomeRoutes = [
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

outcomeRoutes.forEach(route => repeatOutcomeRoute(route));

// Listings pages routes

const informationRoutes = ["/dish-listings", "/community-listings", "/community-info", "/dish-info", "/dish-add", "/community-add"];

const repeatInformationRoutes = route => {
  const item = titleCase(route.split("/")[1].split("-")[0]);
  const type = route.split("/")[1].split("-")[1];

  router.get(route, (req, res) => {
    res.render(type, {item});
    console.log(`This is the ${type} route.`);
  });

}

informationRoutes.forEach(route => repeatInformationRoutes(route));

const basicRoutes = ['/login', '/main', '/register', '/about'];

const repeatBasicRoutes = route => {
  const path = route.split('/')[1];
  router.get(route, (req, res) => {
  res.render(path);
  console.log(`This is the ${path} route`)
});
}

basicRoutes.forEach(route => repeatBasicRoutes(route));


// const infoRoutes = ["/dish-info", "community-info"];
//
// const repeatInfoRoutes = route => {
//   const type = titleCase(route.split("/")[1].split("-")[0]);
//
//   ro
// }

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
