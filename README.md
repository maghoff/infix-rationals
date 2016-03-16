Installation
============

    npm install infix-rationals infix rationals

This package ties together the rational number implementation in
[`rationals`][rat] and the infix arithmetic implementation in [`infix`][infix].

Functionality
=============
Given `ir = require('infix-rationals')` and `r = require('rationals')`:

 * `ir.numberProvider`: This object works as a [number provider][num] for
 [`infix`][infix].
 * `ir.evaluate`: Use to evaluate arithmetic expressions with rational numbers,
 for example

        console.log(ir.evaluate("10/(2+3)").display());
        // `2` has now been logged

 * `ir.compile`: Use to compile arithmetic expressions, for example

        var f = ir.compile("10/($0+3)");
        f(r(1));
        f(r(1,2));
        f(r(3));

 * `ir.memCompile`: Use as compile above. This version caches the compiled
 version of all given expressions, it is memoizing.

This gives an overview of what is available. For further details, please see the
documentation of both the [`infix`][infix] and [`rationals`][rat] packages.

[rat]: https://www.npmjs.com/package/rationals
[infix]: https://www.npmjs.com/package/infix
[num]: https://www.npmjs.com/package/infix#implementing-a-number-provider
