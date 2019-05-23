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

// Login route
router.post("/register", (req, res, next) => {
  console.log("registering...");
  const { username, password, email, image, location } = req.body;
  createUser(username, password, email, image, location)
    .then(responseID => {
      console.log(responseID);
      const signed = jwt.sign(responseID, process.env.SECRET);
      const week = 1000 * 60 * 60 * 24 * 7;
      res.cookie("userID", signed, { maxAge: week * 1, httpOnly: true });
      res.render("main");
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
    console.log(req.body);
    postSpecificCommunity(req.body)
      .then(() => res.redirect(301, "/community-list-success"))
      .catch(err => next(err));
  }
});

router.post("/:item-action", (req, res, next) => {
  const { item } = req.params;
  const signedUserID = req.cookies.userID;
  console.log(signedUserID);
  const userID = jwt.verify(signedUserID, process.env.SECRET);
  console.log({ userID });

  if (item === "dish") {
    claimDish(req.body, userID)
      .then(response => {
        return getSpecificDish(response[0].dishid);
      })
      .then(data => {
        console.log("Here's the dish data", data);
        res.render("success", { item, action: "claim", data: data[0] });
      })
      .catch(err => next(err));
  } else if (item === "community") {
    joinCommunity(req.body, userID)
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
