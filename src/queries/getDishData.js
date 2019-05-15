const db = require('../model/db_connection.js');

const getDishListings = () => {
    return db
        .query("SELECT * FROM dishes")
        .then(response => {
            console.log(response.rows);
            return response.rows;
        });
};

const getSpecificDish = (ID) => {
    return db
        .query("SELECT * FROM dishes WHERE dishID = $1", [ID])
        .then(response => {
            console.log(response.rows);
            return response.rows;
        });
};

getDishListings();

module.exports = {
    getDishListings,
    getSpecificDish
}