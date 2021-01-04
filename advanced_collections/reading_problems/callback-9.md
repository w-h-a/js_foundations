```javascript
console.log([[[1, 2], [3, 4]], [5, 6]].map(arr => {
  return arr.map(elem => {
    if (typeof elem === 'number') { // it's a number
      return elem + 1;
    } else {                  // it's an array
      return elem.map(number => number + 1);
    }
  });
}));

// => [ [ [ 2, 3 ], [ 4, 5 ] ], [ 6, 7 ] ]
```

- first
  - action: map
  - operated on: [[[1, 2], [3, 4]], [5, 6]] and its callback
  - side effects: none
  - return: [[[2, 3], [4, 5]], [6, 7]]
  - used: no
- second
  - action: map's callback
  - operated on: [[1, 2], [3, 4]] and [5, 6]
  - side effects: none
  - return: [[2, 3], [4, 5]]; [6, 7]
  - used: yes
- third
  - action: map
  - operated on: [[1, 2], [3, 4]] and its callback; [5, 6] and its callback
  - side effects: none
  - return: [[2, 3], [4, 5]]; [6, 7]
  - used: yes
- fourth
  - action: map's callback
  - operated on: [1, 2], [3, 4]; 5, 6
  - side effect: none
  - return: [2, 3], [4, 5]; 6, 7
  - used?: yes
- fifth
  - action: typeof
  - operated on: [1, 2], [3, 4]; 5, 6
  - side effect: no
  - return: 'array', 'array'; 'number', 'number'
  - used?: yes
- sixth
  - action: ===
  - operated on: 'array' and 'number', 'array' and 'number'; 'number' and 'number', 'number' and 'number'
  - side effect: no
  - return: false, false; true, true
  - used?: yes
- seventh
  - action: +
  - operated on: 5 and 1, 6 and 1
  - side effects: no
  - return: 6 and 7
  - used?: yes
- 8th
  - action: map
  - operated on: [1, 2] and its callback, [3, 4] and its callback
  - side effects: no
  - return: [2, 3], [4, 5]
  - used?: yes
- 9th
  - action: map's callback
  - operated on: 1, 2; 3, 4
  - side effects: no
  - return: 2, 3; 4, 5
  - used?: yes
- 10th
  - action: +
  - operated on: 1 and 1, 2 and 1; 3 and 1, 4 and 1
  - side effects: no
  - return: 2, 3; 4, 5
  - used?: yes
