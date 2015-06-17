var assert = require('assert')
var lton = require('./')

describe('letter-to-number', function() {
  it('should work properly', function() {
    assert.equal(lton('A'), 0);
    assert.equal(lton('Z'), 25);
    assert.equal(lton('AA'), 26);
    assert.equal(lton('AZ'), 51);
    assert.equal(lton('BA'), 52);
    assert.equal(lton('ZA'), 676);
    assert.equal(lton('ZZ'), 701);
    assert.equal(lton('AAA'), 702);
  })
})
