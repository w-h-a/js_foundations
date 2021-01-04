console.log([[[1], [2], [3], [4]], [['a'], ['b'], ['c']]].map(element1 => {
  return element1.forEach(element2 => {
    return element2.filter(element3 => {
      return element3.length > 0;
    });
  });
}));

// => [ undefined, undefined ]
