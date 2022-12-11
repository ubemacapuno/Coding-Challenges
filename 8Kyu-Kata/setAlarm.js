//8 kyu L1: Set Alarm
// Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.
// Examples:
// setAlarm(true, true) -> false
// setAlarm(false, true) -> false
// setAlarm(false, false) -> false
// setAlarm(true, false) -> true
// my code:
function setAlarm(employed, vacation){
    if ((employed === true && vacation === true)||(employed === false && vacation === false)||(employed === false && vacation === true)){
      return false
    }else{
      return true
    }
  }
  
// Other solution:
function setAlarm(employed, vacation){
    return employed && !vacation;
  }