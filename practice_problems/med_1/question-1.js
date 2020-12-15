// For this practice problem,
// write a program that outputs
// The Flintstones Rock!
//  The Flintstones Rock!
//   The Flintstones Rock!
//    The Flintstones Rock!
//     The Flintstones Rock!
//      The Flintstones Rock!
//       The Flintstones Rock!
//        The Flintstones Rock!
//         The Flintstones Rock!
//          The Flintstones Rock!
// where each line is indented 1 space to the right of the line above it.

let padding = '';

while (padding['length'] < 10) {
  console.log(padding + "The Flintstones Rock!");
  padding += ' ';
}
