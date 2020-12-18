/*
START

1.  GET permissible input (0, 1440), recursively
2.  GET hours
      SET stringRep to string version of permissible input divided by 60
      SET arrayRep to string split at the decimal (if any)
      RETURN arrayRep
3.  SET resultArray to include 0th element of arrayRep (our hours)
4.  IF 1st element of arrayRep is not undefined
      GET minutes
        SET decimalString to '0.' plus 1st element of arrayRep
        SET result variable to number version of decimalString times 60
        RETURN (rounded, string) result
      SET resultArray to include (rounded, string) result (our minutes)
      GET cleaned up version of resultArray
      RETURN/PRINT joined (by ':') resultArray
    ELSE
      GET cleaned up version of resultArray
      RETURN/PRINT joined (by ':') resultArray

END
*/

const CONVERT = 60;
const MAX = 1440;
const MIN = 0;

function getPermissibleVersion(numP) {
  if (numP > MAX) {
    numP -= MAX;
    return getPermissibleVersion(numP);
  } else if (numP < MIN) {
    numP += MAX;
    return getPermissibleVersion(numP);
  } else {
    return numP;
  }
}

function getHours(numP) {
  let stringRep = String(numP / CONVERT);
  let arrayRep = stringRep.split('.');
  return arrayRep;
}

function getMinutes(arrayP) {
  let decimalString = '0.' + arrayP[1];
  let result = Number(decimalString) * CONVERT;
  return result.toFixed();
}

function cleanUpResultArray(resultArrayP) {
  resultArrayP[0] = addZeroes(resultArrayP[0]);

  if (resultArrayP[1] === undefined) {
    resultArrayP[1] = "00";
  } else {
    resultArrayP[1] = addZeroes(resultArrayP[1]);
  }
}

function addZeroes(stringP) {
  return Number(stringP) < 10 ? ('0' + stringP) : stringP;
}

function timeOfDay(numP) {
  let resultArray = [];

  numP = getPermissibleVersion(numP);

  let arrayRep = getHours(numP);
  resultArray.push(arrayRep[0]);

  if (arrayRep[1] !== undefined) {
    let result = getMinutes(arrayRep);
    resultArray.push(result);
    cleanUpResultArray(resultArray);
    return resultArray.join(':');
  } else {
    cleanUpResultArray(resultArray);
    return resultArray.join(':');
  }
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");
