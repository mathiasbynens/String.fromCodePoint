'use strict';

require('../auto');

var test = require('tape');
var defineProperties = require('define-properties');
var isEnumerable = Object.prototype.propertyIsEnumerable;
var functionsHaveNames = require('functions-have-names')();

var runTests = require('./tests');

test('shimmed', function (t) {
	t.equal(String.fromCodePoint.length, 1, 'String.fromCodePoint has a length of 1');

	t.test('Function name', { skip: !functionsHaveNames }, function (st) {
		st.equal(String.fromCodePoint.name, 'fromCodePoint', 'String.fromCodePoint has name "fromCodePoint"');
		st.end();
	});

	t.test('enumerability', { skip: !defineProperties.supportsDescriptors }, function (st) {
		st.equal(false, isEnumerable.call(String, 'fromCodePoint'), 'String.fromCodePoint is not enumerable');
		st.end();
	});

	runTests(String.fromCodePoint, t);

	t.end();
});
