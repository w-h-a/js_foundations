// Count the number of lower-case 't'
// characters in each of the following strings:

let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

function findLowerT(stringP) {
  let array = stringP.split('');
  let reduce = array.reduce((acc, ele) => {
    if (ele === 't') {
      acc += 1;
    }
    return acc;
  }, 0);
  console.log(reduce);
}

findLowerT(statement1);
findLowerT(statement2);

// Launch's preferred "one-liners" (not clear whether they prefer simple to readable):

console.log(statement1.split('').filter(char => char === 't').length);
console.log(statement2.split('').filter(char => char === 't').length);
