// 8 kyu Calculate average
// Write a function which calculates the average of the numbers in a given list:
// Note: Empty arrays should return 0.
function find_average(arr) {
    let result = 0;
    if (arr.length === 0) {
    return 0;
    }else{
    arr.forEach (element => result += element);
    console.log(result / arr.length);
    }
    }
