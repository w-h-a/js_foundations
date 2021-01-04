```javascript
console.log([[1, 2], [3, 4]].map(arr => {
  console.log(arr[0]);
  return arr[0];
}));
```

- First
  - action: map is called
  - performed on: [[1, 2], [3, 4]]
  - side-effect: yes
  - return value: [1, 3]
  - is return used?: no
- Second
  - action: callback is called
  - performed on: [1, 2] and [3, 4]
  - side-effect: yes
  - return value: 1 and 3
  - is used?: yes
- Third
  - action: console.log() is called
  - performed on: arr[0]
  - side-effect: yes
  - return value: undefined
  - is used?: no
- Fourth (once for console.log() and once for callback)
  - action: arr[0]
  - performed on: [1, 2] and [3, 4]
  - side-effect: no
  - return value: 1 and 3
  - is used?: yes
