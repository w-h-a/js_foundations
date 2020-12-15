// Using Object.entries, return the expected output.

let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
// [ 'Barney', 2 ]

let array = Object.entries(flintstones);

let reduced = array.reduce((acc, ele) => {
  if (ele[0] === "Barney") {
    acc.push(ele);
  }
  return acc.flat();
}, []);

console.log(reduced);
