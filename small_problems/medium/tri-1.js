/*
1. SET array to sorted input numbers
2. IF element at index 0 + element at index 1 is not greater than element at index 2
  - RETURN "not a triangle"
3. IF element at index 0 is identical to element at index 2 of sorted array
  - RETURN "equilateral triangle";
  ELSE IF element at index 0 is identical to element at index 1 or 1 is identical to 2
  - RETURN "isosceles triangle"
  ELSE
  - RETURN "scalene triangle"
*/

function triangle(...arrParam) {
  let arrayOSides = arrParam.sort((a, b) => a - b);
  if (arrayOSides[0] + arrayOSides[1] <= arrayOSides[2]) {
    return "not a triangle";
  }

  if (arrayOSides[0] === arrayOSides[2]) {
    return "equilateral triangle";
  } else if (arrayOSides[0] === arrayOSides[1] || arrayOSides[1] === arrayOSides[2]) {
    return "isosceles triangle";
  } else {
    return "scalene triangle";
  }
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"
