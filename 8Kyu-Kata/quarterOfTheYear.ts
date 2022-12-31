// 8 kyu Quarter of the year
// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.
//P: Integer 1-12
//R: return the quarter that the month(as integer) is in.
//E: 3 -> 1, 11 -> 4
//pseudocode:
//Let's math this out! Take the month integer, divide it by 12, and then multiply by 4. Round it up, and this should be the proper quarter. Use Math.ceil() to round up.

//My solution (TypeScript): 
// export function quarterOf(month: number): number {
//     return Math.ceil((month / 12) * 4)
//   }

// //Arrow syntax:
// export const quarterOf = (month: number): number => Math.ceil((month / 12) * 4)

//Simplyfy the maths:
export const quarterOf = (month: number): number => Math.ceil(month / 3)