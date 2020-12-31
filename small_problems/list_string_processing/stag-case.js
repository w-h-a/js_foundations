/*
for staggeredCase
1. SET char array to split string
2. SET map to empty string
3. WHILE char has elements
  - IF idx is even
    - SET map to include return value of char to uppercase
    ELSE
    - SET map to include return value of char to lowercase
  - RETURN map
4. RETURN map
*/

let alpha = 'abcdefghijklmnopqrstuvwxyz';

function staggeredCase(stringP) {
  let toUpper = true;
  return stringP.split('').reduce((acc, ele, idx) => {
    if (alpha.includes(ele.toLowerCase()) && toUpper === true) {
      acc += ele.toUpperCase();
      toUpper = false;
    } else if (alpha.includes(ele.toLowerCase())) {
      acc += ele.toLowerCase();
      toUpper = true;
    } else {
      acc += ele;
    }
    return acc;
  }, '');
}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);
