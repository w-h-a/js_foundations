```javascript
console.log([[1, 2], [3, 4]].map(arr => {
  return arr.map(num => num * 2);
}));
```

- First
  - action: .map() is called
  - operated on: [[1, 2], [3, 4]]
  - side effect: no
  - return value: [[2, 4], [6, 8]]
  - is used?: no
- Second
  - action: callback (for first .map invocation) is called
  - operated on: [1, 2] and [3, 4]
  - side effect: no
  - return value: [2, 4] and [6, 8]
  - is used?: yes
- Third
  - action: .map() is called
  - operated on: [1, 2] and [3, 4]
  - side effect: no
  - return value: [2, 4] and [6, 8]
  - is used?: yes
- Fourth
  - action: callback (for the second .map invocation) is called
  - operated on: 1 and 2; 3 and 4
  - side effect: no
  - return value: 2 and 4; 6 and 8
  - is used?: yes
- Fifth
  - action: *
  - operated on: 1 and 2; 2 and 2; 3 and 2; 4 and 2
  - side effect: no
  - return value: 2; 4; 6; 8
  - is used?: yes
