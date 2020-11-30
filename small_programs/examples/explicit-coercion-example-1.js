console.clear();
console.log(
  Number({}), // NaN
  Number([]), // 0
  Number([4]), // 4
  Number([undefined]), // 0
  Number([1, 2, 3]), // NaN
  Number(undefined), // NaN
  Number(null), // 0
  Number([null]) // 0
);
