// 7 kyu Alphabet war
// There is a war and nobody knows - the alphabet war!
// There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

// Task
// Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

// The left side letters and their power:

//  w - 4
//  p - 3
//  b - 2
//  s - 1
// The right side letters and their power:

//  m - 4
//  q - 3
//  d - 2
//  z - 1
// The other letters don't have power and are only victims.

// Example
// alphabetWar("z");        //=> Right side wins!
// alphabetWar("zdqmwpbs"); //=> Let's fight again!
// alphabetWar("zzzzs");    //=> Right side wins!
// alphabetWar("wwwwwwz");  //=> Left side wins!
//P: string of letters
//R: Left side wins!, let's fight again! or Right side wins!
//E: see examples above

//Pseudocode:
    //declare var for left side letters
    //declare var for right side letters
    //use a loop and conditions; if left side letters are seen, add to left side variable (do the same for the right)
    //return which side has the highest score, otherwise return fight again
//My solution:
function alphabetWar(fight){
    let leftSideScore = 0
    let rightSideScore = 0
    for(let i=0; i<fight.length; i++){
        if(fight[i]==="w"){
            leftSideScore += 4
        }else if(fight[i]==="p"){
            leftSideScore += 3
        }else if(fight[i]==="b"){
            leftSideScore += 2
        }else if(fight[i]==="s"){
            leftSideScore += 1
        }else if(fight[i]==="m"){
            rightSideScore += 4
        }else if(fight[i]==="q"){
            rightSideScore += 3
        }else if(fight[i]==="d"){
            rightSideScore += 2
        }else if(fight[i]==="z"){
            rightSideScore += 1
        }
    }
    return leftSideScore > rightSideScore ? "Left side wins!" 
    : rightSideScore > leftSideScore ? "Right side wins!"
    : "Let's fight again!"
}
//Test case:
// console.log(alphabetWar("wwwwwwz"))