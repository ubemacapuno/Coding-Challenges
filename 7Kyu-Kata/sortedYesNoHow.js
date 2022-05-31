// 7 kyu Sorted? yes? no? how?
// Complete the method which accepts an array of integers, and returns one of the following:
// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.
//My solution:
// function isSortedAndHow(array) {
//     let ascArray = array.map(e=>e).sort((a,b)=> a-b)
//     let descArray = array.map(e=>e).sort((a,b)=> a-b).reverse()
//     if (ascArray.toString() == array.toString() ){
//         return "yes, ascending"
//     }else if (descArray.toString() == array.toString()){
//         return "yes, descending"
//     }else{
//         console.log(array)
//         console.log(ascArray)
//         console.log(descArray)
//         return "no"
//     }
// }
//Refactored/cleaned-up:
function isSortedAndHow(array) {
    let ascArray = array.map(e=>e).sort((a,b)=> a-b)
    let descArray = array.map(e=>e).sort((a,b)=> a-b).reverse()
    return ascArray.toString() == array.toString() ? "yes, ascending"
    : descArray.toString() == array.toString() ? "yes, descending" 
    : "no"
}
// console.log(isSortedAndHow([20,19,18,-18]))