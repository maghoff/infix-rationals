var assert = require('assert');
var infix = require('infix');
var rationals = require('rationals');
var ir = require('infix-rationals');


var x = rationals(0), y = 0;

for (var i = 0; i < 10; ++i) {
	x = ir.memCompile("$0 + 0.1")(x);
	y = y + 0.1;
}

assert(x === rationals(1));
assert(y !== 1);


// Rewritten example from rationals:

assert(ir.evaluate("(1/2 + 1/3 - 1/4) * 1/5/(1/6)") === rationals(49, 70));
