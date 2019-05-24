const cookie = require("./cookie");

const missing = (req, res) => {
  const loggedIn = cookie.check(req) ? cookie.values(req) : false;
  res.status(404).render("404", { loggedIn });
};

// eslint-disable-next-line no-unused-vars
const server = (err, req, res, next) => {
  const loggedIn = cookie.check(req) ? cookie.values(req) : false;
  // eslint-disable-next-line no-console
  console.log(err);
  res.status(500).render("500", { loggedIn });
};

module.exports = {
  missing,
  server
};
