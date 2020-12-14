/*
START

1.  GET arrayOfWords
2.  WHILE arrayOfWords still has elements
      GET newArray with elements that swap the first and last letter of element
3.  RETURN joined newArray

END
*/

function swap(stringP) {
  let arrayOfWords = stringP.split(' ');

  let reduceToSwap = arrayOfWords.reduce((acc, ele) => {
    let charArray = ele.split('');

    charArray[0] = ele[ele['length'] - 1];
    charArray[ele['length'] - 1] = ele[0];

    acc.push(charArray.join(''));

    return acc;
  }, []);

  return reduceToSwap.join(' ');
}

console.log(
  '', swap('Oh what a wonderful day it is'), '\n',  // "hO thaw a londerfuw yad ti si"
  swap('Abcde'), '\n',                              // "ebcdA"
  swap('a')                                         // "a"
);
