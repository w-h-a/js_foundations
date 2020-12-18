/*
afterMidnight
START

1.  SET arrayRep to split string at ":"
2.  SET hourNum to Number(0th element of arrayRep)
3.  SET minuteNum to Number(1st element of arrayRep)
4.  RETURN hourNum * 60 + minuteNumber

END

beforeMidnight
START

1.  SET arrayRep to split string at ":"
2.  SET hourNum to Number(0th element of arrayRep)
3.  SET minuteNum to Numer(1st element of arrayRep)
4.  RETURN (24 * 60) - (hourNum * 60 + minuteNumber)

END
*/

const CONVERT = 60;
const HOURS = 24;
const MAX = HOURS * CONVERT;

function setUpCalculation(stringP) {
  let arrayRep = stringP.split(':');
  let hoursNum = Number(arrayRep[0]);
  let minuteNum = Number(arrayRep[1]);
  return hoursNum * CONVERT + minuteNum;
}

function translateMaxToZero(resultP) {
  return resultP === MAX ? 0 : resultP;
}

function afterMidnight(stringP) {
  let result = setUpCalculation(stringP);
  result = translateMaxToZero(result);
  return result;
}

function beforeMidnight(stringP) {
  let result = MAX - setUpCalculation(stringP);
  result = translateMaxToZero(result);
  return result;
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);

console.log(afterMidnight("23:57") === 1437);
console.log(beforeMidnight("23:57") === 3);
console.log(afterMidnight("00:03") === 3);
console.log(beforeMidnight("00:03") === 1437);
console.log(afterMidnight("13:20") === 800);
console.log(beforeMidnight("13:20") === 640);
console.log(afterMidnight("01:29") === 89);
console.log(beforeMidnight("01:29") === 1351);
