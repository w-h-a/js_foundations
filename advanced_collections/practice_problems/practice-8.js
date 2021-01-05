// Using the forEach method,
// write some code to output all and only vowels from the strings in the arrays.
// Don't use a for or while loop.

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

let vowels = 'aeiou';

Object.values(obj).forEach(prop => {
  prop.forEach(ele => {
    ele.split('').forEach(char => {
      if (vowels.includes(char)) {
        console.log(char);
      }
    })
  })
});
