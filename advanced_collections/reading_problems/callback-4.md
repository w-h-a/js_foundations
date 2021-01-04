```javascript
let myArr = [[18, 7], [3, 12]].forEach(arr => {
  return arr.map(num => {
    if (num > 5) {
      return console.log(num);
    }
  });
});

console.log(myArr);
```

variable declaration and assignment	n/a	None	undefined (variable declaration always evaluates to undefined)	No

- First
  - action: variable declaration and assignment
  - on: n/a
  - side effect: yes
  - return value: undefined
  - used?: no
- Second
  - action: .forEach() is called
  - performed on: [[18, 7], [3, 12]]
  - side effect: yes
  - return value: undefined
  - is used?: yes
- Third
  - action: callback (of .forEach()) is called
  - performed on: [18, 7] and [3, 12]
  - side effect: yes
  - return value: [undefined, undefined] and [undefined, undefined]
  - is used?: no
- Fourth
  - action: .map() is called
  - on: [18, 7] and [3, 12]
  - side effect: yes
  - return value: [undefined, undefined] and [undefined, undefined]
  - used: yes (for return value of callback)
- Fifth
  - action: callback (of .map()) is called
  - on: 18 and 7; 3 and 12
  - side effect: yes
  - return value: undefined and undefined; undefined and undefined
  - used?: yes (for return value of .map())
- Sixth
  - action: >
  - on: 18 and 5, 7 and 5, 3 and 5, 12 and 5
  - side effect: no
  - return value: boolean
  - used? yes
- Seventh
  - action: console.log is called
  - on: 18, 7, and 12
  - side effect: yes
  - return value: undefined
  - used?: yes (for return value of map's callback)
