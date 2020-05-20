/*! https://mths.be/fromcodepoint v1.0.0 by @mathias */

'use strict';

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	return String.fromCodePoint || implementation;
};
