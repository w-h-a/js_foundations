console.clear();
console.log(
  '' == {}, // false
  '[object Object]' == {}, // true
  '[object Object]' == {a: 24, b: 'bar'}, // true
  [] == '' // true
);
