/*! https://mths.be/fromcodepoint v1.0.0 by @mathias */

'use strict';

var callBind = require('es-abstract/helpers/callBind');
var define = require('define-properties');

var implementation = require('./implementation');
var getPolyfill = require('./polyfill');
var shim = require('./shim');

var boundFromCodePoint = callBind(getPolyfill(), String);

define(boundFromCodePoint, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = boundFromCodePoint;
