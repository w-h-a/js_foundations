/*
Function century

START

1.  SET centuryNumber to Math.floor(year / 100) + 1
2.  IF year is divisible by 100 without remainder
      SET centuryNumber -= 1
3.  RETURN stringified centuryNumber + centurySuffix(centuryNumber)

END

Function centurySuffice

START

1.  SET lastTwo to remainder after dividing by 100
2.  IF lastTwo is 11 12 or 13
      RETURN 'th'
3.  SET lastDigit to remainder after dividing by 10
4.  IF lastDigit is 1
      RETURN 'st'
    ELSE IF lastDigit is 2
      RETURN 'nd'
    ELSE IF lastDigit is 3
      RETURn 'rd'
    ELSE
      RETURN 'th'

END
*/

// Launch's code; mine was too hideous too share

function century(year) {
  let centuryNumber = Math.floor(year / 100) + 1;

  if (year % 100 === 0) {
    centuryNumber -= 1;
  }

  return String(centuryNumber) + centurySuffix(centuryNumber);
}

function centurySuffix(centuryNumber) {
  let lastTwo = centuryNumber % 100;
  if (lastTwo === 11 || lastTwo === 12 || lastTwo === 13) {
    return 'th';
  }

  let lastDigit = centuryNumber % 10;
  if (lastDigit === 1) {
    return 'st';
  } else if (lastDigit === 2) {
    return 'nd';
  } else if (lastDigit === 3) {
    return 'rd';
  } else {
    return 'th';
  }
}

console.log(
  `${century(2000)}\n` +        // "20th"
  `${century(2001)}\n` +        // "21st"
  `${century(1965)}\n` +        // '20th'
  `${century(256)}\n` +         // '3rd'
  `${century(5)}\n` +           // '1st'
  `${century(10103)}\n` +        // '102nd'
  `${century(1052)}\n` +        // '11th'
  `${century(1127)}\n` +        // '12th'
  `${century(11201)}`          // '113th'
);
