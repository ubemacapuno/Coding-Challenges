// 8 kyu Freudian translator
// Take a string as its argument, and return a string with every word replaced by the explanation to everything ("sex"), according to Freud. 
// Note that an empty string, or no arguments, should result in the ouput being ""(empty string).
function toFreud(string){
 return String.replace(/[^\s]+/g, "sex");
}
