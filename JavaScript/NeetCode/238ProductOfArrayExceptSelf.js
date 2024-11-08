/**
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
 

Constraints:

2 <= nums.length <= 105
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 

Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 * Pseudocode:
 *  - iterate through the array in two passes:
 *    1. Look at Prefix: First pass looks to the nums left of target (prefix) and stores that product in the return array
 *    2. Look at Postfix: Second pass looks to the nums right of target (postfix). Multiply postfix to the product in the return array
 *  - return the array with the final list of products (prefix * postfix)
 */
var productExceptSelf = function (nums) {
  const n = nums.length;

  // init. result array with 1s (we're multiplying for product)
  const returnArray = new Array(n).fill(1);

  // First Pass
  // at each index i, store prefix products (nums to left of target) in returnArray[i]
  for (let i = 1; i < n; i++) {
    returnArray[i] = returnArray[i - 1] * nums[i - 1];
  }

  // Second Pass
  // postfix var to keep track of running product of nums to right of target
  let postfix = 1;
  for (let i = n - 1; i >= 0; i--) {
    // multiply current prefix product by postfix product
    returnArray[i] *= postfix;
    // update postfix to include current number for next iteration
    postfix *= nums[i];
  }
  return returnArray;
};
