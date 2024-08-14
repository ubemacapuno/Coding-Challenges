// 6 kyu Your order, please
// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""
//P: String
//R: Sort the string; each word has a number which represents the position the word should have in the result. Return empty string if given empty string.
//E: See above
//Pseudocode:
//          split the string into array of words
//          set a variable for the return array
//          map an array that sorts by number - here's how:
//              //use for each to loop through each word in the array of words
                //in the loop: 
                    //declare a variable x to split each word by character (let x = word.split(''))
                    //declare a variable num to find each character as a number (let num = x.find(x => x*1))
                    //push([word,num*1]) to the return array
                //returnArray should now be an array of arrays that include the split words along with the number order. Example: ['4of',4]
                //use sort to sort sort the returnArray least to greatest: 
                    // returnArray.sort((a,b)=>a[1]-b[1])
                //use map and splice out the element at index 1 Example: ['4of',4] becomes ['4of']
                    //.map(x=>x.splice(1,1))
                //use join (' ') on the return array and return it 
                    //return returnArray.join(' ')
//My solution:
function order(words){
    let splitOrder = words.split(' ') //split the string into array of words
    let returnArray = [] //set a variable for the return array
    splitOrder.forEach(word => { //use for each to loop through each word in the array of words
        let x = word.split('') //declare a variable x to split each word by character (let x = word.split(''))
        let num = x.find(x => x*1)  //declare a variable num to find each character as a number (let num = x.find(x => x*1))
        returnArray.push([word,num*1])  //push([word,num*1]) to the return array
    })
    //returnArray should now be an array of arrays that include the split words along with the number order. Example: ['4of',4]
    returnArray.sort((a,b)=>a[1]-b[1]).map(x=>x.splice(1,1))
   //returnArray SUBARRAYS are now sorted .sort((a,b)=>a[1]-b[1]) , and the element at [1] should be removed .map(x=>x.splice(1,1)) - Example: ['4of',4] becomes ['4of']
    return returnArray.join(' ')
    // returnArray is now a string joined by ' '
  }
console.log(order("4of Fo1r pe6ople g3ood th5e the2"))
//output: 'Fo1r the2 g3ood 4of th5e pe6ople'