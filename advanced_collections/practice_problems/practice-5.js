// Compute and display the total age of the male members of the family.

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

console.log(Object.keys(munsters).reduce((acc, ele) => {
  if (munsters[ele]['gender'] === 'male') {
    acc += munsters[ele]['age'];
  }
  return acc;
}, 0));
