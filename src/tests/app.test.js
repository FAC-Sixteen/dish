const request = require("supertest");
const app = require("../app.js");
require("dotenv").config();
const db = require("../model/db_connection");
const build = require("../model/db_build");

beforeEach(async () => {
  await build();
});

afterAll(async done => {
  await db.end();
  done();
});

describe("Server routes", () => {
  test("home route is rendered correctly", () => {
    return request(app)
      .get("/")
      .expect(200)
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("Test the root path", () => {
  test("response text should contain dish", () => {
    return request(app)
      .get("/")
      .then(response => {
        const actual = response.text.includes("dish");
        expect(actual).toBeTruthy();
      });
  });
});

describe("Test the dish-listings path", () => {
  test("Response should have a status code of 200", () => {
    return request(app)
      .get("/dish-listings")
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("Test the community-listings path", () => {
  test("Response should have a status code of 200", () => {
    return request(app)
      .get("/community-listings")
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("Test the community-info path", () => {
  test("Response should have a status code of 200", () => {
    return request(app)
      .get("/community-1")
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("Test the dish-info path", () => {
  test("Response should have a status code of 200", () => {
    return request(app)
      .get("/dish-1")
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("Test the dish-add path", () => {
  test("Response should have a status code of 200", () => {
    return request(app)
      .get("/dish-add")
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("Test the community-add path", () => {
  test("Response should have a status code of 200", () => {
    return request(app)
      .get("/community-add")
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("Test the dish-list-failure path", () => {
  test("Response should have a status code of 200", () => {
    return request(app)
      .get("/dish-list-failure")
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("Test the dish-claim-failure path", () => {
  test("Response should have a status code of 200", () => {
    return request(app)
      .get("/dish-claim-failure")
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("Test the community-add-failure path", () => {
  test("Response should have a status code of 200", () => {
    return request(app)
      .get("/community-add-failure")
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("Test the community-join-failure path", () => {
  test("Response should have a status code of 200", () => {
    return request(app)
      .get("/community-join-failure")
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("Test the account-register-failure path", () => {
  test("Response should have a status code of 200", () => {
    return request(app)
      .get("/account-register-failure")
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("Test the dish-list-success path", () => {
  test("Response should have a status code of 200", () => {
    return request(app)
      .get("/dish-list-success")
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("Test the dish-claim-success path", () => {
  test("Response should have a status code of 200", () => {
    return request(app)
      .get("/dish-claim-success")
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("Test the community-add-success path", () => {
  test("Response should have a status code of 200", () => {
    return request(app)
      .get("/community-add-success")
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("Test the community-join-success path", () => {
  test("Response should have a status code of 200", () => {
    return request(app)
      .get("/community-join-success")
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("Test the account-register-success path", () => {
  test("Response should have a status code of 200", () => {
    return request(app)
      .get("/account-register-success")
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("Test the login path", () => {
  test("Response should have a status code of 200", () => {
    return request(app)
      .get("/login")
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("Test the main path", () => {
  test("Response should have a status code of 200", () => {
    return request(app)
      .get("/main")
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("Test the about path", () => {
  test("Response should have a status code of 200", () => {
    return request(app)
      .get("/about")
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });
});
