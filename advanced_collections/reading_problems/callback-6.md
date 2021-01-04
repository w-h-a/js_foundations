```javascript
console.log(
  [{ a: 'ant', b: 'elephant' }, { c: 'cat', d: 'dog' }].filter(object => {
    return Object.keys(object).every(key => object[key][0] === key);
  })
);

// => [ { c: 'cat', d: 'dog' } ]
```

- First
  - action: .filter() is called
  - operated on: [{ a: 'ant', b: 'elephant' }, { c: 'cat', d: 'dog' }]
  - side effect: no
  - return value: [ { c: 'cat', d: 'dog' } ]
  - used?: no
- Second
  - action: callback (for .filter()) is called
  - operated on: { a: 'ant', b: 'elephant' }, { c: 'cat', d: 'dog' }
  - side effect: no
  - return value: false and true
  - used?: yes (used by .filter())
- Third
  - action: Object.keys() is called
  - operated on: { a: 'ant', b: 'elephant' }, { c: 'cat', d: 'dog' }
  - side effect: no
  - return value: ['a', 'b'] and ['c', 'd']
  - used? yes
- Fourth
  - action: .every() is called
  - operated on: ['a', 'b'] and ['c', 'd']
  - side effect: no
  - return value: false and true
  - used?: yes (used by .filter() callback)
Fifth
  - action: callback (for .every()) is called
  - operated on: 'a', 'b'; 'c', 'd'
  - side effect: no
  - return value: true, false; true, true
  - used?: yes (used by .every())
Sixth
  - action: [key]
  - operated on: { a: 'ant', b: 'elephant' }, { c: 'cat', d: 'dog' }
  - side effect: no
  - return value: 'ant', 'elephant'; 'cat', 'dog'
  - used?: yes
Seventh
  - action: [0]
  - operated on: 'ant', 'elephant'; 'cat', 'dog'
  - side effect: nop
  - return value: 'a', 'e'; 'c', 'd'
  - used?: yes
Seventh
  - action: ===
  - operated on: 'a' and 'a', 'e' and 'b'; 'c' and 'c', 'd' and 'd'
  - side effect: no
  - return value: true, false; true, true
  - used?: yes (by .every() callback)
