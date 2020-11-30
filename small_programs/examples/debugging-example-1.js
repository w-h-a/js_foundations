function car(newCar) {
  let make = getMake(newCar);
  let model = getModel(newCar);
  return [make, model];
}

function getMake(newCar) {
  return newCar.split(' ')[0];
}

function getModel(newCar) {
  return newCar.split(' ')[2]; // => undefined
}

let [ make, model ] = car('Ford Mustang');
console.log(make === 'Ford');   // => true
console.log(model[0] === 'M');  // => TypeError: Cannot read property '0' of undefined

[make, model] = car('Mitsubishi Mirage');
console.log(model[0] === 'M');  // => TypeError: Cannot read property '0' of undefined

[make, model] = car('Chevy Malibu');
console.log(model[0] === 'M');  // => TypeError: Cannot read property '0' of undefined

[make, model] = car('Toyota Corolla');
console.log(model[0] === 'M');  // => TypeError: Cannot read property '0' of undefined
