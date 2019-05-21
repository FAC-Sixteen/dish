const app = require("../app.js");
require("dotenv").config();
const db = require("../model/db_connection");
const build = require("../model/db_build");
const { getDishListings, getSpecificDish } = require("../queries/getDishData");

describe("Database queries", () => {
  beforeEach(async () => {
    await build();
  });

  afterEach(async done => {
    await db.end();
    done();
  });

  test("Returns all dishes", async () => {
    return getDishListings().then(data => {
      return expect(data).toBeTruthy;
    });
  });
});
