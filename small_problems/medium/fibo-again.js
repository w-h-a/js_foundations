// This is in fact how I solved this problem during prep
/*
function fibonacci(place) {
  if (place === 0) {
    return 0;
  } else if (place === 1) {
    return 1;
  } else {
    return fibonacci(place - 1) + fibonacci(place - 2);
  }
}
*/

let lookUp = {
  0: 0,
  1: 1,
};

function fibonacci(place) {
  if (place === 0) {
    return lookUp[place];
  } else if (place === 1) {
    return lookUp[place];
  } else {
    if (lookUp[place - 1] === undefined) {
      lookUp[place - 1] = fibonacci(place - 1);
    }
    lookUp[place] = lookUp[place - 1] + lookUp[place - 2];
    return lookUp[place];
  }
}

/*
function fibonacci(place) {
  if (place === 0) {
    return 0;
  } else if (place === 1) {
    return 1;
  } else {
    let array = [];
    array['length'] = place - 1;
    let reduction = array.fill(0).reduce((acc, _, idx) => {
      acc.push(acc[(idx + 2) - 2] + acc[(idx + 2) - 1]);
      return acc;
    }, [0, 1]);
    return reduction[reduction['length'] - 1];
  }
}
*/

console.log(fibonacci(0));       // 0
console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(7));       // 13
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765
