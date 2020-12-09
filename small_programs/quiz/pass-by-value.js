function foo(a) {
  return a + 1;
}

foo(5);


function foo(a) {
  return [a, a, a];
}

foo(5);


function foo() {
  return [1, 2, 3];
}

foo();


let foo = 5;
let bar = foo;


function foo(a) {
  return 6;
}

foo([1, 2, 3]);
