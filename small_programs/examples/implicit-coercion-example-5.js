console.clear();
console.log(
  [1] + 2,        // "12"
  [1] + '2',      // "12"
  [1, 2] + 3,     // "1,23"
  [] + 5,         // "5"
  [] + true,      // "true"
  42 + {}        // "42[object Object]"
);
