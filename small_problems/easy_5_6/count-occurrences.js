/*
START

GET countTable
  SET countTable to empty dictionary-like object
  WHILE there are elements in the input array
    IF there is no element in countTable,
      SET add one to countTable's new element
    ELSE
      SET countTable's element to itself plus one
  RETURN countTable
SET arrayOKeys to the keys of countTable
WHILE there are elements in arrayOKeys
  PRINT element and element count of countTable

END
*/

let vehicles = [
  'car', 'car', 'truck', 'car', 'SUV', 'suv', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck'
];

function cleanUpArray(arrayOStringsP) {
  let cleanArray = arrayOStringsP.reduce((acc, ele) => {
    acc.push(ele.toLowerCase());
    return acc;
  }, []);
  return cleanArray;
}

function countOccurrences(arrayOStringsP) {
  let countTable = {};

  arrayOStringsP.forEach(element => {
    if (countTable[element] === undefined) {
      countTable[element] = 1;
    } else {
      countTable[element] += 1;
    }
  });

  return countTable;
}

function printOccurrences(arrayOStringsP) {
  let cleanArray = cleanUpArray(arrayOStringsP);

  let countTable = countOccurrences(cleanArray);

  let arrayOKeys = Object.keys(countTable);

  arrayOKeys.forEach(element => {
    console.log(`${element} => ${countTable[element]}`);
  });
}

printOccurrences(vehicles);
