//Import Node modules
const express = require("express");
const router = express.Router();

//Import queries

const {
  postSpecificCommunity,
  postSpecificDish
} = require("../queries/post-data.js");

const { getDishListings, getSpecificDish } = require("../queries/getDishData");

const {
  getCommunityListings,
  getSpecificCommunity
} = require("../queries/getCommunityData");

//Import error functions
const error = require("./error");

router.get("/", (req, res) => {
  res.render("home");
});

// Basic post routes
router.post("/:item-add", (req, res, next) => {
  const { item } = req.params;
  if (item === "dish") {
    postSpecificDish(req.body)
      .then(() => res.redirect(301, "/dish-list-success"))
      .catch(err => next(err));
  } else if (item === "community") {
    postSpecificCommunity(req.body);
    res.redirect(301, "/community-add-success");
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

router.get("/:item-listings", (req, res) => {
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
      .catch(err => {
        res.send("Error 500: ", err);
      });
  } else if (item === "community") {
    getCommunityListings()
      .then(response => {
        res.render("listings", {
          type: "listings",
          item,
          data: response
        });
      })
      .catch(err => {
        res.send("Error 500", err);
      });
  } else {
    res.send("Error 404");
  }
});

//Add pages routes
router.get("/:item-add", (req, res) => {
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
    res.send("Error 404");
  }
});

//Info pages routes
router.get("/:item/:ID", (req, res) => {
  const { item, ID } = req.params;
  if (item === "dish") {
    getSpecificDish(ID)
      .then(response => {
        res.render("info", {
          type: "info",
          item,
          data: response
        });
      })
      .catch(err => {
        res.send("Error 500", err);
      });
  } else if (item === "community") {
    getSpecificCommunity(ID)
      .then(response => {
        res.render("info", {
          type: "info",
          item,
          data: response
        });
      })
      .catch(err => {
        res.send("Error 500", err);
      });
  } else {
    res.send("Error 404");
  }
});

// Basic pages routes

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/register", (req, res) => {
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
