/*
1. Asks user for bill amount.
2. Asks user for percentage.
3. Gets tip:
    1. If the percentage input is an integer, then tip = bill amount * (percentage / 100)
    2. If the percentage input is a decimal, then tip = bill amount * percentage
4. Get total: tip + bill amount.
5. Return tip and total.
*/

function getTipAndTotal(billParam, percentageParam) {
  let tip;
  if (Number.isInteger(percentageParam)) {
    tip = billParam * (percentageParam / 100);
  } else {
    tip = billParam * percentageParam;
  }
  let total = billParam + tip;
  return `The tip comes to $${tip.toFixed(2)}.\nThe total comes to $${total.toFixed(2)}.`
}

function getUser(inputParam) {
  let rlSync = require('readline-sync');
  return Number(rlSync.question(inputParam));
}

let bill = getUser("How much is the bill?\n");
let percentage = getUser("Percentage of tip?\n");
let result = getTipAndTotal(bill, percentage);
console.log(result);
