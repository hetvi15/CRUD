/* eslint-disable no-undef */
const {calculate} = require('../src/math')
test('Hello World', () => {

})

test('Fail', () => {
  throw new Error('FAILED')
})

test('calculate', () => {
  const total = calculate(10, 0.3)
  expect(total).toBe(13)
})
