Problem:

Function takes a year as an argument and returns the number of Friday the 13ths in that year.

You may assume that the year is greater than 1752 when the UK adopted the modern Gregorian Calendar. You may also assume that the same calendar will remain in use for the future.

- input: number
- output: number

- explicit
  - input number represents a year after 1752
  - output number reprsents number of Friday the 13ths

- implicit
  - ?

Test Cases (Given):

fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2

Pseudocode:

1. SET count to 0
2. WHILE there are months of the year
  - SET newDate to new Date('${Month} 13, ${Year}')
  - SET unlucky to newDate.getDay()
  - IF unlucky is identical to 5
    - SET count to count plus 1
  - RETURN count
3. RETURN count
