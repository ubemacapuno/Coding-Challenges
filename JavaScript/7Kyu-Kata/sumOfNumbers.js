// 7 kyu Beginner Series #3 Sum of Numbers
// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
// Note: a and b are not ordered!
// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
//P: Two integers a,b
//R: sum of all the integers between and including them.
//E: (see above)
//Pseudocode:
    //use a for loop. Let sum = 0. for(i=a;i<=b;i++) sum += i ; this is assuming a is less than b
    function getSum( a,b ){
        let sum = 0
        if(a < b){
            for(i=a;i<=b;i++){
                sum +=i
            }
        }else if(a > b){
            for(i=b;i<=a;i++){
                sum +=i
            }
        }else{
            return a
        }
        return sum
    }
//Test Case:
console.log(getSum(1,-5))