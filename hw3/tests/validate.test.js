//Author: Tyler Crosbie
//Date: Feburary 15, 2024

const multiply = require('../public/javascripts/multiply.js');

test('multiplies 2 * 3 to equal 6', () => {
  expect(multiply(2, 3)).toBe(6);
});
