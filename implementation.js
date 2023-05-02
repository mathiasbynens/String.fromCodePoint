/*! https://mths.be/fromcodepoint v1.0.0 by @mathias */

'use strict';

var ToNumber = require('es-abstract/2022/ToNumber');
var IsIntegralNumber = require('es-abstract/2022/IsIntegralNumber');
var callBound = require('call-bind/callBound');
var callBind = require('call-bind');
var GetIntrinsic = require('get-intrinsic');

var ArrayPush = callBound('Array.prototype.push');
var StringFromCharCodeSpread = callBind.apply(GetIntrinsic('String.fromCharCode'), null);

module.exports = function fromCodePoint(_ /* fromCodePoint.length is 1 */) {
	var MAX_SIZE = 0x4000;
	var codeUnits = [];
	var highSurrogate;
	var lowSurrogate;
	var index = -1;
	var length = arguments.length;
	if (!length) {
		return '';
	}
	var result = '';
	while (++index < length) {
		var codePoint = ToNumber(arguments[index]);
		if (
			!IsIntegralNumber(codePoint) ||
			codePoint < 0 || codePoint > 0x10FFFF // not a valid Unicode code point
		) {
			throw RangeError('Invalid code point: ' + codePoint);
		}
		if (codePoint <= 0xFFFF) { // BMP code point
			ArrayPush(codeUnits, codePoint);
		} else { // Astral code point; split in surrogate halves
			// https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
			codePoint -= 0x10000;
			highSurrogate = (codePoint >> 10) + 0xD800;
			lowSurrogate = (codePoint % 0x400) + 0xDC00;
			ArrayPush(codeUnits, highSurrogate, lowSurrogate);
		}
		if (index + 1 == length || codeUnits.length > MAX_SIZE) {
			result += StringFromCharCodeSpread(codeUnits);
			codeUnits.length = 0;
		}
	}
	return result;
};
