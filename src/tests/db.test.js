const app = require("../app.js");
require("dotenv").config();
const build = require("../model/db_build");
const { getDishListings, getSpecificDish } = require("../queries/getDishData");

beforeEach(async () => {
  await build();
});

describe("Database queries", () => {
  test("Returns all dishes", done => {
    return getDishListings().then(data => {
      expect(data).toBeTruthy;
      done();
    });
  });
});
