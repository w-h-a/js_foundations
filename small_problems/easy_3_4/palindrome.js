/*
START

1.  GET clean version of string
2.  IF clean word is strictly identical to its mirror self
      RETURN true
    ELSE
      RETURN false

END
*/

let alphanumeric = [
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
  'a', 'b', 'c', 'd', 'e',
  'f', 'g', 'h', 'i', 'j',
  'k', 'l', 'm', 'n', 'o',
  'p', 'q', 'r', 's', 't',
  'u', 'v', 'w', 'x', 'y', 'z'
];

function getCleanString(stringP) {
  let lowerCaseCharArray = stringP.toLowerCase().split('');

  let reduceToAlphaNumeric = lowerCaseCharArray.reduce((acc, ele) => {
    if (alphanumeric.includes(ele)) {
      acc.push(ele);
    }
    return acc;
  }, []);

  return reduceToAlphaNumeric.join('');
}


function isPalindrome(stringP) {
  let cleanString = getCleanString(stringP);
  return cleanString === cleanString.split('').reverse().join('');
}

console.log(
  `${isPalindrome('madam')}\n` +
  `${isPalindrome('Madam')}\n` +
  `${isPalindrome("Madam, I'm Adam")}\n` +
  `${isPalindrome('356653')}\n` +
  `${isPalindrome('356a653')}\n` +
  `${isPalindrome('123ab321')}`
);
