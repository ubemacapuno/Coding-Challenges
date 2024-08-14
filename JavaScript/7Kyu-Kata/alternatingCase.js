
// 8 kyu altERnaTIng cAsE <=> ALTerNAtiNG CaSe
// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:
// "hello world".toAlternatingCase() === "HELLO WORLD"
// "HELLO WORLD".toAlternatingCase() === "hello world"
// "hello WORLD".toAlternatingCase() === "HELLO world"
// "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
// "12345".toAlternatingCase() === "12345" // Non-alphabetical characters are unaffected
// "1a2b3c4d5e".toAlternatingCase() === "1A2B3C4D5E"
// "String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
// As usual, your function/method should be pure, i.e. it should not mutate the original string.
//P: String
//R: String with casings of each letter flipped (uppercase letters changed to lowercase, etc.)
//E:
//Pseudocode: 
    //Recall that String.prototype.toAlternatingCase is an object, so use "this" to refer to the object on which we are applying the function to
    //Split the string into an array
    //Map a NEW array, converting the element (letter in this case) to lowercase if it was originally uppercase, or upper to lower.
    //use join method to convert back to string and return it
//My solution:
String.prototype.toAlternatingCase = function () {
    return this.split('').map(e=>{
        if(e===e.toUpperCase()){
            return e.toLowerCase()
        }else{
            return e.toUpperCase()
        }
    }).join('')
  }