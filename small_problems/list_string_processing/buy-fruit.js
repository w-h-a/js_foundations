/*
for buyFruit
1. SET result to empty array
2. SET idx to 0
3. WHILE idx is less than the length of the input array
  - SET rep to the number at index 1 of the current element
  - WHILE rep is greater than 0
    - SET result to include name at index 0 of the current element
    - SET rep to rep minus one
  - RETURN result
4. RETURN result
*/

function buyFruit(groceryListP) {
  return groceryListP.reduce((acc, ele) => {
    let rep = ele[1];
    while (rep > 0) {
      acc.push(ele[0]);
      rep -= 1;
    }
    return acc;
  }, []);
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
