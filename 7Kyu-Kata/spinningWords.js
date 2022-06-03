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