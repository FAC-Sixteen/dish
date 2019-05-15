const helpers = require('../views/helpers');

describe('Test the titlecase function', () => {
    test('It should output a string with the first letter upper case', () => {
      const actual = helpers.titlecase('this is our test');
      const expected = 'This is our test';
            expect(actual).toBe(expected);
    
    });
})