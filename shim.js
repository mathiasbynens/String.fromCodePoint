/*! https://mths.be/fromcodepoint v1.0.0 by @mathias */

'use strict';

var define = require('define-properties');

var getPolyfill = require('./polyfill');

module.exports = function shimFromCodePoint() {
	var polyfill = getPolyfill();

	if (String.fromCodePoint !== polyfill) {
		define(String, { fromCodePoint: polyfill });
	}

	return polyfill;
};
