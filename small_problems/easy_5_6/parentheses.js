/*
I did not think of this one as "easy" at all. Pseudocode 15-16 or
JS code 34-35 is crucial, and I didn't come up w/ it myself. I realized
something like that needed to be added only after peeking at solutions.

START

1.  SET arrayRep to split string
2.  SET reduced variable to object with two arrays (arrayOOpens, arrayOClosed)
3.  WHILE there are elements in arrayRep
      IF the element is strictly identical to '('
        SET arrayOOpens to include it
      ELSE IF element is strictly identical to ')'
        SET arrayOClosed to include it
      IF length of arrayOClosed > arrayOOpens
        SET reduced variable to include 'closingBeforeOpening' : true
      RETURN reduced
4.  IF reduced variable's 'closingBeforeOpening' is true
      RETURN false
    ELSE
      RETURN whether arrayOClosed length is strictly identical to arrayOOpens length

END
*/

function isBalanced(stringP) {
  let reducedToTwoArrays = stringP.split('').reduce((acc, ele) => {
    if (ele === '(') {
      acc['arrayOOpens'].push(ele);
    } else if (ele === ')') {
      acc['arrayOClosed'].push(ele);
    }

    if (acc['arrayOOpens']['length'] < acc['arrayOClosed']['length']) {
      acc['closingBeforeOpening'] = true;
    }

    return acc;
  }, {arrayOOpens: [], arrayOClosed: []});

  if (reducedToTwoArrays['closingBeforeOpening']) {
    return false;
  } else {
    return reducedToTwoArrays['arrayOOpens']['length'] === reducedToTwoArrays['arrayOClosed']['length'];
  }
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);
