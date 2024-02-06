/*! https://mths.be/fromcodepoint v1.0.0 by @mathias */

'use strict';

var IsIntegralNumber = require('es-abstract/2023/IsIntegralNumber');
var ToNumber = require('es-abstract/2023/ToNumber');

var callBound = require('call-bind/callBound');
var callBind = require('call-bind');
var GetIntrinsic = require('get-intrinsic');

var $RangeError = require('es-errors/range');
var $push = callBound('Array.prototype.push');
var $fromCharCodeSpread = callBind.apply(GetIntrinsic('%String.fromCharCode%'), null);

// eslint-disable-next-line no-unused-vars
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
			!IsIntegralNumber(codePoint)
			|| codePoint < 0 || codePoint > 0x10FFFF // not a valid Unicode code point
		) {
			throw new $RangeError('Invalid code point: ' + codePoint);
		}
		if (codePoint <= 0xFFFF) { // BMP code point
			$push(codeUnits, codePoint);
		} else { // Astral code point; split in surrogate halves
			// https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
			codePoint -= 0x10000;
			highSurrogate = (codePoint >> 10) + 0xD800;
			lowSurrogate = (codePoint % 0x400) + 0xDC00;
			$push(codeUnits, highSurrogate, lowSurrogate);
		}
		if (index + 1 === length || codeUnits.length > MAX_SIZE) {
			result += $fromCharCodeSpread(codeUnits);
			codeUnits.length = 0;
		}
	}
	return result;
};
