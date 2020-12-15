// Show two different ways to put "Four score and " in front of
// the string.

let famousWords = "seven years ago...";

let fullWords = famousWords.split(' ');
fullWords.unshift("Four", "score", "and");

console.log(fullWords.join(' '));
console.log(`Four score and ${famousWords}`);
console.log("Four score and " + famousWords);
