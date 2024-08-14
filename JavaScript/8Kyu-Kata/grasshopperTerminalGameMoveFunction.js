// 8 kyu Grasshopper - Terminal game move function
// Terminal game move function
// In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.
// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.
// Example:
// move(3, 6) should equal 15
//Parameters: 2 nums: current position, and the dice number
//Return: number of the new position
//Example: move(3,6) equals 15. Player starts on position 3. 3 + (6*2) = 15
//Pseudocode:
        //(dice roll * 2) plus current position equals the new position
        function move (position, roll) {
            return (roll * 2) + position
          }
          //refactored:
          const move = (position,roll) => roll * 2 + position