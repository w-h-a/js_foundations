/*
START

1.  GET clean version of string (only alphabet and spaces allowed)
2.  GET arrayOfWords
3.  WHILE arrayOfWords still has elements
      GET size of the word
      SET frequency table to plus one for that size
4.  RETURN frequency table

END
*/

let lincoln = 'Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.';

function getCleanedUpVersion(stringP) {
  let charArray = stringP.toLowerCase().split('');
  let alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');

  let reduceToAlphaAndSpaces = charArray.reduce((acc, ele, idx) => {
    if (ele === ' ') {
      if (charArray[idx - 1] !== ' ') {
        acc.push(ele);
      }
    } else if (alpha.includes(ele)) {
      acc.push(ele);
    }
    return acc;
  }, []);

  return reduceToAlphaAndSpaces.join('');
}

function wordSizes(stringP) {
  let freqTable = {};

  let cleanString = getCleanedUpVersion(stringP);
  let arrayOfWords = cleanString.split(' ');

  arrayOfWords.forEach(element => {
    let sizeOfWord = String(element['length']);
    if (freqTable[sizeOfWord] === undefined) {
      freqTable[sizeOfWord] = 1;
    } else {
      freqTable[sizeOfWord] += 1;
    }
  });

  if (freqTable['0'] === 1) {
    freqTable = {};
  }

  return freqTable;
}

console.log(
  '', wordSizes("What's up, doc?"),'\n',                            // {"2": 1, "3": 1, "5": 1}
  wordSizes('Hey diddle diddle, the cat and the fiddle!'),'\n', // {"3": 5, "6": 3}
  wordSizes(lincoln),'\n',
  wordSizes('')
);
