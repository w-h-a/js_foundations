let tally = {
  two: 0,
  three: 0
}

for (let i = 0; i < 100; i += 1) {
  let a = 2;
  let b = Math.floor(Math.random() * 2);
  a *= b;

  if (a = 2) {
    tally['two'] += 1;
  } else {
    tally['three'] += 1;
  }
}

console.log(tally);
