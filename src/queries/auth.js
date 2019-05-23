const bcrypt = require("bcrypt");
const db = require("../model/db_connection");

const createUser = (username, password, email, image, location) => {
  return bcrypt
    .genSalt(10)
    .then(salt => bcrypt.hash(password, salt))
    .then(hash => {
      return db
        .query(
          "INSERT INTO users (username, password, email, image, location) VALUES ($1, $2, $3, $4, $5) RETURNING id",
          [username, hash, email, image, location]
        )
        .then(data => data.rows[0].id);
    });
};

const searchUser = (email, password) => {
  return db
    .query("SELECT username, password, id FROM users WHERE email = $1", [email])
    .then(response => {
      if (!response.rows.length) return false;
      return bcrypt
        .compare(password, response.rows[0].password)
        .then(authorised => {
          return {
            authorised,
            id: response.rows[0].id
          };
        });
    });
};

module.exports = { createUser, searchUser };
