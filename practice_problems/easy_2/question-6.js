// Take the resulting flintstones array and turn it in to a
// non-nested array.

let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

console.log(flintstones.flat());
