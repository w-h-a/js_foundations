function foo(array, func) {
  let newArray = [];

  for (let index = 0; index < array.length; index += 1) {
    newArray[index] = func(array[index]);
  }

  return newArray;
}

let arr = [1, 2, 3, 4];

let f = (p) => {
  if (p < 3) {
    return p;
  } else {
    return 
  }
}

console.log(foo(arr, f));
