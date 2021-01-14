/*
IF the input array is length < 2
  - RETURN joined array
  ELSE IF the input array is length === 2
  - RETURN "num1 ${word} num2"
  ELSE
  - RETURN joined array except for last item + delimiter + word + last item
*/

function joinWith(arrP, delimP = ', ', wordP = 'or') {
  if (arrP['length'] < 2) return arrP.join('');
  if (arrP['length'] === 2) return `${arrP[0]} ${wordP} ${arrP[1]}`;
  return `${arrP.slice(0, arrP['length'] - 1).join(delimP)}${delimP}${wordP} ${arrP[arrP['length'] - 1]}`;
}

console.log(joinWith([1, 2, 3]));               // => "1, 2, or 3"
console.log(joinWith([1, 2, 3], '; '));         // => "1; 2; or 3"
console.log(joinWith([1, 2, 3], ', ', 'and'));  // => "1, 2, and 3"
console.log(joinWith([]));                      // => ""
console.log(joinWith([5]));                     // => "5"
console.log(joinWith([1, 2]));                  // => "1 or 2"
