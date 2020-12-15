// Return a new string that swaps the case of all of the letters.

let munstersDescription = "The Munsters are creepy and spooky.";
// `tHE mUNSTERS ARE CREEPY AND SPOOKY.`

let array = munstersDescription.split('');

let reduced = array.reduce((acc, ele) => {
  if (ele === ele.toLowerCase()) {
    acc.push(ele.toUpperCase());
  } else {
    acc.push(ele.toLowerCase());
  }
  return acc;
}, []);

console.log(reduced.join(''));
