// 8 kyu You only need one - Beginner
// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
// Array can contain numbers or strings. X can be either.
// Return true if the array contains the value, false if not.
function check(a, x) {
    if (a.includes(x)){
        console.log('true')
      return true
    }else{
        console.log('false')
    return false
    }
  }
// Refactored as arrow function and ternary operator
  let check = (a,x) => a.includes(x)? true : false
//   check([66, 101], 66)

