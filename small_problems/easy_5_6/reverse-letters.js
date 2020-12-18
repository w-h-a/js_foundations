/*
START

1.  SET array to string split by spaces
2.  SET reducedArray to empty array
3.  WHILE array has elements
      SET nested to string split
      IF length of nested >= 5
        SET reducedArray to include reversed and joined nested
      ELSE
        SET reducedArray to include joined nested
4.  RETURN joined reducedArray

END
*/

const MAGIC = 5;

function reverseWords(stringP) {
  return stringP.split(' ').reduce((acc, ele) => {
    let nested = ele.split('');
    if (nested['length'] >= MAGIC) {
      acc.push(nested.reverse().join(''));
    } else {
      acc.push(nested.join(''));
    }
    return acc;
  }, []).join(' ');
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"
