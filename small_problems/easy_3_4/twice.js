/*
START

1.  GET stringified version of number
2.  IF two halves of string are not identical
      RETURN number * 2
3.  ELSE
      RETURN number

END
*/

function getHalvesComparison(numP) {
  let numString = String(numP);
  let stringLength = numString['length'];
  let halfway = (stringLength / 2);
  let firstHalf = numString.substring(0, halfway);
  let secondHalf = numString.substring(halfway);

  return firstHalf !== secondHalf;
}

function twice(numP) {
  let isDoubleNum = getHalvesComparison(numP);

  if (isDoubleNum) {
    return numP * 2;
  } else {
    return numP;
  }
}

console.log(
  twice(37),          // 74
  twice(44),          // 44
  twice(334433),      // 668866
  twice(444),         // 888
  twice(107),         // 214
  twice(103103),      // 103103
  twice(3333),        // 3333
  twice(7676),        // 7676
);
