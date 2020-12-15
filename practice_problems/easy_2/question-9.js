// Suppose we have a 40-character width to work with.
// Suppose further that we wish to center the title below in that
// 40-character width.
// You need to pad the title on the left with some spaces.
// You can determine the correct value by
// Math.floor((40 - title['length']) / 2)
// Now use the .padStart() method to pad the title

let title = "Flintstone Family Members";

let padding = Math.floor((40 - title.length) / 2);

console.log(title.padStart(padding + title.length));
