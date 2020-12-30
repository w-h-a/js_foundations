Problem:

Function returns true or false based on whether or not an inventory item is available. As before, the function takes two arguments: an inventory item and a list of transactions. The function should return true only if the sum of the quantity values of the item's transactions is greater than zero. Notice that there is a movement property in each transaction object. A movement value of 'out' will decrease the item's quantity.

- input: item (whoops!), transactions
- output: boolean

- explicit
  - the return value is true only if the sum of the quantity values of the item's transactions is greater than zero.
  - 'out' decreases the item's quantity

- implicit
  - the return value is true if the sum of the quantity values of the item's transactions is greater than zero
  - 'in' increases the item's quantity
  - item is just a number
  - transactions is an array of objects with
    - id property (unique number, which is apparently comparable to item)
    - movement (w/ exclusive and exhaustive values 'in' or 'out')
    - quantity (unique number)

Test Cases (Given):

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

isItemAvailable(101, transactions);     // false
isItemAvailable(103, transactions);     // false
isItemAvailable(105, transactions);     // true

Pseudocode:

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
