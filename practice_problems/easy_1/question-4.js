// Using the following string,
// create a new string that contains all lowercase letters
// except for the first character,
// which should be capitalized. (See the example output.)

let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

let lowerCase = munstersDescription.toLowerCase();

let titleCase = lowerCase[0].toUpperCase() + lowerCase.substring(1);

console.log(titleCase);
