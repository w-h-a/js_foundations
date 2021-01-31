function diamond(numStarsParam, hollowParam = false) {
  let arr = [];

  if (hollowParam) {
    arr.push(' '.repeat((numStarsParam - 1) / 2) + '*');
    for (let idx = 3; idx <= numStarsParam; idx += 2) {
      let current = ' '.repeat((numStarsParam - idx) / 2) + '*' + ' '.repeat(idx - 2) + '*';
      arr.push(current);
    }
  } else {
    for (let idx = 1; idx <= numStarsParam; idx += 2) {
      let current = ' '.repeat((numStarsParam - idx) / 2) + '*'.repeat(idx);
      arr.push(current);
    }
  }

  arr = arr.concat(arr.slice(0, (numStarsParam - 1) / 2).reverse());

  console.log(arr.join('\n'));
}

diamond(1, true);

diamond(3, true);

diamond(5);

diamond(7);

diamond(9, true);

function star(middleParam) {
  let arr = [];

  for (let idx = 1; idx <= (middleParam - 1) / 2; idx += 1) {
    let current = ' '.repeat(idx - 1) + ('*'.concat(' '.repeat((middleParam - 1) / 2 - idx))).repeat(3);
    arr.push(current);
  }

  arr.push('*'.repeat(middleParam));

  arr = arr.concat(arr.slice(0, (middleParam - 1) / 2).reverse());

  console.log(arr.join('\n'));
}

star(7);

star(9);
