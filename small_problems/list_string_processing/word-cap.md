Problem:

Function takes a string as an argument and returns an identical string, except that the first character of every word is capitalized and all subsequent characters are in lowercase. You may assume that a word is any consecutive sequence of non-whitespace characters.

- input: string
- output: string

- explicit reqs
  - output string is identical to input string, except that, for all words, the first character is capitalized and all subsequent characters are in lowercase.
    - hence, only the first character of every word is in uppercase
  - a word is any consecutive sequence of non-whitespace
    - hence, only the first character of every consecutive sequence of non-whitespace is in uppercase

- implicit reqs
  - words are only consecutive sequences of non-whitespace
    - hence, if we have a consecutive sequence of non-whitespace, only the first character is in uppercase (if at all possible)
  - before I added 'consecutive' to the definition of a word, the definition of a word was only implicit.

Test Cases (Given):

wordCap('four score and seven');       // "Four Score And Seven"
wordCap('the javaScript language');    // "The Javascript Language"
wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'

Pseudocode:

for wordCap
1. SET array to split string at space
2. WHILE array has elements
  - SET noobArray to split at characters
  - WHILE noobArray has characters
    - SET evenNooberArray to empty array
    - IF noobArray element is at index 0
      - SET evenNooberArray to include result of uppercasing element
      ELSE
      - SET evenNooberArray to include result of lowercasing element
  - RETURN evenNooberArray as joined string
3. RETURN joined array
