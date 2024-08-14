// 7 kyu Credit Card Mask 06/10/2022
// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.
// Your task is to write a function maskify, which changes all but the last four characters into '#'.
// Examples
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""
// "What was the name of your first pet?"
// "Skippy" --> "##ippy"
// "Nananananananananananananananana Batman!"
// -->
// "####################################man!"
//P: String of numbers and/or letters
//R: String that changes all but the last four characters into "#"
//E: "Skippy" --> "##ippy"
//Pseudocode:
  //split into an array
  //iterate/map the array, changing each element to '#', but also include
  //a condition to keep the last four letters the same (use conditional involving array length)
//My solution:
function maskify(cc) {
    let ccArray = cc.split('')
    let mappedCc = ccArray.map((e,i)=>{
        if(i <= ccArray.length - 5){
            return "#"
        }else{
            return e
        }
    })
    return mappedCc.join('')
}
//Test Case:
// console.log(maskify('4556364607935616'))