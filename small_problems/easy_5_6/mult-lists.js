function multiplyList(firstArrayP, secondArrayP) {
  return firstArrayP.reduce((acc, _, idx) => {
    acc.push(firstArrayP[idx] * secondArrayP[idx]);
    return acc;
  }, []);
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]
