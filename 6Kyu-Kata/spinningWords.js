// 6 kyu Stop gninnipS My sdroW!
// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"
//Parameters: string of one or more words
//Return: string with all five or more letter words reversed 
//E: "Hey fellow warriors" => "Hey wollef sroirraw"
//Psuedocode:
  //string to array of strings => str.split(' ')
  //map the array; use a conditional to apply .reverse() if length of element is >= 5
  //convert array of strings to string using .join(' ')
  
//My solution:
function spinWords(string){
    let splitString = string.split(' ') //converts string of words to array of string of words
    for(i=0;i<splitString.length;i++){
        splitString[i] = splitString[i].split("") //places each word in its OWN subarray
    }
    let reversedStringsArray = splitString.map(e=>{ //reverses words if length of element is >= 5, and then joins the letters into a string (joining the subarray)
        if(e.length >= 5){
            return e.reverse().join('')
        }else{
            return e.join('')
        }
    })
    return reversedStringsArray.join(' ') //joins the array into a string
  }

//Refactor my solution:
  //use ternary operator
  function spinWords(string){
    let splitString = string.split(' ') 
    for(i=0;i<splitString.length;i++){
        splitString[i] = splitString[i].split("") 
    }
    let reversedStringsArray = splitString.map(e => e.length >= 5 ? e.reverse().join('') : e.join(''))
    return reversedStringsArray.join(' ') //joins the array into a string
  }
  
//Shorter but similar solution from other Codewars user:
function spinWords(str){
    return str.split(' ').map( w => w.length<5 ? w : w.split('').reverse().join('') ).join(' ');
  }

//Test Case:
// console.log(spinWords("Hey fellow warriors"))