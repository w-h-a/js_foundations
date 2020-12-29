Problem:

Function takes one argument, a positive integer, and returns the sum of its digits.
Do this without using for, while, or do/while loops.
Instead, use a series of method calls to perform the sum.

- Input: number (positive integer)
- Output: number (the total of the digits)

- Explict rules:
  - for, while, do/while are impermissible
  - use method chaining
- Implicit rules:
  - ?

Test Cases (Given):

sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45

Pseudocode:

for sum function
1. GET string version of input number
2. GET array version of string
3. GET array version so that each element is a number
4. RETURN total by summing across array version
