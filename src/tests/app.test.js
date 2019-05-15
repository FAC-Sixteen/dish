const request = require('supertest');
const app = require('../app.js')

// describe('Test the root path', () => {
//     test('It should response the GET method', (done) => {
//         request(app).get('/').then((response) => {
//             expect(response.statusCode).toBe(200);
//             done();
//         });
//     });
// });

// describe('Test the root path', () => {
//     test('It should response the GET method', () => {
//         return request(app).get('/').expect(200);
//     });
// })

describe('Test the root path', () => {
    test('It should response the GET method 200', () => {
        return request(app).get("/").then(response => {
            expect(response.statusCode).toBe(200);
        })
    });
})

describe('Test the root path', () => {
    test('It should response the GET response text should contain dish', () => {
        return request(app).get("/").then(response => {
            const actual = response.text.includes("dish");
            expect(actual).toEqual(true)
        })
    });
})


describe('Test the dish-listings path', () => {
    test('It should response the GET method', () => {
        return request(app).get("/dish-listings").then(response => {
            expect(response.statusCode).toBe(200)
        })
    });
})

describe('Test the community-listings path', () => {
    test('It should response the GET method', () => {
        return request(app).get("/community-listings").then(response => {
            expect(response.statusCode).toBe(200)
        })
    });
})

describe('Test the community-info path', () => {
    test('It should response the GET method', () => {
        return request(app).get("/community-info").then(response => {
            expect(response.statusCode).toBe(200)
        })
    });
})

describe('Test the dish-info path', () => {
    test('It should response the GET method', () => {
        return request(app).get("/dish-info").then(response => {
            expect(response.statusCode).toBe(200)
        })
    });
})

describe('Test the dish-add path', () => {
    test('It should response the GET method', () => {
        return request(app).get("/dish-add").then(response => {
            expect(response.statusCode).toBe(200)
        })
    });
})

describe('Test the community-add path', () => {
    test('It should response the GET method', () => {
        return request(app).get("/community-add").then(response => {
            expect(response.statusCode).toBe(200)
        })
    });
})
  

describe('Test the dish-list-failure path', () => {
    test('It should response the GET method', () => {
        return request(app).get("/dish-list-failure").then(response => {
            expect(response.statusCode).toBe(200)
        })
    });
})

describe('Test the dish-claim-failure path', () => {
    test('It should response the GET method', () => {
        return request(app).get("/dish-claim-failure").then(response => {
            expect(response.statusCode).toBe(200)
        })
    });
})

describe('Test the community-add-failure path', () => {
    test('It should response the GET method', () => {
        return request(app).get("/community-add-failure").then(response => {
            expect(response.statusCode).toBe(200)
        })
    });
})

describe('Test the community-join-failure path', () => {
    test('It should response the GET method', () => {
        return request(app).get("/community-join-failure").then(response => {
            expect(response.statusCode).toBe(200)
        })
    });
})
  
describe('Test the account-register-failure path', () => {
    test('It should response the GET method', () => {
        return request(app).get("/account-register-failure").then(response => {
            expect(response.statusCode).toBe(200)
        })
    });
})

describe('Test the dish-list-success path', () => {
    test('It should response the GET method', () => {
        return request(app).get("/dish-list-success").then(response => {
            expect(response.statusCode).toBe(200)
        })
    });
})

describe('Test the dish-claim-success path', () => {
    test('It should response the GET method', () => {
        return request(app).get("/dish-claim-success").then(response => {
            expect(response.statusCode).toBe(200)
        })
    });
})


describe('Test the community-add-success path', () => {
    test('It should response the GET method', () => {
        return request(app).get("/community-add-success").then(response => {
            expect(response.statusCode).toBe(200)
        })
    });
})

describe('Test the community-join-success path', () => {
    test('It should response the GET method', () => {
        return request(app).get("/community-join-success").then(response => {
            expect(response.statusCode).toBe(200)
        })
    });
})

describe('Test the account-register-success path', () => {
    test('It should response the GET method', () => {
        return request(app).get("/account-register-success").then(response => {
            expect(response.statusCode).toBe(200)
        })
    });
})

describe('Test the login path', () => {
    test('It should response the GET method', () => {
        return request(app).get("/login").then(response => {
            expect(response.statusCode).toBe(200)
        })
    });
})

describe('Test the main path', () => {
    test('It should response the GET method', () => {
        return request(app).get("/main").then(response => {
            expect(response.statusCode).toBe(200)
        })
    });
})

describe('Test the about path', () => {
    test('It should response the GET method', () => {
        return request(app).get("/about").then(response => {
            expect(response.statusCode).toBe(200)
        })
    });
})