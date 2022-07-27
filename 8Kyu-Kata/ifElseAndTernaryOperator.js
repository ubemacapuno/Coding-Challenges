// 8 kyu Training JS #7: if..else and ternary operator
// Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accept 1 parameters:n, n is the number of customers to buy hotdogs, different numbers have different prices (refer to the following table), return a number that the customer need to pay how much money.
// number	price (cents)
// n < 5	100
// n >= 5 and n < 10	95
// n >= 10	90
// You can use if..else or ternary operator to complete it.
//P: Given n, number of customers to buy hot dogs
//R: Return a number that the customer needs to pay
//E: 4 should return 400 (n*100), 5 should return 475 (n*95), 10 should return 900 (n*90)
//Pseudocode:
        //Using the three conditions, use ternary operator. Since there are three conditions, add at least two conditions in the function:
//My solution using ternary operator:
const saleHotdogs = n => n < 5 ? n*100 : n >= 5 && n < 10 ? n*95 : n*90
//refactored using parentheses:
const saleHotdogs = n => n*(n < 5 ? 100 : n >= 5 && n < 10 ? 95 : 90)