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
        res.render("login", { message });
      } else {
        const signed = jwt.sign({ id, username }, process.env.SECRET);
        const week = 1000 * 60 * 60 * 24 * 7;
        res.cookie("dish", signed, { maxAge: week * 1, httpOnly: true });
        res.render("main");
      }
    })
    .catch(err => next(err));
});

// Basic post routes
router.post("/:item-add", (req, res, next) => {
  const { item } = req.params;
  if (item === "dish") {
    postSpecificDish(req.body)
      .then(() => res.redirect(301, "/dish-list-success"))
      .catch(err => next(err));
  } else if (item === "community") {
    postSpecificCommunity(req.body)
      .then(() => res.redirect(301, "/community-list-success"))
      .catch(err => next(err));
  }
});

router.post("/:item-action", (req, res, next) => {
  const { item } = req.params;
  const cookieData = req.cookies.dish;
  console.log(cookieData);
  const verifiedData = jwt.verify(cookieData, process.env.SECRET);
  const { id } = verifiedData;

  if (item === "dish") {
    claimDish(req.body, id)
      .then(response => {
        return getSpecificDish(response[0].dishid);
      })
      .then(data => {
        console.log("Here's the dish data", data);
        res.render("success", { item, action: "claim", data: data[0] });
      })
      .catch(err => next(err));
  } else if (item === "community") {
    joinCommunity(req.body, id)
      .then(() => {
        res.render("success", { item, action: "join" });
      })
      .catch(err => next(err));
  }
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

router.get("/:item-listings", (req, res, next) => {
  const { item } = req.params;
  if (item === "dish") {
    getDishListings()
      .then(response => {
        res.render("listings", {
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
  const { item } = req.params;
  if (item === "dish") {
    res.render("add", {
      item,
      type: "add"
    });
  } else if (item === "community") {
    res.render("add", {
      item,
      type: "add"
    });
  } else {
    next();
  }
});

//Info pages routes
router.get("/:item-:ID", (req, res, next) => {
  const { item, ID } = req.params;
  if (item === "dish") {
    getSpecificDish(parseInt(ID))
      .then(response => {
        res.render("info", {
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
  res.render("about");
});

router.get("/register", (req, res) => {
  console.log("register");
  res.render("register");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/main", (req, res) => {
  res.render("main");
});

//Error handling

router.use(error.missing);
router.use(error.server);

module.exports = router;
