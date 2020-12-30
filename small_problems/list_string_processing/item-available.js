/*
for transactionsFor
1. SET result to empty array
2. WHILE there are elements in transactions array
  - IF the id property of the element is identical to inventoryItem
    - SET result to include that element
3. RETURN result

for isItemAvailable
1. GET transactions for item
2. SET accumulator to [0]
3. SET idx to 0
4. WHILE idx is less than the length of the array returned from step 1
  - SET toBeAdded to undefined
  - IF movement property of element is 'out'
    - SET toBeAdded to negative quantity property of element
    ELSE
    - SET toBeAdded to quantity property of element
  - SET accumulator element at index 0 to itself plus toBeAdded
  - SET idx to idx plus 1
  - RETURN accumulator
5. SET result to true
6. WHILE there are elements in accumulator
  - IF accumulator element is less than 1
    - SET result to false
  - RETURN result
7. RETURN result
*/


let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

function transactionsFor(inventoryItemP, transactionsP) {
  return transactionsP.filter(ele => ele['id'] === inventoryItemP);
}

function isItemAvailable(itemP, transactionsP) {
  return transactionsFor(itemP, transactionsP).reduce((acc, obj) => {
    let toBeAdded = obj['movement'] === 'out' ? -obj['quantity'] : obj['quantity'];
    acc[0] += toBeAdded;
    return acc;
  }, [0]).reduce((result, ele) => {
    if (ele < 1) {
      result = false;
    }
    return result;
  }, true);
}

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true
