const getDishData = require("../queries/getDishData.js");

const getListingsData = listingType => {
  if (listingType === "dish") {
    getDishData.getSpecificDish();
  }

  else if (listingType === "community") {

  }
}

module.exports = getListingsData;
