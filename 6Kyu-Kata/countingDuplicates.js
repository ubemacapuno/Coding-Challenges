//Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
//P: String of letters and numbers
//R: The count of distinct case-insensitive alphabetic characters and numeric digits
//E: 
        // "abcde" -> 0 # no characters repeats more than once
        // "aabbcde" -> 2 # 'a' and 'b'
        // "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
        // "indivisibility" -> 1 # 'i' occurs six times
        // "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
        // "aA11" -> 2 # 'a' and '1'
        // "ABBA" -> 2 # 'A' and 'B' each occur twice
//Pseudocode:
//Since we are dealing with case insensitive characters, apply .toLowerCase() method
//Declare an empty object
//With that object, add property with the same name as the value we want to check (we will be iterating through every character to look for duplicates)
//If the character we are checking is already in the object, we will add to a counter. If the character is not already in the object, we will assign a value of 1 to the key
//Return counter.
//Solution:
function duplicateCount(text){
    let hashMap= {}
    let lowerCaseText = text.toLowerCase()
    let counter = 0
    for (let i=0; i<lowerCaseText.length; i++){
        //If the key has not been seen before in the map, then assign a value of 1:
        if(hashMap[lowerCaseText[i]] === undefined){
            hashMap[lowerCaseText[i]] = 1
        //If the key HAS been seen before in the hashmap, then add 1 to that value. Also increase the counter ++
        }else if(hashMap[lowerCaseText[i]] < 2) {
            hashMap[lowerCaseText[i]] +=1
            counter++
        }
    }
    return counter
  }