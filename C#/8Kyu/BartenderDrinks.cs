
/*
Complete the function that receives as input a string, and produces outputs according to the following table:

Input	Output
"Jabroni"	"Patron Tequila"
"School Counselor"	"Anything with Alcohol"
"Programmer"	"Hipster Craft Beer"
"Bike Gang Member"	"Moonshine"
"Politician"	"Your tax dollars"
"Rapper"	"Cristal"
anything else	"Beer"
Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".

P: string
R: string
E: "Jabroni" => "Patron Tequila"
   "School Counselor" => "Anything with Alcohol"
   "Programmer" => "Hipster Craft Beer"
   "Bike Gang Member" => "Moonshine"
   "Politician" => "Your tax dollars"
   "Rapper" => "Cristal"
   "anything else" => "Beer"
P: - create objects (Dictionary) with key-value pairs
   - create a switch statement to check the input
   - return the value of the key
*/
// import dictionary
using System.Collections.Generic;
public class Kata
{
  public static string GetDrinkByProfession(string p)
  {
    // Create a dictionary with key-value pairs.
    // Since input is case insensitive, keep the keys in lower case
    var drinks = new Dictionary<string, string>
    {
      {"jabroni", "Patron Tequila"},
      {"school counselor", "Anything with Alcohol"},
      {"programmer", "Hipster Craft Beer"},
      {"bike gang member", "Moonshine"},
      {"politician", "Your tax dollars"},
      {"rapper", "Cristal"}
    };

    // given lower case keys, return the value of the key if the key exists in the dictionary,
    // else return "Beer"
    return drinks.ContainsKey(p.ToLower()) ? drinks[p.ToLower()] : "Beer";
  }
}