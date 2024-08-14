/**
 * P string (language)
 * R a greeting in that language (default engish)
 * E
 * Pseudocode
 * Have an object with the key language and value of welcome string
 * when given the key, return the value
 *
 */

function greet(language) {
  const welcomeObject = {
    english: "Welcome",
    czech: "Vitejte",
    danish: "Velkomst",
    dutch: "Welkom",
    estonian: "Tere tulemast",
    finnish: "Tervetuloa",
    flemish: "Welgekomen",
    french: "Bienvenue",
    german: "Willkommen",
    irish: "Failte",
    italian: "Benvenuto",
    latvian: "Gaidits",
    lithuanian: "Laukiamas",
    polish: "Witamy",
    spanish: "Bienvenido",
    swedish: "Valkommen",
    welsh: "Croeso",
  };

  // return value associated with given key; default english
  return welcomeObject[language] || welcomeObject["english"];
}
