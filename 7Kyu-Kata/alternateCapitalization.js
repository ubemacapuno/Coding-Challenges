// 7 kyu Alternate capitalization
// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
// The input will be a lowercase string with no spaces.
//P: string with all lowercase letters
//R: string with letters at even indexes are capitalized
//E:
    // Test.assertDeepEquals(capitalize("abcdef"),['AbCdEf', 'aBcDeF']);
    // Test.assertDeepEquals(capitalize("codewars"),['CoDeWaRs', 'cOdEwArS']);
    // Test.assertDeepEquals(capitalize("abracadabra"),['AbRaCaDaBrA', 'aBrAcAdAbRa']);
    // Test.assertDeepEquals(capitalize("codewarriors"),['CoDeWaRrIoRs', 'cOdEwArRiOrS']);
//Pseudocode:
    //declare two empty strings, oddCpital and evenCapital
    //use a for loop. 
        //For evenCapital, if index is odd then use toUpperCase method
         //For evenCapital, if index is odd then use toUpperCase method
         //return [oddCapital, evenCapital]
//My solution:
function capitalize(s){
    let oddCapital = ""
    let evenCapital = ""
    let sCopy = s
    for (let i=0; i<s.length; i++){
        i % 2 === 0 ? evenCapital += s[i] : evenCapital += s[i].toUpperCase() 
    }
    for (let i=0; i<sCopy.length; i++){
        i % 2 != 0 ? oddCapital += sCopy[i] : oddCapital += sCopy[i].toUpperCase() 
    }
    return [oddCapital, evenCapital]
  };
  //Test Case:
  console.log(capitalize("codewarriors"))