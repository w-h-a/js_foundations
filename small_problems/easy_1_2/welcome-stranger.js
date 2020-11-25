/*
1. From arrayParam, create a string where each element in the array is separated
    by a space. Call this 'createdString'.
2. Return `Hello, ${createdString}! Nice to have a ${objectParam['title']} ${objectParam['occupation']} around.`
*/

function greetings(arrayParam, objectParam) {
  let createdString = arrayParam.join(' ');
  return `Hello, ${createdString}! Nice to have a ${objectParam['title']} ${objectParam['occupation']} around.`
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.
