/**
 * Is the number even?
If the numbers is even return true. If it's odd, return false.
Oh yeah... the following symbols/commands have been disabled!
use of %
use of .even? in Ruby
use of mod in Python

P: n number
R: true if even, false if not even
E: 2 -> true, 27 -> false
Pseudocode:

Use the & bit operator - the least significant bit of an even number is always 0, and for an odd number, it's always 1.

function isEven(number) {
    return (number & 1) === 0;
}
 */

const isEven = (n) => (n & 1) === 0;
