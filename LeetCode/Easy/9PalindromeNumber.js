// LeetCode 9. Palindrome Number
// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward.
// For example, 121 is a palindrome while 123 is not.
// Example 1:
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:
// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
// Constraints:
// -231 <= x <= 231 - 1
//Parameter: integer x
//Return: True if palindrome, else False
//Examples: see above
//Pseudocode:
    //declare a separate variable reversedNumber, which will be reversed of x:
            //let reversedNumber = String(x).split('').reverse()
            var isPalindrome = function(x) {

                let stringNumber = String(x)
                let reversedNumber = String(x).split('').reverse().join('')
                return stringNumber === reversedNumber ? true : false
                
            };
            //Test Case
            // console.log(isPalindrome(1231))
            
            // Follow up: Could you solve it without converting the integer to a string?