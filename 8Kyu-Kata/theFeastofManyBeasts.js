// 8 kyu The Feast of Many Beasts
// There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.
// // Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.
// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.
//P: Two strings: beast and dish
//R: Return true if the dish string starts and ends with the same letters as the best string
//E: See example above
//Pseudocode:
        //Use charAt and compare. If charAt 0 and charAt beast.length and dish.length are equal, return true. else return false

// const feast = (beast, dish) => beast.charAt(0) === dish.charAt(0) && beast.charAt(beast.length-1) === dish.charAt(dish.length-1) ? true : false
//My solution:
function feast(beast, dish) {
    if(beast.charAt(0) === dish.charAt(0) && beast.charAt(beast.length-1) === dish.charAt(dish.length-1)){
        return true
    }else{
        return false
    }
}
//Refactored using arrow syntax and ternary operator:
const feast = (beast, dish) => beast.charAt(0) === dish.charAt(0) && beast.charAt(beast.length-1) === dish.charAt(dish.length-1) ? true : false
//Refactored using arrow syntax and ternary operator and BRACKET NOTATION (I didn't know brackets could be used on strings!! Learn something new everyday):
const feast = (beast, dish) => beast[0] === dish[0] && beast[beast.length-1] === dish[dish.length-1] ? true : false
//Test case:
console.log(feast("brown bear", "bear claw")) //false