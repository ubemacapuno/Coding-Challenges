// 7 kyu All Star Code Challenge #1
// Write a function, called sumPPG, that takes two NBA player objects/struct/Hash/Dict/Class and sums their PPG
//Parameters: playerOne, playerTwo (objects)
//Return: sum of playerOne and playerTwo PPG
//Example:
// var iverson = new NBAplayer("Iverson", "76ers", 11.2);
// var jordan = new NBAplaer("Jordan", "bulls", 20.2);
// sumPPG(iverson, jordan); // => 31.4
//Pseudocode:
        //use dot notation or bracket notation to add the ppg properties from playerOne and playerTwo
//My solution - dot notation
function sumPPG(playerOne, playerTwo){
    return playerOne.ppg + playerTwo.ppg
}
//My solution - bracket notation
function sumPPG(playerOne, playerTwo){
      return playerOne['ppg'] + playerTwo['ppg']
}
//Arrow syntax solutions:
const sumPPG = (playerOne, playerTwo) => playerOne.ppg + playerTwo.ppg
const sumPPG = (playerOne, playerTwo) => playerOne['ppg'] + playerTwo['ppg']