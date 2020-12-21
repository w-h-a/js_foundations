while (true) {
  let number = Math.floor(10 * Math.random());
  if (number === 5) {
    console.log('Exiting...');
    break;
  }

  console.log(number);
}
