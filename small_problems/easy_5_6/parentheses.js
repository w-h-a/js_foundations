/*
START

1.  SET balance variable to 0
2.  SET arrayRep to split string
3.  SET reduced variable to true
4.  WHILE there are elements in arrayRep
      IF the element is strictly identical to '('
        SET balance to balance plus 1
      ELSE IF element is strictly identical to ')'
        SET balance to balance minus 1
      IF balance is less than 0
        SET reduced to false
        RETURN reduced
      RETURN reduced
5.   RETURN reduced and whether balance is strictly identical to 0

END
*/

function isBalanced(stringP) {
  let balance = 0;
  let reduced = stringP.split('').reduce((acc, ele) => {
    if (ele === '(') {
      balance += 1;
    } else if (ele === ')') {
      balance -= 1;
    }
    if (balance < 0) {
      acc = false;
      return acc;
    }
    return acc;
  }, true);
  return reduced && balance === 0;
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);
