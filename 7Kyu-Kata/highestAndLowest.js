// 7 Kyu Highest and Lowest
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// My Solution:
function highAndLow(numbers){
    numbers = numbers.split(' ').sort((a, b) => a - b)
    console.log(numbers)
    if(numbers.length == 1){
        console.log(`${numbers.toString()} ${numbers.toString()}`)
        return `${numbers.toString()} ${numbers.toString()}`
    }else{
    let numbersArr = [numbers.pop(), numbers.shift()]
    console.log(numbersArr);
    console.log(numbersArr.toString().replace(/,/g,' '))
    return numbersArr.toString().replace(/,/g,' ')
    }  
  }
//   Test Cases:
//   highAndLow("42"); //return 42 42
//   highAndLow("1 9 3 4 -5"); //return 9 -5
//   highAndLow("1 2 3"); //return 3 1
// BETTER Solution:
function highAndLow(numbers){
    numbers = numbers.split(' ');
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
  }