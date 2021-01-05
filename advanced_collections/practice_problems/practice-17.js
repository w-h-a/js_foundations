// A UUID is a type of identifier often used to uniquely identify items,
// even when some of those items were created on a different
// server or by a different application.
// That is, without any synchronization, two or more computer systems can
// create new items and label them with a UUID with no significant risk
// of stepping on each other's toes.
// It accomplishes this feat through massive randomization.
// The number of possible UUID values is approximately 3.4 X 10E38,
// which is a huge number.
// The chance of a conflict is vanishingly small.

// Each UUID consists of 32 hexadecimal characters
// (the digits 0-9 and the letters a-f) represented as a string.
// The value is typically broken into
// 5 sections in an 8-4-4-4-12 pattern,
// e.g., 'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'.

// Write a function that takes no parameters and returns a UUID.

// Functions 'take' arguments, not parameters. Functions 'have' parameters, not
// arguments.

// I had no idea what Q17 was asking. I peaked at the solution, and it seems
// the solution provided also fails to implement the appropriate function. It seems
// that what is being asked is the following:

// Write a function that takes no arguments and returns a string. The string should be
// such that it contains:
// eight randomly chosen characters from a special set of characters followed by a dash ('-')
// four randomly chosen characters from the special set followed by a dash
// four randomly chosen characters from the special set followed by a dash
// four randomly chosen characters from the special set followed by a dash
// twelve randomly chosen characters from the special set.
// The special set of characters is 0-9, a-f.
// Here's an example of the kind of thing your function should return:
// 'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'

let specialSet = '0123456789abcdef';

let selection = [8, 4, 4, 4, 12];

function randomString() {
  return selection.reduce((acc, ele) => {
    let stringToPush = '';
    for (let i = 0; i < ele; i += 1) {
      let draw = Math.floor(Math.random() * specialSet.split('')['length']);
      stringToPush += specialSet[draw];
    }
    acc.push(stringToPush);
    return acc;
  }, []).join('-');
}

console.log(randomString());
