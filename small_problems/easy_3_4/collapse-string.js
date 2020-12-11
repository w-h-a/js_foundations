/*
START

1.  SET charArray to split string
2.  WHILE charArray still has elements
      IF element is not the same as the last
        push the element to a new array
      RETURN new array
3.  RETURN joined new array

END
*/

console.clear();

function crunch(stringP) {
  let charArray = stringP.split('');
  let reducedCharArray = charArray.reduce((acc, ele, idx) => {
    if (ele !== charArray[idx - 1]) {
      acc.push(ele);
    }
    return acc;
  }, []);
  return reducedCharArray.join('');
}

console.log(
  crunch('ddaaiillyy ddoouubbllee'),    // "daily double"
  crunch('4444abcabccba'),              // "4abcabcba"
  crunch('ggggggggggggggg'),            // "g"
  crunch('a'),                          // "a"
  crunch(''),                           // ""
);
