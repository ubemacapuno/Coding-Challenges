/**
2666. Allow One Function Call
Easy
Companies
Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

The first time the returned function is called, it should return the same result as fn.
Every subsequent time it is called, it should return undefined.
 

Example 1:

Input: fn = (a,b,c) => (a + b + c), calls = [[1,2,3],[2,3,6]]
Output: [{"calls":1,"value":6}]
Explanation:
const onceFn = once(fn);
onceFn(1, 2, 3); // 6
onceFn(2, 3, 6); // undefined, fn was not called
Example 2:

Input: fn = (a,b,c) => (a * b * c), calls = [[5,7,4],[2,3,6],[4,6,8]]
Output: [{"calls":1,"value":140}]
Explanation:
const onceFn = once(fn);
onceFn(5, 7, 4); // 140
onceFn(2, 3, 6); // undefined, fn was not called
onceFn(4, 6, 8); // undefined, fn was not called
 

Constraints:

calls is a valid JSON array
1 <= calls.length <= 10
1 <= calls[i].length <= 100
2 <= JSON.stringify(calls).length <= 1000

P: function 'fn'
R: a new function that is identical to the original function except that it ensures fn is called at most once
E: (see examples above)
Pseudocode:
  Declare a bool var 'called' to keep track of whether function has been called
  Declare a var 'result' to store the result of the first call
  Return a new function to check if 'called' is false
    - if 'called' is false, call function with arguments, store the result in 'result', set 'called' to true, and return 'result'
    - if 'called' is true, return undefined
*/

var once = function (fn) {
  let called = false; // bool 'called' to keep track of whether function has been called
  let result; // var 'result' to store the result of the first call

  return function (...args) {
    if (!called) {
      // if 'called' is falsy, call function with arguments, store the result in 'result', set 'called' to true, and return 'result'
      called = true;
      result = fn(...args);
      return result;
    }
    // if 'called' is true, return undefined
    return undefined;
  };
};

// Better solution - no need to store result in a variable
var once = function (fn) {
  let called = false; // bool 'called' to keep track of whether function has been called

  return function (...args) {
    if (called) {
      return undefined;
    }

    called = true;
    return fn(...args);
  };
};
