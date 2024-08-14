
// 8 kyu Total amount of points
// Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.
// For example: ["3:1", "2:2", "0:1", ...]
// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:
// if x > y: 3 points
// if x < y: 0 point
// if x = y: 1 point
// Notes:
// there are 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4
//P: Array of football matches
//R: Total score
//E: See above
//Pseudocode:
    //Use reduce method on the array, comparing c[0] to c[2]. 
    //In other words, for each element, it will compare the element @ index 0 to the same element @ index 2
    //If 0 > 2 then add 3 to the accumulator. if 0 = 2, add 1 to the accumulator. if 0 < 2, add 0 to the accumulator. 
    //Since it's reduce method, the accumulator will be returned.
//My solution:
const points = games => games.reduce((acc,c) => acc + (c[0] > c[2] ? 3 : c[0] === c[2] ? 1: 0), 0)