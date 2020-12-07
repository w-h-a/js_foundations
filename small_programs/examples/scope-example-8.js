let socrates = {
  p: 'person',
  r: 'rational'
}

function shadow() {
  function socrates() {
    let i = 0
    while (i < 2) {
      console.log(socrates); // [Function: socrates] x2
      i += 1;
    }
  }
  socrates();
}

shadow();
