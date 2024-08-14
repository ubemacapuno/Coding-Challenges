
// 8 kyu Calculate BMI
// P: weight, height
// R: Return a string based on the conditions of "BMI"
// E: If bmi meets condition x, return string y
// Pseudocode:
//     declare bmi as weight over height squared
//     use if/then conditions and return the applicable string
// Solution:
function bmi(weight, height) {
    let bmi = (weight/(height*height))
    if(bmi <= 18.5){
      return "Underweight"
    }else if(bmi <= 25.0){
      return "Normal"
    }else if(bmi <= 30.0){
      return "Overweight"
    }else{
      return "Obese"
    }
  }