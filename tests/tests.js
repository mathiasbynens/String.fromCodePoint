var assert = require('assert');

require('../fromcodepoint.js');

var tests = [
	{
		'codePoints': [0x1D306],
		'result': '\uD834\uDF06'
	},
	{
		'codePoints': [0x1D306, 0x61, 0x1D307],
		'result': '\uD834\uDF06a\uD834\uDF07'
	},
	{
		'codePoints': [0x61, 0x62, 0x1D307],
		'result': 'ab\uD834\uDF07'
	},
	{
		'codePoints': [],
		'result': ''
	},
	{
		'codePoints': [-0],
		'result': '\0'
	},
	{
		'codePoints': [0],
		'result': '\0'
	},
	{
		'codePoints': [undefined],
		'error': RangeError
	},
	{
		'codePoints': [null],
		'result': '\0'
	},
	{
		'codePoints': [false],
		'result': '\0'
	},
	{
		'codePoints': [NaN],
		'error': RangeError
	},
	{
		'codePoints': [Infinity],
		'error': RangeError
	},
	{
		'codePoints': [-1],
		'error': RangeError
	},
	{
		'codePoints': [0x10FFFF + 1],
		'error': RangeError
	},
	{
		'codePoints': [''],
		'result': '\0'
	},
	{
		'codePoints': ['_'],
		'error': RangeError
	},
	{
		'codePoints': ['+Infinity'],
		'error': RangeError
	},
	{
		'codePoints': ['-Infinity'],
		'error': RangeError
	},
	{
		'codePoints': [3.14],
		'error': RangeError
	},
	{
		'codePoints': [3e-2],
		'error': RangeError
	},
	{
		'codePoints': [{}],
		'error': RangeError
	}
];

assert.equal(String.fromCodePoint.length, 0);

var errors = 0;
tests.forEach(function(test, index) {
	try {
		if (test.error) {
			assert['throws'](
				function() {
					String.fromCodePoint.apply(null, test.codePoints);
				},
				test.error,
				index
			);
		} else {
			assert.equal(
				String.fromCodePoint.apply(null, test.codePoints),
				test.result,
				index
			);
		}
	} catch(error) {
		errors++;
		console.log(error.message);
	}
});

console.log(
	'Ran %d tests.\n%d assertions failed.\n%d assertions passed.',
	tests.length, errors, tests.length - errors
);
if (errors) {
	process.exit(1);
}
