let spellingBlocksA = {
  B: "O",
  X: "K",
  D: "Q",
  C: "P",
  N: "A",
  G: "T",
  R: "E",
  F: "S",
  J: "W",
  H: "U",
  V: "I",
  L: "Y",
  Z: "M",
};

let spellingBlocksB = Object.keys(spellingBlocksA).reduce((acc, ele) => {
  acc[spellingBlocksA[ele]] = ele;
  return acc;
}, {});

function isBlockWord(strParam) {
  let shallowA = Object.assign({}, spellingBlocksA);
  let shallowB = Object.assign({}, spellingBlocksB);
  return strParam.toUpperCase().split('').reduce((acc, ele) => {
    if (!Object.keys(shallowA).includes(ele) && !Object.keys(shallowB).includes(ele)) {
      acc = false;
    } else {
      if (shallowA[ele] !== undefined) {
        let temp = shallowA[ele];
        delete shallowA[ele];
        delete shallowB[temp];
      }
      if (shallowB[ele] !== undefined) {
        let temp = shallowB[ele];
        delete shallowB[ele];
        delete shallowA[temp];
      }
    }
    return acc;
  }, true);
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('UH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('floW'));       // true
console.log(isBlockWord('APPLE'));      // false
console.log(isBlockWord('apple'));      // false
console.log(isBlockWord('apPLE'));      // false
console.log(isBlockWord('Box'));        // false
