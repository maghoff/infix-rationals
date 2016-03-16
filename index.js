var infix = require('infix');
var rationals = require('rationals');

var numberProvider = {
	parseInt: function (literal) {
		return rationals(literal);
	},
	parseDecimal: function (before, after) {
		return rationals(before + "." + after);
	},
	"+": function (lhs, rhs) { return lhs.add(rhs); },
	"-": function (lhs, rhs) { return lhs.sub(rhs); },
	"*": function (lhs, rhs) { return lhs.mul(rhs); },
	"/": function (lhs, rhs) { return lhs.div(rhs); },
};

exports.numberProvider = numberProvider;
exports.evaluate = infix.evaluatorFor(numberProvider);
exports.compile = infix.compilerFor(numberProvider);
exports.memCompile = infix.memoizing.compilerFor(numberProvider);
