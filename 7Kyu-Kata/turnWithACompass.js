// 7 kyu Turn with a Compass
// You receive the direction you are facing (one of the 8 directions: N, NE, E, SE, S, SW, W, NW) and a certain degree to turn (a multiple of 45, between -1080 and 1080); positive means clockwise, and negative means counter-clockwise.
// Return the direction you will face after the turn.
//My solution:
function direction(facing, turn){
    if (facing === "N"){
            facing = 0
    }else if (facing === "NE"){
            facing = 45
    }else if (facing === "E"){
            facing = 90
    }else if (facing === "SE"){
            facing = 135
    }else if (facing === "S"){
            facing= 180
    }else if (facing === "SW"){
            facing = 225
    }else if (facing === "W"){
            facing = 270
    }else if (facing === "NW"){
            facing = 315
    }else{
        console.log("error facing")
    }

    // positive turn
    if (turn % 8 === 0){
            turn = 0
    }else if (turn > 0 && turn % 8 === 5){
            turn = 45
    }else if (turn > 0 && turn % 8 === 2){
            turn = 90
    }else if (turn > 0 && turn % 8 === 7){
            turn = 135
    }else if (turn > 0 && turn % 8 === 4){
            turn = 180
    }else if (turn > 0 && turn % 8 === 1){
            turn = 225
    }else if (turn > 0 && turn % 8 === 6){
            turn = 270
    }else if (turn > 0 && turn % 8 === 3){
            turn = 315
    // negative turns!!
    }else if (turn < 0 && turn % 8 === -5){
            turn = 315
    }else if (turn < 0 && turn % 8 === -2){
            turn = 270
    }else if (turn < 0 && turn % 8 === -7){
            turn = 225
    }else if (turn < 0 && turn % 8 === -4){
            turn = 180
    }else if (turn < 0 && turn % 8 === -1){
            turn = 135
    }else if (turn < 0 && turn % 8 === -6){
            turn = 90
    }else if (turn < 0 && turn % 8 === -3){
            turn = 45
    }else{
        console.log('Error Turn')
    }
    console.log(facing,turn)

    let sumOfFacingAndTurn = facing + turn
    console.log(`The sum of facing and turn is ${sumOfFacingAndTurn}`)

    if(sumOfFacingAndTurn % 8 === 0){
        return "N"
    }else if(sumOfFacingAndTurn % 8 === 5){
        return "NE"        
    }else if(sumOfFacingAndTurn % 8 === 2){
        return "E"
    }else if(sumOfFacingAndTurn % 8 === 7){
        return "SE"
    }else if(sumOfFacingAndTurn % 8 === 4){
        return "S"
    } else if(sumOfFacingAndTurn % 8 === 1){
        return "SW"
    }else if(sumOfFacingAndTurn % 8 === 6){
        return "W"
    }else if(sumOfFacingAndTurn % 8 === 3){
        return "NW"
    }else{
        return "error sum of facing turn"
    }
}