Problem:

Function takes a string and returns an object containing

- the percentage of characters in the string that are lowercase letters
- the percentage of characters in the string that are uppercase letters
- the percentage of characters that are neither

You may assume that the string will always contain at least one character.

- input: string
- output: obj

- explicit
  - object contains freq (as percentage) distribution over characters
  - string will always contain at least one character

- implicit
  - object only contain freq distribution over characters; nothing more
  - rounded to two decimal places

Test Cases (Given):

letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

Pseudocode:

1. SET array to split string at characters
2. SET freq to object w/ lowercase: 0, uppercase: 0, neither: length of input string
3. WHILE array has elements
  - IF char is letter & lowercase
    - SET freq[lowercase] += 1
    - SET freq[neither] -= 1
    ELSE IF char is letter & uppercase
    - SET freq[uppercase] += 1
    - SET freq[neither] -= 1
4. SET freq to entries array
5. SET map to array w/ length 0
6. WHILE elements in freq
  - SET map to include element but where element[1] = element[1] / length of input string and multiplied by 100 and rounded to 2
7. SET freq to object from entries of map
8. RETURN freq
