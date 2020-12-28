// What is the return value of map in the following code? Why?

console.log(['ant', 'bear'].map(elem => {
  if (elem.length > 3) {
    return elem;
  }
}));
