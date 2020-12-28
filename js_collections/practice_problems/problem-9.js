// Add up all of the ages from the Munster family object:

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

// for/in solution:

let total = 0;

for (let prop in ages) {
  total += ages[prop];
}

console.log(total);

// reduce solution:

let reducedToTotal = Object.values(ages).reduce((acc, ele) => {
  acc += ele;
  return acc;
}, 0);

console.log(reducedToTotal);
