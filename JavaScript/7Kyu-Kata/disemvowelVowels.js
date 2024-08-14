// 7 kyu Disemvowel Trolls 05/31/2021
// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.
//P: Given String
//R: Return String
//E: "This website is for losers LOL!" => "Ths wbst s fr lsrs LL!".
//Pseudo:
    //split to array
    //iterate through array (map):
        //replace /[a,e,i,o,u]/ with ""
    //join the array to make it a string
//my solution:
function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '')
  }
//Arrow syntax:
const disemvowel = str => str.replace(/[aeiou]/gi, '')
// Test cases:
// console.log(disemvowel('This website is for losers LOL!'))
// console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read"))
// console.log(disemvowel("What are you, a communist?"))