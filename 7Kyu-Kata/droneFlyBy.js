// 7 kyuDrone Fly-By
// You will be given two strings: lamps and drone. lamps represents a row of lamps, currently off, each represented by x. When these lamps are on, they should be represented by o.
// The drone string represents the position of the drone T (any better suggestion for character??) and its flight path up until this point =. The drone always flies left to right, and always begins at the start of the row of lamps. Anywhere the drone has flown, including its current position, will result in the lamp at that position switching on.
// Return the resulting lamps string. See example tests for more clarity.
//P: 2 strings, lamps (x=off, o=on) and drone (T=position)
//R: The resulting lamps string
//Examples:
        // describe("Drone Fly-By", () => {
        //     it("Testing for fixed tests", () => {
        //       assert.strictEqual(flyBy('xxxxxx', '====T'), 'ooooox');
        //       assert.strictEqual(flyBy('xxxxxxxxx', '==T'), 'oooxxxxxx'); 
        //       assert.strictEqual(flyBy('xxxxxxxxxxxxxxx', '=========T'), 'ooooooooooxxxxx'); 
        //     })
        //   })
//Pseudocode:
    //Find the length of the drone and store as a number
    //make an array that will be the same length as the lamps
            //The start of the array will be o's that are equal to the length of the drones
            //The rest of the length will be "x" if available.
//My solution:
function flyBy(lamps, drone){
    let returnArr = []
    let droneLength = drone.length
    let lampsFragment = lamps.length - drone.length
    let lampsArr = lamps.split('')
    for(let i=0; i<droneLength; i++){
        returnArr.push("o")
    }
    for(let i=0; i<lampsFragment; i++){
        returnArr.push("x")
    }
    if(drone.length > lamps.length){
        return returnArr.slice(0, lamps.length).join('')
    }else{
        return returnArr.join('')
    }
}
//Refactor:
function flyBy(lamps, drone){
    let returnArr = []
    for(let i=0; i<drone.length; i++){
        returnArr.push("o")
    }
    for(let i=0; i<lamps.length - drone.length; i++){
        returnArr.push("x")
    }
    return drone.length > lamps.length ? returnArr.slice(0, lamps.length).join('') : returnArr.join('')
}
//Test:
console.log(flyBy('xxx', '==============T'))