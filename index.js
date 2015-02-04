'use strict';

module.exports = function hasClassSelector(selector) {
  if (typeof selector != 'string') {
    throw new TypeError('has-class-selector expected a string')
  }

  return /\./.test(selector)
}
