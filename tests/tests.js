var assert = require('assert');
var assertEquals = assert.equal;
var assertThrows = assert['throws'];

require('../fromcodepoint.js');

assertEquals(String.fromCodePoint.length, 0);

assertEquals(String.fromCodePoint(''), '\0');
assertEquals(String.fromCodePoint(), '');
assertEquals(String.fromCodePoint(-0), '\0');
assertEquals(String.fromCodePoint(0), '\0');
assertEquals(String.fromCodePoint(0x1D306), '\uD834\uDF06');
assertEquals(String.fromCodePoint(0x1D306, 0x61, 0x1D307), '\uD834\uDF06a\uD834\uDF07');
assertEquals(String.fromCodePoint(0x61, 0x62, 0x1D307), 'ab\uD834\uDF07');
assertEquals(String.fromCodePoint(false), '\0');
assertEquals(String.fromCodePoint(null), '\0');

assertThrows(function() { String.fromCodePoint('_'); }, RangeError);
assertThrows(function() { String.fromCodePoint('+Infinity'); }, RangeError);
assertThrows(function() { String.fromCodePoint('-Infinity'); }, RangeError);
assertThrows(function() { String.fromCodePoint(-1); }, RangeError);
assertThrows(function() { String.fromCodePoint(0x10FFFF + 1); }, RangeError);
assertThrows(function() { String.fromCodePoint(3.14); }, RangeError);
assertThrows(function() { String.fromCodePoint(3e-2); }, RangeError);
assertThrows(function() { String.fromCodePoint(Infinity); }, RangeError);
assertThrows(function() { String.fromCodePoint(NaN); }, RangeError);
assertThrows(function() { String.fromCodePoint(undefined); }, RangeError);
assertThrows(function() { String.fromCodePoint({}); }, RangeError);
