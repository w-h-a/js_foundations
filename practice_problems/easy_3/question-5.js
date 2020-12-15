// The following function unnecessarily uses two return statements
// to return boolean values.
// Can you rewrite this function in two ways so it only has one return statement
// and does not explicitly use either true or false?

let isColorValid = function(colorP) {
  return (colorP === 'blue' || colorP === 'green');
}

function isColorValid1(colorP) {
  return (colorP === 'blue' || colorP === 'green');
}

function isColorValid2(colorP) {
  return (colorP === 'blue' || colorP === 'green') ? true : false;
}

let isColorValid3 = colorP => colorP === "blue" || colorP === "green";

console.log(isColorValid('pink'));
console.log(isColorValid('blue'));
console.log(isColorValid1('blue'));
console.log(isColorValid1('red'));
console.log(isColorValid2('green'));
console.log(isColorValid2('red'));
console.log(isColorValid3('pink'));
console.log(isColorValid3('blue'));
