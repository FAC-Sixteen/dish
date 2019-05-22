const app = require("../app.js");
require("dotenv").config();
const db = require("../model/db_connection");
const build = require("../model/db_build");
const { getDishListings, getSpecificDish } = require("../queries/getDishData");
const {
  getCommunityListings,
  getSpecificCommunity
} = require("../queries/getCommunityData");

beforeEach(async () => {
  await build();
});

afterAll(async done => {
  await db.end();
  done();
});

describe("Database queries return data", () => {
  test("getDishListings returns all dishes", async () => {
    return getDishListings().then(data => {
      expect(data).toBeTruthy();
    });
  });
  test("getSpecificDish returns a dish", async () => {
    return getSpecificDish(1).then(data => {
      expect(data).toBeTruthy();
    });
  });

  test("getCommunityListings returns all communities", async () => {
    return getCommunityListings().then(data => {
      expect(data).toBeTruthy();
    });
  });
  test("getSpecificCommunity returns a community", async () => {
    return getSpecificCommunity(1).then(data => {
      expect(data).toBeTruthy();
    });
  });
});

describe("Database queries catch errors", () => {
  test("getDishListings throws an error if called with an argument", async () => {
    expect(() => {
      getDishListings("octopus");
    }).toThrow();
  });
  test("getSpecificDish throws an error if not given an integer", async () => {
    expect(() => {
      getSpecificDish("octopus");
    }).toThrow();
  });

  test("getCommunityListings throws an error if called with an argument", async () => {
    expect(() => {
      getCommunityListings("octopus");
    }).toThrow();
  });
  test("getSpecificCommunity throws an error if not given an integer", async () => {
    expect(() => {
      getSpecificCommunity("octopus");
    }).toThrow();
  });
});
