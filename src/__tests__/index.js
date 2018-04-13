const generateRandomNumber = require('../')

test('you get a random number between the upper and lower range', () => {
  const number = generateRandomNumber(0, 100)
  expect(number).toBeGreaterThan(0)
  expect(number).toBeLessThan(100)
})
