function union(firstArrayP, secondArrayP) {
  let withRepeats = firstArrayP.concat(secondArrayP);

  return withRepeats.reduce((acc, ele) => {
    if (!(acc.includes(ele))) {
      acc.push(ele);
    }
    return acc;
  }, []);
}

console.log(union([1, 3, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
