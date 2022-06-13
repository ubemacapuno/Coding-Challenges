// 6 kyu Are they the "same"? 06/13/2022
// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
// Examples
// Valid arrays
// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:
// a = [121, 144, 19, 161, 19, 144, 19, 11] 
// b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
// Invalid arrays
// If, for example, we change the first number to something else, comp is not returning true anymore:
// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 132 is not the square of any number of a.
// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 36100 is not the square of any number of a.
// Remarks
// a or b might be [] or {} (all languages except R, Shell).
// a or b might be nil or null or None or nothing (except in C++, COBOL, Crystal, D, Dart, Elixir, Fortran, F#, Haskell, Nim, OCaml, Pascal, Perl, PowerShell, Prolog, PureScript, R, Racket, Rust, Shell, Swift).
// If a or b are nil (or null or None, depending on the language), the problem doesn't make sense so return false.
// Note for C
// The two arrays have the same size (> 0) given as parameter in function comp.
//P: Two arrays a and b
//R: True or False if the two arrays have the "same" elements, with the same multiplicities
//E: (see above)
//Pseudocode:
    //sort both arrays a and b (ex: least to greatest)
    //map a new array from a such that the elements equal the multiplicities.
    //compare the newly mapped array to array b; if equal then return true. Otherwise return false
//My solution:
function comp(array1, array2){
    if(array1 == null || array2 == null){
        return false
    }else{
        let sortedArray1 = array1.sort((a,b)=>a-b)
        let sortedArray2 = array2.sort((a,b)=>a-b)
        let mappedSortedArray1 = sortedArray1.map(e=>e*e)
        console.log(sortedArray1)
        console.log(sortedArray2)
        console.log(mappedSortedArray1)
        if(String(mappedSortedArray1) === String(sortedArray2)){
            return true
        }else{
            return false
        }
    } 
}
//Refactored/cleaned:
function comp(array1, array2){
    if(array1 == null || array2 == null){
        return false
    }else{
        let sortedArray1 = array1.sort((a,b)=>a-b)
        let sortedArray2 = array2.sort((a,b)=>a-b)
        let mappedSortedArray1 = sortedArray1.map(e=>e*e)
        if(String(mappedSortedArray1) === String(sortedArray2)){
            return true
        }else{
            return false
        }
    } 
}
//Test case:
// console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361]))