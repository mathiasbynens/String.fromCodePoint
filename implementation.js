/*! https://mths.be/fromcodepoint v1.0.0 by @mathias */

'use strict';

var ToNumber = require('es-abstract/2019/ToNumber');
var IsInteger = require('es-abstract/2019/IsInteger');
var callBound = require('es-abstract/helpers/callBound');
var callBind = require('es-abstract/helpers/callBind');
var GetIntrinsic = require('es-abstract/GetIntrinsic');

var ArrayPush = callBound('Array.prototype.push');
var StringFromCharCodeSpread = callBind.apply(String.fromCharCode, null);

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
			!IsInteger(codePoint) ||
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
