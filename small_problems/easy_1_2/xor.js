/*
Most straightforward solution:
If either argument is truthy and not both are, then return true, false otherwise.
*/

function xor(firstBooleanyParam, secondBooleanyParam) {
  if ((firstBooleanyParam || secondBooleanyParam) && !(firstBooleanyParam && secondBooleanyParam)) {
    return true;
  } else {
    return false;
  }
}

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);
