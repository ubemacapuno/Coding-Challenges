// 7 kyu Survive the attack
// Given two Arrays in which values are the power of each soldier, return true if you survive the attack or false if you perish.

// CONDITIONS

// Each soldier attacks the opposing soldier in the same index of the array. The survivor is the number with the highest value.
// If the value is the same they both perish
// If one of the values is empty(different array lengths) the non-empty value soldier survives.
// To survive the defending side must have more survivors than the attacking side.
// In case there are the same number of survivors in both sides, the winner is the team with the highest initial attack power. If the total attack power of both sides is the same return true.
// The initial attack power is the sum of all the values in each array.
// EXAMPLES

// attackers=[ 1, 3, 5, 7 ]   defenders=[ 2, 4, 6, 8 ]  
// //0 survivors                4 survivors
// //return true


// attackers=[ 1, 3, 5, 7 ]   defenders=[ 2, 4 ]  
// //2 survivors  (16 damage)   2 survivors (6 damage)
// //return false

// attackers=[ 1, 3, 5, 7 ]   defenders=[ 2, 4, 0, 8 ]  
// //1 survivors                3 survivors 
// //return true

//P: two arrays of numbers
//R: True if defenders survive, false if attackers survive
//E:    
    // (hasSurvived([2, 9, 9, 7], [1, 1, 3, 8]), false);
    // ([1, 3, 5, 7], [2, 4, 6, 8]), true);
//Pseudocode:
    //early return: have a length checker - if attackers.length > defenders.length, return false. else if attackers.length < defenders.length, return true
    //iterate through both arrays and have a score tracker for attackers and defenders. If defenders is greater, return true, if attackers is greater, return false.
    //If survivors on both sides are equal, then compare the initial sums of both arrays. If defender sum is equal to or greater than attacker sum, return true. Otherwise return false.
//My solution:
function hasSurvived(attackers, defenders){
    if(attackers.length > defenders.length){
        return false
    }else if(attackers.length < defenders.length){
        return true
    }
    let survivorDefense = 0
    let survivorOffense = 0
    let defenderInitialAttack = defenders.reduce((acc,c) => acc + c,0)
    let attackerInitialAttack = attackers.reduce((acc,c) => acc + c,0)
    for(let i = 0; i < attackers.length; i++){
        if(attackers[i] > defenders[i]){
            survivorOffense += 1
        }else if(attackers[i] < defenders[i]){
            survivorDefense +=1
        }
    }
    if(survivorDefense > survivorOffense){
        return true
    }else if(survivorOffense > survivorDefense){
        return false
    }else{
        if(defenderInitialAttack >= attackerInitialAttack){
            return true
        }else{
            return false
        }
    }
}
//Test:
console.log(hasSurvived([71,53,38,67,3,6,27,57,93,40],[82,65,32,62,14,23,20,20,53,73]))