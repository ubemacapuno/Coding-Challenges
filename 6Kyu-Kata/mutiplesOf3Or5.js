// Multiples of 3 or 5 6 kyu
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).
// Note: If the number is a multiple of both 3 and 5, only count it once.
// (Solved FIRST TRY!! 4/23/22)
function solution(number){
            let sum1 = 0;
            let sum2 = 0;
            if (number < 0){
                return 0
            }else{
            for(let i = 1; i < number; i++){
            if(i % 3 === 0 && i % 5 === 0){
                sum2 += i
            }else if(i % 3 === 0){
                sum1 += i
            }else if(i % 5 === 0){
                sum1 += i
            }else{
                sum1 += 0
                sum2 += 0
            } 
        }
}
console.log(sum1 + sum2)
}
//Test case:
// solution(10)
