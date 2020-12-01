console.clear();
console.log(
  1 + true, // 2
  1 + false, // 1
  true + false, // 1
  1 + null, // 1
  null + false, // 0
  null + true, // 1
  null + null, // 0
  null + undefined, // NaN
  1 + undefined, // NaN
  false + undefined, // NaN
  true + undefined, // NaN
  undefined + undefined // NaN
);
