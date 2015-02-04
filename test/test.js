var assert = require('assert')
var hasClassSelector = require('..')

var classSelectors = [
  '.foo',
  '#bar.foo',
  '[input="text"] .foo',
  'ul > li + li .baz'
]

var otherSelectors = [
  '#foo',
  'a',
  '[input="text"]',
  'a:visisted',
  'li + li'
]

describe('has-class-selector', function() {

  it('should return true if there is a class selector', function() {
    classSelectors.forEach(function(classSelector) {
      assert.ok(hasClassSelector(classSelector))
    })
  })

  it('should return false if there is no class selector', function() {
    otherSelectors.forEach(function(otherSelector) {
      assert.ok(!hasClassSelector(otherSelector))
    })
  })
})
