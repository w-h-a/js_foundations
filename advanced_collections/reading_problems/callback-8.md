```javascript
console.log([[[1], [2], [3], [4]], [['a'], ['b'], ['c']]].map(element1 => {
  return element1.forEach(element2 => {
    return element2.filter(element3 => {
      return element3.length > 0;
    });
  });
}));

// => [ undefined, undefined ]
```

- first
  - action: map
  - operated on: [[[1], [2], [3], [4]], [['a'], ['b'], ['c']]]
  - side effects: no
  - return: [undefined, undefined]
  - used: no
- second
  - action: map's callback
  - operated on: [[1], [2], [3], [4]] and [['a'], ['b'], ['c']]
  - side effects: no
  - return: undefined and undefined
  - used: yes
- third
  - action: forEach
  - operated on: [[1], [2], [3], [4]] and [['a'], ['b'], ['c']]
  - side effects: no
  - return: undefined
  - used: yes
- fourth
  - action: forEach's callback
  - operated on: [1], [2], [3], [4] and ['a'], ['b'], ['c']
  - side effects: no
  - return: [], [], [], [] and ['a'], ['b'], ['c']
  - used: no
- fifth
  - action: filter
  - operated on: [1], [2], [3], [4] and ['a'], ['b'], ['c']
  - side effects: no
  - return: [], [], [], [] and ['a'], ['b'], ['c']
  - used: no
- sixth
  - action: filter's callback
  - operated on: 1, 2, 3, 4 and 'a', 'b', 'c'
  - side effects: no
  - return: false x4; true x3
  - used: yes (by filter)
- seventh
  - action: .length
  - operated (indirectly) on: 1, 2, 3, 4 and 'a', 'b', 'c'
  - side effect: no
  - return: undefined, undefined, undefined, undefined; 1, 1, 1
  - used?: yes
- 8th
  - action: >
  - operated on: undefined and 0 x4; 1 and 0 x3
  - side effect: no
  - return: false x4; true x3
  - used?: yes (by filter's callback)
