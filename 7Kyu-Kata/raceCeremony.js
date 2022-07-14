// 7 kyu Race Ceremony
// The national go-kart racing competition is taking place in your local town and you've been called for building the winners podium with the available wooden blocks. Thankfully you are in a wood-rich area, number of blocks are always at least 6.
// Remember a classic racing podium have three platforms for first, second and third places. First place is the highest and second place is higher than third. Also notice that platforms are arranged as 2nd - 1st - 3rd.
// The organizers want a podium that satisfies:
// The first place platform has the minimum height posible
// The second place platform has the closest height to first place
// All platforms have heights greater than zero.
// Task
// Given the numbers of blocks available, return an array / tuple or another data structure depending on the language (refer sample tests) with the heights of 2nd, 1st, 3rd places platforms.
// Examples (input -> output)
// 11 ->   [4, 5, 2]
// 6  ->   [2, 3, 1]
// 10 ->   [4, 5, 1]
//7 -> [2,4,1]
//10000 -> [33334, 33335, 33331]]
//Parameters: integer of blocks available
//R: array for second, first, and last place.
//E: See examples above
//Pseudocode:
        //Per the examples, second place is Math.ceil(blocks/3), first place is secondPlace + 1, thirdPlace is the remainder. This works in all cases EXCEPT for when blocks is 7.
        //Return all three variables in array [secondPlace, firstPlace, thirdPlace]
//My solution:
// function racePodium(blocks) {
//     if (blocks == 7) {
//       return [2, 4, 1]; //Without this statement, the else will return 3, 4, 0.
//     } else { //This statement works for all test cases EXCEPT for blocks == 7
//       let secondPlace = Math.ceil(blocks / 3);
//       let firstPlace = secondPlace + 1;
//       let thirdPlace = Math.ceil(blocks - secondPlace - firstPlace);
//       return [secondPlace, firstPlace, thirdPlace];
//     }
//   }
//   //Solution from other user - Instead of making an else for blocks == 7, 
//   //they made a condition to -- and ++ secondPlace and thirdPlace respectively when thirdPlace is < 1:
//   function racePodium(blocks) {
//       let first=Math.ceil(blocks/3+1);
//       let second = first-1;
//       let third = blocks - first - second;
//       if (third<1) {second--;third++}
//       return [second,first,third];
//     }
//   //Test Cases:
//   console.log(racePodium(8))