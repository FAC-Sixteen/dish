const jwt = require("jsonwebtoken");

const values = req => {
  const cookieData = req.cookies.dish;
  const verifiedData = jwt.verify(cookieData, process.env.SECRET);
  const { id, username } = verifiedData;
  return { id, username };
};

const check = req => {
  return req.cookies.dish ? true : false;
};

module.exports = { values, check };
