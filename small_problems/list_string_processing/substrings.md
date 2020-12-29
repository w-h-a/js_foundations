Problem:

Function takes a string argument and returns a list of
all substrings that start from the beginning of the string,
ordered from shortest to longest.

- Input: string
- Output: array

- Explicit Rules:
  - the array must include all substrings that start from the beginning
  - the array must be ordered from shortest substring to longest

- Implicit Rules:
  - the array must only include substrings that start from the beginning
  - we are after substrings rather than proper substrings

Test Cases (Given):

leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

Pseudocode:

for leadingSubstring
1. SET array to split string
2. SET result to empty array
3. SET idx to 0
4. WHILE array has elements
  - SET slash to slice of array from 0 to idx + 1
  - SET join to joined slash
  - SET result to include join
  - RETURN result
5. RETURN result
