const jwt = require("jsonwebtoken");

const values = req => {
  console.log(req.cookies.dish);
  const cookieData = req.cookies.dish;
  console.log(cookieData);
  const verifiedData = jwt.verify(cookieData, process.env.SECRET);
  const { id, username } = verifiedData;
  return { id, username };
};

const check = req => {
  return req.cookies.dish ? true : false;
};

module.exports = { values, check };
