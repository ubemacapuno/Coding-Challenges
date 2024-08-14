// 7 kyu Minimize Sum Of Array (Array Series #1)
// Task Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .
// Notes Array/list will contain positives only .
//P: Array of integers
//R: Return the min sum obtained from summing each two integers' product
//Examples:
        // minSum({5,4,2,3}) ==> return (22) 
        //Explanation:
        // The minimum sum obtained from summing each two integers product ,  5*2 + 3*4 = 22
        // minSum({12,6,10,26,3,24}) ==> return (342)
        // Explanation:
        // The minimum sum obtained from summing each two integers product ,  26*3 + 24*6 + 12*10 = 342
        // minSum({9,2,8,7,5,4,0,6}) ==> return (74)
        // Explanation:
        // The minimum sum obtained from summing each two integers product ,  9*0 + 8*2 +7*4 +6*5 = 74
//Pseudocode:
    //Looking through the examples, the smallest integer in the array is always paired with the largest integer, and so on.
    //The array lengths will always be even - sort the array from least to greatest.
    //Pair up the integers so that the first element always is paired with last element, second element paired with second-to-last element, etc
    //push the products into an array, and get the sum of that array. Return the array.
//My solution:
function minSum(arr) {
    let productArr = []
    let sortedArr = arr.sort((a,b) => a-b)
    //Iterate through half of the array, push product to productArr
    for(let i=0; i<arr.length/2; i++){ 
        productArr.push(sortedArr[i]*sortedArr[arr.length-1-i])    
    }
    //return the sum of productArr
    return productArr.reduce((acc,c) => acc + c , 0) 
}
//test case:
console.log(minSum([12,6,10,26,3,24]))