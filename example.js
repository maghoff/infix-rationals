var assert = require('assert');
var rationals = require('rationals');
var infixRationals = require('infix-rationals');


var addOneTenth = infixRationals.compile("$0 + 1/10");

var x = rationals(0);

for (var i = 0; i < 10; ++i) {
	x = addOneTenth(x);
}

assert(x === rationals(1));


// Rewritten example from rationals:

assert(infixRationals.evaluate("(1/2 + 1/3 - 1/4) * 1/5/(1/6)") === rationals(49, 70));
