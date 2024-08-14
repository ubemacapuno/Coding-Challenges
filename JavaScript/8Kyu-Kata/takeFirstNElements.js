// 8 kyu Enumerable Magic #25 - Take the First N Elements
// Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.
//P: list/array and a number
//R: list/array of the first number elements from the list/array
//E: [0, 1, 2, 3, 5, 8, 13], 3 => [0, 1, 2]
//Pseudocode:
    //use a for loop/forEach
    //Must make conditional to not Return an array with length n if arr.length < n (Or else you get undefined elements in the final array!)
    function take(arr, n) {
        let returnArr = []
        if(arr.length < 1){
            return []
        }else{
            if(arr.length > n){
                for(i=0;i<n;i++){
                    returnArr.push(arr[i])
                }
            }else{
                for(i=0;i<arr.length;i++){
                    returnArr.push(arr[i])
                }
            }
        }
        return returnArr
    }
    //Shorter solution using .slice() method:
    const take = (arr, n) => arr.slice(0, n);
    //Test cases:
    // console.log(take([0, 1, 2, 3, 5, 8, 13],3))
    // console.log(take([],3))