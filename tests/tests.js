'use strict';

module.exports = function (fromCodePoint, t) {
	t.equal(fromCodePoint(), '', 'no arguments');

	t.test('cast to 0', function (st) {
		st.equal(fromCodePoint(''), '\0');
		st.equal(fromCodePoint(-0), '\0');
		st.equal(fromCodePoint(0), '\0');
		st.equal(fromCodePoint(false), '\0');
		st.equal(fromCodePoint(null), '\0');
		st.end();
	});

	t.test('astral code points', function (st) {
		st.equal(fromCodePoint(0x1D306), '\uD834\uDF06');
		st.equal(fromCodePoint(0x1D306, 0x61, 0x1D307), '\uD834\uDF06a\uD834\uDF07');
		st.equal(fromCodePoint(0x61, 0x62, 0x1D307), 'ab\uD834\uDF07');
		st.end();
	});

	t.test('invalid code points', function (st) {
		st['throws'](function () { fromCodePoint('_'); }, RangeError);
		st['throws'](function () { fromCodePoint('+Infinity'); }, RangeError);
		st['throws'](function () { fromCodePoint('-Infinity'); }, RangeError);
		st['throws'](function () { fromCodePoint(-1); }, RangeError);
		st['throws'](function () { fromCodePoint(0x10FFFF + 1); }, RangeError);
		st['throws'](function () { fromCodePoint(3.14); }, RangeError);
		st['throws'](function () { fromCodePoint(3e-2); }, RangeError);
		st['throws'](function () { fromCodePoint(-Infinity); }, RangeError);
		st['throws'](function () { fromCodePoint(Number(Infinity)); }, RangeError);
		st['throws'](function () { fromCodePoint(NaN); }, RangeError);
		st['throws'](function () { fromCodePoint(undefined); }, RangeError);
		st['throws'](function () { fromCodePoint({}); }, RangeError);
		st['throws'](function () { fromCodePoint(/./); }, RangeError);
		st.end();
	});

	t.test('cast code point', function (st) {
		var tmp = 0x60;
		st.equal(fromCodePoint({ valueOf: function () { ++tmp; return tmp; } }), 'a');
		st.equal(tmp, 0x61);
		st.end();
	});

	t.test('long arguments list', function (st) {
		var counter = Math.pow(2, 15) * 3 / 2;
		var result = [];
		while (--counter >= 0) {
			result.push(0); // one code unit per symbol
		}
		fromCodePoint.apply(null, result); // must not throw

		counter = Math.pow(2, 15) * 3 / 2;
		result = [];
		while (--counter >= 0) {
			result.push(0xFFFF + 1); // two code units per symbol
		}
		fromCodePoint.apply(null, result); // must not throw

		st.end();
	});
};
