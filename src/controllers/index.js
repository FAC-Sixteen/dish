const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
  res.render("home")
    console.log("This is the home route.")
});

module.exports = router;
