/*
For Function dms:

START

1.  SET the degree parameter to a permissible number.
      (see function pseudocode below)
2.  SET stringRep to string representation of input degree parameter
3.  SET arrayRep to array representation of input floating point.
4.  PUSH the 0th element of arrayRep to an array called "resultArray"
5.  IF resultArray has 3 elements
      GET clean version of resultArray
      RETURN joined resultArray
6.  IF arrayRep does not only have one element
      SET newString to '0.' plus the 1st element of arrayRep
      SET newNumber to number version of newString
      SET result to newNumber * 60
      RETURN value that results from feeding result and resultArray back
        into function (i.e., return to step 1)
    ELSE
      GET clean version of resultArray
      RETURN clean version of resultArray

END

For Function getPermissibleVersion:

START

IF degree parameter is greater than 360
  SET the param to the param minus MAX
  RETURN value that results from feeding param back into function
    (i.e., return to START)
ELSE IF degree param is less than 0
  SET the param to param plus MAX
  RETURN value that results from feeding param back into function
ELSE
  RETURN degree param (it's now permissible)

END
*/

const CONVERT = 60;
const MAX = 360;
const MIN = 0;

function cleanUpResultArrayP(resultArrayP) {
  resultArrayP[0] += '°';

  if (resultArrayP[1] === undefined) {
    resultArrayP[1] = "00'";
  } else {
    resultArrayP[1] = addZeroes(resultArrayP[1]) + "'";
  }
  if (resultArrayP[2] === undefined) {
    resultArrayP[2] = '00"';
  } else {
    resultArrayP[2] = addZeroes(resultArrayP[2]) + '"';
  }
}

function addZeroes(stringP) {
  return Number(stringP) < 10 ? ('0' + stringP) : stringP;
}

function getPermissibleVersion(degreeP) {
  if (degreeP > MAX) {
    degreeP -= MAX;
    return getPermissibleVersion(degreeP);
  } else if (degreeP < MIN) {
    degreeP += MAX;
    return getPermissibleVersion(degreeP);
  } else {
    return degreeP;
  }
}

function dms(degreeP, resultArrayP = [], arrayLengthP = 3) {
  degreeP = getPermissibleVersion(degreeP);

  let stringRep = String(degreeP);
  let arrayRep = stringRep.split('.');

  resultArrayP.push(arrayRep[0]);

  if (resultArrayP['length'] === arrayLengthP) {
    cleanUpResultArrayP(resultArrayP);

    return resultArrayP.join('');
  }

  if (arrayRep[1] !== undefined) {
    let newString = '0.' + arrayRep[1];
    let newNumber = Number(newString);
    let result = newNumber * CONVERT;
    return dms(result, resultArrayP);
  } else {
    cleanUpResultArrayP(resultArrayP);

    return resultArrayP.join('');
  }
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"
console.log(dms(-1));   // 359°00'00"
console.log(dms(400));  // 40°00'00"
console.log(dms(-40));  // 320°00'00"
console.log(dms(-420)); // 300°00'00"
