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
    test('It should response the GET method', () => {
        return request(app).get("/").then(response => {
            expect(response.statusCode).toBe(200)
        })
    });
})




