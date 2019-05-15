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

