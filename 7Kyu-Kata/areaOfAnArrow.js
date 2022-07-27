// 7 kyu Area of an arrow
// An arrow is formed in a rectangle with sides a and b by joining the bottom corners to the midpoint of the top edge and the centre of the rectangle.
// a and b are integers and > 0
// Write a function which returns the area of the arrow.
//P: Given nums a and b (view diagram) which are sides of a rectangle
//R: Return the area of the arrow in the rectangle that is formed by joining the bottom corners to the midpoint of the top edge and the centre of the rectangle.
//E: (arrowArea(4,2), 2), (arrowArea(7,6), 10.5), (arrowArea(25,25), 156.25)
//Pseudocode:
        //declare variables for a,b,c of right triangle made inside the arrow.
        //Use pythagorean theorom.
        //Once area of half the triangle is determined, multiply it by 2 and return it
//My solution:
function arrowArea(a,b) {
    let smallA = a/2
    let smallB = b/2
    return smallA * smallB
}
//Refactored:
const arrowArea = (a,b) => (a/2) * (b/2)
//Test Case:
console.log(arrowArea(25,25))