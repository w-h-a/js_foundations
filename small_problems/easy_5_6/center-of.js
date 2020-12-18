/*
START

1.  SET arrayRep to split string
2.  IF arrayRep has odd length
      RETURN spliced out element at Math.floor(length divided by 2)
    ELSE
      RETURN spliced out elements at length divided by 2 and one before

END
*/

function centerOf(stringP) {
  let arrayRep = stringP.split('');
  if (arrayRep['length'] % 2 !== 0) {
    return arrayRep.splice(Math.floor(arrayRep['length'] / 2), 1).join('');
  } else {
    return arrayRep.splice(((arrayRep['length'] / 2) - 1), 2).join('');
  }
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"
