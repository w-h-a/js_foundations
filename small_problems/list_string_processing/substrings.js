/*
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
*/

function leadingSubstrings(stringP) {
  return stringP.split('').reduce((acc, _, idx, src) => {
    acc.push(src.slice(0, (idx + 1)).join(''));
    return acc;
  }, []);
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
