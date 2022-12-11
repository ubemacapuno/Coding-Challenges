// 7 kyu Calculate Two People's Individual Ages
// Create a function that takes in the sum and age difference of two people, calculates their individual ages, and returns a pair of values (oldest age first) if those exist or null/None if:
// sum < 0
// difference < 0
// Either of the calculated ages come out to be negative
//P: Sum and Difference of two peoples' ages
//R: pair of values (oldest first) or null
//E:    63, -14 -> null
//      24, 4 -> 14, 10
//      50, 5 ->
//Pseudocode:
    // if sum < 0 return null
    // if difference < 0 return null
    // else
        //let value1 = oldest age
        //let value 2 = younger age
//My solution:
function getAges(sum,difference){
    if(sum < 0){
        return null
    }else if(difference < 0){
        return null
    }else{
        let oldest = (sum + difference)/2
        let youngest = oldest - difference
        if(oldest >= 0 && youngest >= 0){
            return [oldest, youngest] 
        }else{
            return null
        }
    }
}
//Refactored:
function getAges(sum,difference){
    if(sum < 0 || difference < 0){
        return null
    }else{
        let oldest = (sum + difference)/2
        let youngest = oldest - difference
        if(oldest >= 0 && youngest >= 0){
            return [oldest, youngest] 
        }else{
            return null
        }
    }
}

//Test:
console.log(getAges(63,-14))