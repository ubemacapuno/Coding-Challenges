// 7Ku - Halving Sum
// Task Given a positive integer n, calculate the following sum:
// n + n/2 + n/4 + n/8 + ...
// All elements of the sum are the results of integer division.
// Example
// 25  =>  25 + 12 + 6 + 3 + 1 = 47
//P integer n
//R return the sum of integer n plus n/2, n/4 ... until you get 1.
//E 25  =>  25 + 12 + 6 + 3 + 1 = 47
//Pseudocode:
//It's not really n/2 but more n/2 rounded down to integer
    //This would be using Math.floor
    //we do this UNLESS num ===1. If n is 1, we return 1.
    //otherwise...Use recursion!
    //return num plus halvingSum(Math.floor(num/2))
//My solution: 
const halvingSum = num => num === 1 ? 1 : num+halvingSum(Math.floor(num/2))