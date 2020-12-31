Problem:

Function takes an array of strings and returns an array of the same values with all vowels removed. 

- input: array
- output: array

- explicit
  - the strings in the output array are identical, except for removed characters
  - all vowels are removed

- implicit
  - input array contains at least one string
  - only vowels are removed
  - vowels can come in lower case and upper case

Test Cases (Given):

removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]

Pseudocode:

for removeVowels
1. SET result to empty array
2. WHILE there are elements in the input array
  - SET charArray to split string by character
  - SET subResult to empty array
  - WHILE there are elements in the charArray
    - IF the set of vowels does not include the element
      - SET subResult to include the element
    - RETURN subResult
  - RETURN joined subResult
  - SET result array to include subResult
3. RETURN result
