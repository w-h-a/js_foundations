let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

function selectType(objP, selectionP) {
  let selected = {};

  for (let prop in objP) {
    if (objP[prop] === selectionP) {
      selected[prop] = selectionP;
    }
  }

  return selected;
}

console.log(selectType(produce, 'Fruit'));     // => {apple: 'Fruit', pear: 'Fruit'}
console.log(selectType(produce, 'Vegetable')); // => {carrot: 'Vegetable', broccoli: 'Vegetable'}
console.log(selectType(produce, 'Meat'));      // => {}
