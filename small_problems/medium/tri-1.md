Problem:

- A triangle is equilateral just in case all three sides are of equal length
- A triangle is isosceles just in case two sides are of equal length, but the third is not
- A triangle is scalene just in case all three sides are of different lengths

Furthermore, all triangles are such that

- the sum of the two shortest sides must be greater than the length of the longest side

Function takes the lengths of the three sides as arguments and returns one of the following four strings, 

- 'equilateral triangle'
- 'isosceles triangle'
- 'scalene triangle'
- 'not a triangle'

- input: triple of numbers
- output: string

- explicit
  - all good

- implicit
  -

Test Cases (given):

triangle(3, 3, 3);        // "equilateral"
triangle(3, 3, 1.5);      // "isosceles"
triangle(3, 4, 5);        // "scalene"
triangle(0, 3, 3);        // "invalid"
triangle(3, 1, 1);        // "invalid"

Pseudocode:

1. SET array to sorted input numbers
2. IF element at index 0 + element at index 1 is not greater than element at index 2
  - RETURN "not a triangle"
3. IF element at index 0 is identical to element at index 2 of sorted array
  - RETURN "equilateral triangle";
  ELSE IF element at index 0 is identical to element at index 1 or 1 is identical to 2
  - RETURN "isosceles triangle"
  ELSE
  - RETURN "scalene triangle"
