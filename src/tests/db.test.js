const app = require("../app.js");
require("dotenv").config();
const db = require("../model/db_connection");
const build = require("../model/db_build");
const { getDishListings, getSpecificDish } = require("../queries/getDishData");

beforeEach(async () => {
  await build();
});

afterEach(async done => {
  await db.close;
  done();
});

describe("Database queries", () => {
  test("Returns all dishes", async () => {
    return getDishListings().then(data => {
      expect(data).toBeTruthy;
    });
  });
});
