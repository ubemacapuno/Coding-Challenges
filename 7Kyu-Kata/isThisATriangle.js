// 7 kyu Is this a triangle?
//Parameters: three nums for three sides of a potential triangle (a,b,c)
//Return: true if triangle, false if not a triangle
//Examples:
// assert.strictEqual(isTriangle(1,2,2), true);
// assert.strictEqual(isTriangle(7,2,2), false);
//Pseudocode:
        //Create an array called isTriangleArray in a way that it is set up like [a,b,c]
        //sort the array from smallest to largest
        //If isTriagleArray[0] + isTriagleArray[1] is greater than isTriagleArray[2] and none of the values are 0, then return true. Otherwise return false
//My solution:
function isTriangle(a,b,c){
    let isTriangleArray = [a,b,c]
    if(a <= 0 || b <= 0 || c <= 0){
        return false;
    }else{
        let sortedIsTriangleArray = isTriangleArray.sort((a,b)=>a-b)
        return sortedIsTriangleArray[0] + sortedIsTriangleArray[1] > sortedIsTriangleArray[2] ? true : false
    }
}
//Refactored:
function isTriangle(a,b,c){
    if(a <= 0 || b <= 0 || c <= 0){
        return false;
    }else{
        let sortedIsTriangleArray = [a,b,c].sort((a,b)=>a-b)
        return sortedIsTriangleArray[0] + sortedIsTriangleArray[1] > sortedIsTriangleArray[2]
    }
}
//Test Case:
console.log(isTriangle(2,2,8))