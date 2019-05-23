//Import Node modules
const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();

//Import queries

const {
  postSpecificCommunity,
  postSpecificDish
} = require("../queries/addItem");

const { claimDish, joinCommunity } = require("../queries/actionItem");

const { getDishListings, getSpecificDish } = require("../queries/getDishData");

const {
  getCommunityListings,
  getSpecificCommunity
} = require("../queries/getCommunityData");

const { createUser, searchUser } = require("../queries/auth");

// Cookie checking functions

const cookie = require("./cookie");

//Import error functions
const error = require("./error");

router.get("/", (req, res) => {
  res.render("home");
  // "home" route only contain login and register buttons
});

// Registration / Login routes
router.post("/register", (req, res, next) => {
  console.log("registering...");
  const { username, password, email, image, location } = req.body;
  createUser(username, password, email, image, location)
    .then(response => {
      console.log(response);
      // const { username, id } = response;
      const signed = jwt.sign(response, process.env.SECRET);
      const week = 1000 * 60 * 60 * 24 * 7;
      res.cookie("dish", signed, { maxAge: week * 1, httpOnly: true });
      res.render("main");
    })
    .catch(err => next(err));
});

router.post("/login", (req, res, next) => {
  console.log("logging in...");
  const { password, email } = req.body;
  searchUser(email, password)
    .then(response => {
      console.log(response);
      const message = "Sorry, either your username or password are incorrect";
      const { id, username } = response;
      if (response.authorised === false) {
        res.render("login", { message, main: true });
      } else {
        const signed = jwt.sign({ id, username }, process.env.SECRET);
        const week = 1000 * 60 * 60 * 24 * 7;
        res.cookie("dish", signed, { maxAge: week * 1, httpOnly: true });
        res.render("main", { loggedIn: { id, username } });
      }
    })
    .catch(err => next(err));
});

router.get("/logout", (req, res) => {
  console.log("logging out...");
  res.clearCookie("dish");
  res.render("home", { main: true });
});

// Basic post routes
router.post("/:item-add", (req, res, next) => {
  const { item } = req.params;
  const loggedIn = cookie.check(req) ? cookie.values(req) : false;
  if (loggedIn) {
    if (item === "dish") {
      postSpecificDish(req.body)
        .then(() => res.redirect(301, "/dish-list-success"))
        .catch(err => next(err));
    } else if (item === "community") {
      postSpecificCommunity(req.body)
        .then(() => res.redirect(301, "/community-list-success"))
        .catch(err => next(err));
    }
  } else {
    res.render("login", { main: true });
  }
});

router.post("/:item-action", (req, res, next) => {
  const { item } = req.params;
  const loggedIn = cookie.check(req) ? cookie.values(req) : false;

  if (loggedIn) {
    const { id } = cookie.values(req);

    if (item === "dish") {
      claimDish(req.body, id)
        .then(response => {
          return getSpecificDish(response[0].dishid);
        })
        .then(data => {
          res.render("success", {
            loggedIn,
            item,
            action: "claim",
            data: data[0]
          });
        })
        .catch(err => next(err));
    } else if (item === "community") {
      joinCommunity(req.body, id)
        .then(() => {
          res.render("success", { loggedIn, item, action: "join" });
        })
        .catch(err => next(err));
    }
  } else {
    res.render("login", { main: true });
  }
});

// Success/failure pages routes

router.get("/:item-:action-:outcome", (req, res) => {
  const loggedIn = cookie.check(req) ? cookie.values(req) : false;
  const { item, action, outcome } = req.params;
  res.render(outcome, {
    loggedIn,
    action,
    item
  });
});

// Listings pages routes

router.get("/:item-listings", (req, res, next) => {
  const loggedIn = cookie.check(req) ? cookie.values(req) : false;
  const { item } = req.params;
  if (item === "dish") {
    getDishListings()
      .then(response => {
        res.render("listings", {
          loggedIn,
          item,
          type: "listings",
          data: response
        });
      })
      .catch(err => next(err));
  } else if (item === "community") {
    getCommunityListings()
      .then(response => {
        res.render("listings", {
          loggedIn,
          type: "listings",
          item,
          data: response
        });
      })
      .catch(err => next(err));
  } else {
    next();
  }
});

//Add pages routes
router.get("/:item-add", (req, res, next) => {
  const loggedIn = cookie.check(req) ? cookie.values(req) : false;
  const { item } = req.params;
  if (item === "dish") {
    res.render("add", {
      loggedIn,
      item,
      type: "add"
    });
  } else if (item === "community") {
    res.render("add", {
      loggedIn,
      item,
      type: "add"
    });
  } else {
    next();
  }
});

//Info pages routes
router.get("/:item-:ID", (req, res, next) => {
  const loggedIn = cookie.check(req) ? cookie.values(req) : false;
  const { item, ID } = req.params;
  if (item === "dish") {
    getSpecificDish(parseInt(ID))
      .then(response => {
        res.render("info", {
          loggedIn,
          type: "info",
          item,
          data: response
        });
      })
      .catch(err => next(err));
  } else if (item === "community") {
    getSpecificCommunity(parseInt(ID))
      .then(response => {
        res.render("info", {
          loggedIn,
          type: "info",
          item,
          data: response
        });
      })
      .catch(err => next(err));
  } else {
    next();
  }
});

// Basic pages routes

router.get("/about", (req, res) => {
  const loggedIn = cookie.check(req) ? cookie.values(req) : false;
  res.render("about", { loggedIn });
});

router.get("/register", (req, res) => {
  console.log("register");
  res.render("register");
});

router.get("/login", (req, res) => {
  res.render("login", { main: true });
});

router.get("/main", (req, res) => {
  const loggedIn = cookie.check(req) ? cookie.values(req) : false;
  console.log(loggedIn);
  res.render("main", { loggedIn });
});

//Error handling

router.use(error.missing);
router.use(error.server);

module.exports = router;
