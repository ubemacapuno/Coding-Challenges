// 7Kyu Mumbling 
// This time no story, no theory. The examples below show you how to write function accum:
// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.
//my solution:
function accum(s) {
    let c = s.toLowerCase().split("").map((e,i)=>e.repeat(i+1))
    for(i=0;i<c.length;i++){
        c[i] = c[i].charAt(0).toUpperCase() + c[i].slice(1);
    }
    return c.join("-")
}
// test case:
// console.log(accum("idGaF"))