function foo(s) {
  return s + s;
}

foo("abc");


function foo(s) {
  return { qux: s };
}

foo("abc");


function foo() {
  return { qux: "xyzzy" };
}

foo();


let foo = { qux: "xyzzy" };
let bar = foo;


function foo(obj) {
  return "def";
}

foo({ qux: "xyzzy" });
