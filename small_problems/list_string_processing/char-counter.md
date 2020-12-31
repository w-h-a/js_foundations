Problem:

Function takes a string and returns an object containing three properties:
1. the number of characters in the string that are lowercase alphabetic characters,
2. the number of characters that are uppercase alphabetic characters, and
3. the number of characters that are neither.

- input: string
- output: object

- explicit
  - object has three properties
    1. lowercase holds exclusive and exhaustive number of characters that are both alpha and lower
    2. uppercase holds exclusive and exhaustive number of characters that are both alpha and upper
    3. neither holds exclusive and exhaustive number of leftover characters

- implicit
  - the counts for alphabetic properties are initialized at 0
  - the count for neither property is initialized at length of input string

Test Cases (Given):

letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }

Pseudocode:

for letterCaseCount
1. SET freqDist to
  - 'lowercase': 0
  - 'uppercase': 0
  - 'neither': length of input string
2. SET arrayOChar to string split by characters
3. WHILE there are elements in arrayOChar
  - IF element is both alpha and lowercase
    - SET 'lowercase' to current value plus 1
    - SET 'neither' to current value minus 1
    ELSE if element is both alpha and uppercase
    - SET 'uppercase' to current value plus 1
    - SET 'neither' to current value minus 1
  - RETURN freqDist
4. RETURN freqDist
