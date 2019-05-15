const db = require('../model/db_connection.js');

const getCommunityListings = () => {
    return db
        .query("SELECT * FROM communities")
        .then(response => {
            console.log(response.rows);
            return response.rows;
        });
};

const getSpecificCommunity = (ID) => {
    return db
        .query("SELECT * FROM communities WHERE communityID = $1", [ID])
        .then(response => {
            console.log(response.rows);
            return response.rows;
        });
};

module.exports = {
    getCommunityListings,
    getSpecificCommunity
}