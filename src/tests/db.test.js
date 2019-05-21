const app = require("../app");
const runDbBuild = require("../model/db_build");
const getDishData = require("../queries/getDishData");
const getcommunityData = require("../queries/getCommunityData");
const postData = require("../queries/post-data");





// describe('Test getDishData function ', () => {
// test("getDishData should retrieve data", t => {
//   runDbBuild()
//     .then(
//       getDishData.getDishListings()
//         .then(response => {
//           t.t(response, "getDishData should return some data");
//           t.end();
//         })
//         .catch(error => console.log(error))
//     )
//     .catch(error => console.log(error));
// }); })


describe("Test getDishData", () => {
  test(`getDishData should retrieve data`, async () => {
    await expect(getDishData.getDishListings()).resolves.toBeTruthy();;
   
  });
});