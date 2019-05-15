const failureMessage = (res, action, item) => {
  res.render("failure", { action, item });
};

module.exports = { failureMessage };
