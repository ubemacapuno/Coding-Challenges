// 7 kyu Add property to every object in array
// Your task is to add a new property usersAnswer to every object in the array questions. The value of usersAnswer should be set to null. The solution should work for array of any length.
// After adding the property the result should be:
// var questions = [{
//     question: "What's the currency of the USA?",
//     choices: ["US dollar", "Ruble", "Horses", "Gold"],
//     corAnswer: 0,
//     usersAnswer: null
// }, {
//     question: "Where was the American Declaration of Independence signed?",
//     choices: ["Philadelphia", "At the bottom", "Frankie's pub", "China"],
//     corAnswer: 0,
//     usersAnswer: null
// }];
//P: Given an array of objects
//R: Return the array of objects after having added usersAnswer: null to each object
//E: See above example
//Pseudocode:
    //use map to apply userAnswer = null to each object in the original array
//My solution:
questions.map(function(element){
    element.usersAnswer = null;
  });