const db = require('../model/db_connection.js');

const getDishListings = () => {
    return db
        .query("SELECT * FROM dishes")
        .then(response => {
            return response.rows;
        });
};

const getSpecificDish = (ID) => {
    return db
        .query("SELECT * FROM dishes WHERE dishID = $1", [ID])
        .then(response => {
            return response.rows;
        });
};

module.exports = {
    getDishListings,
    getSpecificDish
}