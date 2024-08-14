// 8 kyu Find Maximum and Minimum Values of a List
// Your task is to make two functions (max and min, or maximum and minimum, etc., depending on the language) that receive a list of integers as input and return, respectively, the largest and lowest number in that list.
let min = function(list){
    list.sort((a,b) => a-b);
    return list[0];
  }
let max = function(list){
    list.sort((a,b) => a-b);
    return list[list.length - 1];
}
// Test values:
max([4,6,2,1,9,63,-134,566]);
min([4,6,2,1,9,63,-134,566]);