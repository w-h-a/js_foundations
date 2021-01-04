```javascript
console.log([[8, 13, 27], ['apple', 'banana', 'cantaloupe']].map(arr => {
  return arr.filter(item => {
    if (typeof item === 'number') {    // if it's a number
      return item > 13;
    } else {
      return item.length < 6;
    }
  });
}));

// => [ [ 27 ], [ 'apple' ] ]
```

- First
  - action: .map()
  - operated on: [[8, 13, 27], ['apple', 'banana', 'cantaloupe']]
  - side effect: no
  - return value: [[27], ['apple']]
  - used?: no
- Second
  - action: map's callback
  - operated on: [8, 13, 27]; ['apple', 'banana', 'cantaloupe']
  - side effect: no
  - return value: [27] and ['apple']
  - used?: yes
- Third
  - action: filter
  - operated on: [8, 13, 27]; ['apple', 'banana', 'cantaloupe']
  - side effect: no
  - return value: [27] and ['apple']
  - used?: yes
- Fourth
  - action: filter's callback
  - operated on: 8, 13, 27; 'apple', 'banana', 'cantaloupe'
  - side effect: no
  - return value: false, false, true; true, false, false
  - used? yes
- Fifth
  - action: typeof
  - operated on: 8, 13, 27; 'apple', 'banana', 'cantaloupe'
  - side effect: no
  - return value: 'number', 'number', 'number'; 'string', 'string', 'string'
  - used? yes
- Sixth
  - action: ===
  - operated on: 'number' and 'number', 'number' and 'number', 'number' and 'number'; 'string' and 'number', 'string' and 'number', 'string' and 'number'
  - side effect: no
  - return value: true, true, true; false, false, false
  - used?: yes
- Seventh
  - action: >
  - operated on: 8 and 13, 13 and 13, 27 and 13
  - side effect: no
  - return value: false, false, true
  - used? yes
- Eighth
  - action: .length
  - operated on: 'apple', 'banana', 'cantaloupe'
  - side effect: no
  - return value: 5, 6, 10
  - used?: yes
Ninth
  - action: <
  - operated on 5 and 6, 6 and 6, 10 and 6
  - side effect: no
  - return value: true, false, false
  - used? yes
