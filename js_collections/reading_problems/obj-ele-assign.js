let obj = {
  apple: 'Produce',
  carrot: 'Produce',
  pear: 'Produce',
  broccoli: 'Produce',
  steak: 5
}

for (let prop in obj) {
  obj[prop] += 1;
}

console.log(obj);

obj['chicken'] += 1;

console.log(obj);
