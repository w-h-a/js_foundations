Problem:

Function takes two arguments, inventoryItem and transactions, and returns an array containing only the transactions for the specified inventoryItem.

- input: inventoryItem (whoops!), transactions
- output: array

- explicit
  - the output array contains all and only transactions for inventoryItem
  - that's about it

- implicit
  - inventoryItem is just a number
  - transactions is an array of objects with
    - id property (unique number that are apparently comparable to inventoryItem)
    - movement property (w/ exclusive and exhaustive values 'in' or 'out')
    - quantity property (unique number)
  - output array contains all and only objects with id identical to inventoryItem

Test Cases (given):

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

transactionsFor(101, transactions);
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]

Pseudocode:

for transactionsFor
1. SET result to empty array
2. WHILE there are elements in transactions array
  - IF the id property of the element is identical to inventoryItem
    - SET result to include that element
3. RETURN result
