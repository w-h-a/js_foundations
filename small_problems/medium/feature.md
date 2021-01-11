Problem:

A featured number (something unique to this exercise) is an odd number that is a multiple of 7, with all of its digits occuring exactly once each. For example, 49 is a featured number, but 98 is not (it is not odd), 97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

Write a function that takes an integer as an argument and returns the next featured number greater than the integer. Issue an error message if there is no next featured number.

NOTE: The largest possible featured number is 9876543201.

- input: number
- output: number or string

- explicit
  - If a number is featured, then it is odd, a multiple of 7, and each of its digits occurs exactly once
  - the input number is an integer
  - the output number is the next featured number greater than the integer
  - the output is a string (error message) just in case the input number is greater than or equal to 9876543201

- implicit
  - A number is featured just in case it is
    - odd
    - a multiple of 7
    - each of its digits occurs exactly once
  - ?

Test Cases (Given):

featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543200);   // 9876543201
featured(9876543201);   // "There is no possible number that fulfills those requirements."

Pseudocode:

for featured(num)
SET num to num plus 1
IF num is either not a multiple of 7 or is a multiple of 2
  - SET num to GET nextMultiple(numP)
DO
  IF checkDigits(num) is true
    - RETURN num
  SET num to num plus 14
WHILE num is less than the big number
RETURN error string

for nextMultiple(num)
WHILE num is either not multiple of 7 or is a multiple of 2
  SET num to num plus 1
RETURN num

for checkDigits(num)
SET result to true
WHILE there are digits to check
  - IF num has no more than 1 of the same digit and result is true
    - SET result to true
    ELSE
    - SET result to false
RETURN result
