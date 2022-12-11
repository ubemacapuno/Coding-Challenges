//8 kyu Count of positives / sum of negatives
// Instructions: Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.
// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
function countPositivesSumNegatives(input) {
    if (!input || input.length < 1){
        return []
    }else{
    //return array of + numbers called positiveElements 
    let positiveElements = input.filter(element => element > 0);
    //return array of - numbers called negativeElements
    let negativeElements = input.filter(element => element < 0);
    //Reduce the negativeElements
    let negativeElementsReduced = negativeElements.reduce((a,c)=> a + c, 0);
    //Return length of positiveElements
    //return value in final array
    let output = [positiveElements.length, negativeElementsReduced];
    console.log(output);
    return output;
    }
}
//Test Case:
// countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])