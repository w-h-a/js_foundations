/*
Had to look up some MDN material; so, my pseudocode looks too much like JS

1. SET count to 0
2. WHILE there are months of the year
  - SET newDate to new Date('${Month} 13, ${Year}')
  - SET unlucky to newDate.getDay()
  - IF unlucky is identical to 5
    - SET count to count plus 1
  - RETURN count
3. RETURN count
*/

let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function fridayThe13ths(yearParam) {
  return months.reduce((acc, _, idx) => {
    let newDate = new Date(`${months[idx]} 13, ${yearParam}`);
    if (newDate.getDay() === 5) acc += 1;
    return acc;
  }, 0);
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2
console.log(fridayThe13ths(2020));      // 2
console.log(fridayThe13ths(2021));      // 1
console.log(fridayThe13ths(2026));      // 3
console.log(fridayThe13ths(2040));      // 3
