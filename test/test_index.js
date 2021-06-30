import assert from 'assert'
import starter from '../index.js'

// NOTE: don't use arrow functions with mocha.
// See https://github.com/mochajs/mocha/issues/2018
describe('Index', function () {
  it('does not raise', function () {
    assert.doesNotThrow(starter)
  })
})
