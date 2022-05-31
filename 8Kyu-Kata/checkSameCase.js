// 8 kyu Check same case 04/11/2022
// Write a function that will check if two given characters are the same case.
// If any of characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters and not the same case, return 0
function sameCase(a, b){
    if (!(a.match(/[a-z]/i) && b.match(/[a-z]/i))){
      return -1
    }
    else if(a == a.toUpperCase() && b == b.toUpperCase() || a == a.toLowerCase() && b == b.toLowerCase()){
      return 1
    }
    else {
      return 0
    }
  }