// 8 kyu Cat years, Dog years
// I have a cat and a dog.
// I got them at the same time as kitten/puppy. That was humanYears years ago.
// Return their respective ages now as [humanYears,catYears,dogYears]
// NOTES:
// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that
// My Solution: 
var humanYearsCatYearsDogYears = function(humanYears) {
    if(humanYears >= 3){
      let catYears = ((humanYears-2) * 4) + 24
      let dogYears = ((humanYears-2) *5) + 24
      return [humanYears,catYears,dogYears]
    }else if(humanYears == 2){
      let catYears = 24
      let dogYears = 24
      return [humanYears,catYears,dogYears];
    }else{
      let catYears = 15
      let dogYears = 15
      return [humanYears,catYears,dogYears];
    }
  }
// Better Solution:
var humanYearsCatYearsDogYears = function(y) {
    if (y == 1) return [1, 15, 15]
    if (y == 2) return [2, 24, 24]
    return [y, (y-2) * 4 + 24, (y-2) * 5 + 24]
  }
