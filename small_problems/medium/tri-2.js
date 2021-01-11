function triangle(...angParam) {
  if ((angParam.some(ele => ele === 0)) || (sum(angParam) !== 180)) return 'not a tri';

  if (angParam.some(ele => ele === 90)) return 'right';
  if (angParam.every(ele => ele < 90)) return 'acute';
  return 'obtuse';
}

function sum(arrONumsParam) {
  return arrONumsParam.reduce((acc, ele) => acc + ele);
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"
