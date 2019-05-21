const missing = (req, res) => {
  res.status(404).end("<h1>404 Page Not Found</h1>");
};

// eslint-disable-next-line no-unused-vars
const server = (err, req, res, next) => {
  console.log(err);
  res.status(500).end("<h1>500 Server Error</h1>");
};

module.exports = {
  missing,
  server
};
