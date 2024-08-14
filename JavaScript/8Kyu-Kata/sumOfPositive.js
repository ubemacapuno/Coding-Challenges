// 8 kyu Sum of positive
// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.
//My solution:
function positiveSum(arr) {
    let sumArr = 0
    arr.forEach(e =>{
        if (e > 0){
        sumArr += e
            }
        })
    return sumArr
}
//Test Case:
// console.log(positiveSum([1,-4,7,12]))