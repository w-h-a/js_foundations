// Given the following data structure
// write some code to return an array containing
// the colors of the fruits and the sizes of the vegetables.
// The sizes should be uppercase, and the colors should be title case.

let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

// My solution

let result = [];

for (let prop in obj) {
  if (obj[prop]['type'] === 'fruit') {
    let colorsArray = obj[prop]['colors'].reduce((acc, ele) => {
      acc.push(ele[0].toUpperCase() + ele.slice(1));
      return acc;
    }, []);
    result.push(colorsArray);
  } else {
    let sizeString = obj[prop]['size'].toUpperCase();
    result.push(sizeString);
  }
}

// Launch's more elegant solution

let capitalize = word => word[0].toUpperCase() + word.slice(1);

let result2 = Object.values(obj).map(attributes => {
  if (attributes['type'] === 'fruit') {
    return attributes['colors'].map(char => capitalize(char));
  } else {
    return attributes['size'].toUpperCase();
  }
});

console.log(obj);
console.log(result);
console.log(result2);

// => [["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]
