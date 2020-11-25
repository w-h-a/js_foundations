/*
1. Declare length variables (length1 and length2) and
assign to them the lengths of the strings.
2. If length1 > length2, then return secondString + firstString + secondString
3: If length2 > length1, then return firstString + secondString + firstString
*/

function shortLongShort(firstStringParam, secondStringParam) {
  let length1 = firstStringParam['length'];
  let length2 = secondStringParam['length'];
  if (length1 > length2) {
    return secondStringParam + firstStringParam + secondStringParam;
  }
  if (length2 > length1) {
    return firstStringParam + secondStringParam + firstStringParam;
  }
}

console.log(
shortLongShort('abc', 'defgh'),    // "abcdefghabc"
shortLongShort('abcde', 'fgh'),    // "fghabcdefgh"
shortLongShort('', 'xyz'),         // "xyz"
);
