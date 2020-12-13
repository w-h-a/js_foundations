/*
START

1.  SET alphabet array
2.  SET string array to split string
3.  WHILE alphabet does not include character in string array
      SET place space in string array instead
4.  WHILE string array array has consecutive spaces
      REDUCE string array
5.  RETURN joined string array

END
*/

let alphabet = [
  'A', 'B', 'C', 'D', 'E',
  'a', 'b', 'c', 'd', 'e',
  'F', 'G', 'H', 'I', 'J',
  'f', 'g', 'h', 'i', 'j',
  'K', 'L', 'M', 'N', 'O',
  'k', 'l', 'm', 'n', 'o',
  'P', 'Q', 'R', 'S', 'T',
  'p', 'q', 'r', 's', 't',
  'U', 'V', 'W', 'X', 'Y', 'Z',
  'u', 'v', 'w', 'x', 'y', 'z'
];

function getSpacedArray(arrayP) {
  let reducedArray = arrayP.reduce((acc, ele) => {
    if (!(alphabet.includes(ele))) {
      acc.push(" ");
    } else {
      acc.push(ele);
    }
    return acc;
  }, []);

  return reducedArray;
}

function crunch(arrayP) {
  let reducedArray = arrayP.reduce((acc, ele, idx) => {
    if (ele !== " ") {
      acc.push(ele);
    } else if (ele !== arrayP[idx - 1]) {
      acc.push(ele);
    }
    return acc;
  }, []);

  return reducedArray;
}

function cleanUp(stringP) {
  let stringArray = stringP.split('');
  let replaceWithSpaces = getSpacedArray(stringArray);
  let noConsecutiveSpaces = crunch(replaceWithSpaces);
  return noConsecutiveSpaces.join('');
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "
