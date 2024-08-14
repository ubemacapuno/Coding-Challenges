// 7 kyu Counting Array Elements
// Write a function that takes an array and counts the number of each unique element present.
// count(['james', 'james', 'john']) 
// #=> { 'james': 2, 'john': 1}
//P: given an array
//Returns object with the number of each unique element present
//E: See above
//Pseudocode:
    //Declare an empty object that we will add to and return at the end
    //iterate throuugh the array and add to the object:
        //If the element has not been seen, make a key and assign value of 1
        //If the element has been seen, increase the value ++
    //Return the object
//My solution:

function count(array){
    const map = {}
    array.forEach(function(value, key) {
      if (!map[value]) {
        map[value] = 1
      } else {
        map[value] ++
      }
    })
    return map;
  }