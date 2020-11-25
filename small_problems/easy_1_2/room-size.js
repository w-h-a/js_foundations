/*
1. Asks user for unit of measurement (meters or feet)
2. Asks user for length of their room (converts to number)
3. Asks user for width of their room (converts to number)
4. Gets square meters and square feet, returns numbers and rounds.
*/

// My solution:

const CONVERSION = 10.7639;

function getArea(unitParam, lengthParam, widthParam) {
  if (unitParam === 'meters') {
    let areaInMeters = lengthParam * widthParam;
    let areaInFeet = areaInMeters * CONVERSION;
    areaInMeters = areaInMeters.toFixed(2);
    areaInFeet = areaInFeet.toFixed(2);
    return `The area is ${areaInMeters} square meters (or ${areaInFeet} square feet).`;
  } else if (unitParam == 'feet') {
    let areaInFeet = lengthParam * widthParam;
    let areaInMeters = areaInFeet / CONVERSION;
    areaInFeet = areaInFeet.toFixed(2);
    areaInMeters = areaInMeters.toFixed(2);
    return `The area is ${areaInFeet} square feet (or ${areaInMeters} square meters).`;
  } else {
    return 'Please try again.'
  }
}

function getUser(inputParam) {
  let rlSync = require('readline-sync');
  return rlSync.question(inputParam);
}

let unit = getUser("Enter unit of measurement (meters or feet): ");
let length = Number(getUser("Enter the length: "));
let width = Number(getUser("Enter the width: "));
let result = getArea(unit, length, width);
console.log(result);
