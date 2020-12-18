/*
START

1.  SET arrayRep to string that is split at the space
2.  SET last element of arrayRep to include comma after
3.  PRINT last element of arrayRep plus space plus other elements of arrayRep

END
*/

function cWSwappigans(stringP) {
  let arrayRep = stringP.split(' ');
  arrayRep[arrayRep['length'] - 1] += ',';
  return `${arrayRep.pop()} ${arrayRep.join(' ')}`;
}

console.log(cWSwappigans('Joe Roberts'));    // "Roberts, Joe"

console.log(cWSwappigans('Karl Oskar Henriksson Ragvals'));    // "Ragvals, Karl Oskar Henriksson"
