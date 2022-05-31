//7 kyu Narcissistic Numbers 05/30/2022
// A Narcissistic Number is a number of length l in which the sum of its digits to the power of l is equal to the original number. If this seems confusing, refer to the example below.
// Ex: 153, where l = 3 ( the number of digits in 153 )
// 13 + 53 + 33 = 153
// Write a function that, given n, returns whether or not n is a Narcissistic Number.
//P "n"; get number of digits "l"
//R true||false
//E 13 + 53 + 33 = 153
//P: 
    //find length of n to get l, (l=n.toString().length)
    //split up n into elements (See below, make ANKI)
    //raise each element to the power of l
    //if the sum of each element to the power of l === n, return true else false
//My solution:
function isNarcissistic(n) {
    let l = n.toString().length
    let arrayN = String(n).split("").map((e)=>{
        return Number(e)
    })
    let narcCheck = arrayN.map(e=>Math.pow(e,l)).reduce((acc,c)=>acc+c,0)
    if(narcCheck === n){
        return true
    }else{
        return false
    }
}
//My solution refactored:
function isNarcissistic(n) {
    let l = n.toString().length
    let arrayN = String(n).split("").map((e)=>{return Number(e)}).map(e=>Math.pow(e,l)).reduce((acc,c)=>acc+c,0)
    return (arrayN===n ? true : false)
}
//Test case: console.log(isNarcissistic(154))