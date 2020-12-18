/*
Initially I did this one with splice and pop.
But I really wanted to try to do this with shift, unshift, and pop.
That lead me to really appreciate spread syntax.

START

1.  SET shifts variable to 0 (this tracks the number of times we need a shift)
2.  WHILE shifts is less than length of array
      SET tracker variable to empty array (this keeps track of shifts)
      IF shifts > 0
        SET pushes variable to 0 (this tracks the number of times we need a push)
        WHILE pushes is less than shifts
          SET tracker to include shifted elements from array
          SET pushes to pushes plus 1
        SET array to include, from 0th index, (unpacked) elements from tracker
            followed by popped off final element of array
      ELSE
        SET array to include, from 0th index, popped off final element of array
      SET shifts variable to shifts plus 1
3.  RETURN array

END
*/

function reverse(arrayP) {
  for (let shifts = 0; shifts < arrayP['length']; shifts += 1) {
    let tracker = [];

    if (shifts > 0) {
      for (let pushes = 0; pushes < shifts; pushes += 1) {
        tracker.push(arrayP.shift());
      }
      arrayP.unshift(...tracker, arrayP.pop());
    } else {
      arrayP.unshift(arrayP.pop());
    }
  }
  return arrayP;
}

let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true
