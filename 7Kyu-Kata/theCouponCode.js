//7 kyu The Coupon Code
// Story
// Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.
// Task
// Your mission:
// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.
// A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".
// Examples:
// checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false
//P: enteredCode, correctCode, currentDate, expirationDate
//R: true or false
//E: 
        // checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
        // checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false
        // checkCoupon('123','123','September 5, 2014','October 1, 2014'), true)
        // checkCoupon('123a','123','September 5, 2014','October 1, 2014'), false)
//Pseudocode:
//Conditional statements - if enteredCode === correctCode and currentDate <= expirationDate, return TRUE else false
//To convert the date from string to date so that we can use comparison operators, use Date.parse(dateStringHere)
//My solution:
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    return enteredCode === correctCode && Date.parse(currentDate) <= Date.parse(expirationDate)
}
//Arrow fxn:
const checkCoupon = (enteredCode, correctCode, currentDate, expirationDate) => enteredCode === correctCode && Date.parse(currentDate) <= Date.parse(expirationDate)