//7 kyu Maximum Product
//Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.
//P: Array of integers
//R: return the max product from multiplying 2 adjacent numbers in the array
//Examples:
        // adjacentElementsProduct([1, 2, 3]); ==> return 6
        // Explanation:
        // The maximum product obtained from multiplying 2 * 3 = 6, and they're adjacent numbers in the array.
        // adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]); ==> return 50
        // Explanation:
        // Max product obtained from multiplying 5 * 10  =  50 .
        // adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921])  ==>  return -14
        // Explanation:
        // The maximum product obtained from multiplying -2 * 7 = -14, and they're adjacent numbers in the array.
//Pseudocode:
        //iterate through the array and multiply e * array[i+1]
        //push the product to another array
        //return the max value in this other array
//My solution:
function adjacentElementsProduct(array) {
    let arrayOfProducts = []
    array.forEach((e,i) => arrayOfProducts.push(e*array[i+1]))
    //Since .forEach() iterates through the whole length of the array,
    //the last product will always be NaN since the last element of the array
    //multiplied by "array[i+1]" will be NaN. Because of this,
    //we will slice out the last element (NaN) from arrayOfProducts
    return Math.max(...arrayOfProducts.slice(0,-1))
  }
//Test Case:
console.log(adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]))