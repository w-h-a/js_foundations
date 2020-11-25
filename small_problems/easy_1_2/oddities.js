// Reduce the array to the odd elements.

function oddities(arrayParam) {
  let reducedArray = arrayParam.reduce((acc, ele) => {
    if (arrayParam.indexOf(ele) % 2 === 0) {
      acc.push(ele);
    }
    return acc;
  }, []);
  return reducedArray;
}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

function evenities(arrayParam) {
  let filteredArray = arrayParam.filter(ele => {
    if (arrayParam.indexOf(ele) % 2 !== 0) {
      return ele;
    }
  });
  return filteredArray;
}

console.log(evenities([2, 3, 4, 5, 6])); // logs [3, 5]
console.log(evenities([1, 2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(evenities(["abc", "def"])); // logs ['def']
console.log(evenities([123])); // logs []
console.log(evenities([])); // logs []
