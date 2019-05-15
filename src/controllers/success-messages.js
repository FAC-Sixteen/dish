const successMessage = (res, action, item) => {
  res.render("success", { action, item });
};

module.exports = { successMessage };
