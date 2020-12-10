let complexValue = [1, 2, 3, 4];

function mutate(complexP) {
  complexP = complexP.reverse();
  console.log(complexP === complexValue);
  console.log(complexP); // [4, 3, 2, 1]
}

mutate(complexValue);
console.log(complexValue); // [4, 3, 2, 1]


let simpleValue = 2;

function fiddle(simpleP) {
  return simpleP === simpleValue;
}

console.log(fiddle(simpleValue)); // true

/*
let simpleValue = 2;

function fiddle(simpleP) {
  console.log(simpleP === simpleValue);
  simpleP += 1;
  console.log(simpleP);
}

fiddle(simpleValue)
console.log(simpleValue);
*/
