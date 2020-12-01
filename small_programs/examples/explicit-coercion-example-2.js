console.clear();
console.log(
  +"", // 0
  +'1', // 1
  +'2.3', // 2.3
  +'abc', // NaN
  +{}, // NaN
  +[], // 0
  +[4], // 4
  +[undefined], // 0
  +[1, 2, 3], // NaN
  +undefined, // NaN
  +null, // 0
  +[null] // 0
);

console.log(
  Number(''), // 0
  Number('1'), // 1
  Number('2.3'), // 2.3
  Number('abc'), // NaN
  Number({}), // NaN
  Number([]), // 0
  Number([4]), // 4
  Number([undefined]), // 0
  Number([1, 2, 3]), // NaN
  Number(undefined), // NaN
  Number(null), // 0
  Number([null]) // 0
);
