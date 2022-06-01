//7 kyu Sort Numbers
// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.
// For example:
// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []
//My solution:
function solution(nums){
    if(nums!==null){
        return nums.sort((a,b)=>a-b)
    }else{
        return []
    }
}
//Try using ternary operator and arrow syntax
//My refactored solution:
const solution = nums => nums!==null ? nums.sort((a,b)=>a-b) : []
//A similar BUT DIFFERENT solution from another user:
const solution = nums => nums ? nums.sort((p, n) => p - n) : []; //nums!==null can be refactored to nums
//Test Cases:
// console.log(solution([1,2,3,10,5]))
// console.log(solution([1, 2, 10, 50, 5]))
// console.log(solution(null))
// console.log(solution([]))