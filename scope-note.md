Definitions: Scope and Available Identifiers.

Define 'scope' as follows:

1. Given the code of line length _n_ below

```js
// line 1
// source code
// line n
```

the code from line 1 to line _n_ is the 'global' scope.

2. Given the code of line length _n_ below

```js
// line 1
// source code
function localFunction() { // line i
  // local code of length m
} // line i + m + 1
// more source code
// line n
```

the code from line _i_ to line _i + m + 1_ is the scope of the `localFunction` function. This is also referred to as 'function' scope. (Note, the above code uses a function declaration, but it could be replaced by either a function expression or arrow function. Note further, that we can say that the the parameter list is a scope and the function's body is a scope nested in that scope.)

3. Given the code of line length _n_ below

```js
// line 1
// source code
{ // line i
  // block code of length k
  function localFunction() { // line i + k + 1
    // local code of length m
  } // line i + k + 1 + m + 1
  // block code of length l
  { // line i + k + 1 + m + 1 + l + 1
    // nested block code of length p
    const a; // line i + k + 1 + m + 1 + l + 1 + p + 1
    let u;  // line i + k + 1 + m + 1 + l + 1 + p + 2
    // nested block code of length q
  } // line i + k + 1 + m + 1 + l + 1 + p + 2 + q + 1
  // block code of length r
} // line i + k + 1 + m + 1 + l + 1 + p + 2 + q + 1 + r + 1
// more source code
// line n
```

the code from line _i_ to line _i + k + 1 + m + 1 + l + 1 + p + 2 + q + 1 + r + 1_ is the scope of the block just in case there is either a `let` or `const` declaration within the block code of length _k_, the block code of length _l_, or the block code of length _r_. (Note, it is not enough that `a` and `u` are declared within the nested block.) This is also referred to as 'block' scope.

Now, if scopes are defined like this, let's talk about the scopes that identifiers are _available in_ (or _accessible in_) rather than say scopes are properties of identifiers, name-bindings, or variables.

4. An occurrence of identifier `z` is _available in_ scope _s_ just in case, either:
  - if `z` is declared with `var`, then either:
    - `z` is declared in an outer nested scope and `z` is not also declared in _s_ itself, or
    - `z` is declared in an inner nested block and `z` is not also declared in _s_ itself, or
    - `z` is declared in _s_ itself; or
  - if `z` is declared with either `let` or `const`, then either:
    - `z` is declared in an outer nested scope and `z` is not also declared in _s_ itself, or
    - `z` is declared at the top of _s_ itself; or
  - if `z` is declared as a function parameter, then either:
    - `z` is declared in an outer nesting function scope and `z` is not also declared in _s_ itself, or
    - _s_ is the function scope for which `z` was declared as a parameter; or
  - if `z` is declared as the name of a function in a function declaration, then, alas, it seems to depend.

Strictly speaking, there is no 'variable scope' or the 'scope of a variable'. Identifiers are accessible or available in scopes, but they don't have scopes. If you must say that an identifier or variable has a scope, let's say it is the scope within which it is declared and leave it at that. Otherwise, we get muddled.

For example, consider:

> A variable's scope determines where it is available in a program. The location where you declare a variable determines its scope. In JavaScript, variables declared with the `let` or `const` keywords have block scope.

A variable's scope does not determine where it is available in a program. Where and how it is declared determines where it is available in a program. However, speaking loosely, we can say that the location where you declare a variable determines its scope. In JavaScript, variables declared with `let` or `const` do _not_ _have_ block scope. If `z` is declared with either `let` or `const`, then `z` is available in scope _s_ just in case `z` is declared in an outer nested scope and `z` is not also declared in _s_ itself, or `z` is declared at the top of _s_ itself. Those are the accessibility rules for identifiers declared with `let` or `const`; do not confuse that with block scope.

> [The] code [below] declares a variable `a` and assigns it to the string `'foo'`. However, we get an error [...] since `let` creates a block-scoped variable; `a` isn't accessible outside the block.

```js
if (1 === 1) {
  let a = 'foo';
}
console.log(a); // ReferenceError: a is not defined
```

> The error tells you that `a` isn't available [...]. In other words, it isn't in scope outside of the `if` block.

We get an error not because `let` creates a block-scoped variable but because `a` isn't accessible outside the block scope within which it was declared with `let`. I wouldn't say "`a` is not 'in scope' outside of the `if` block". I would say "`a` is not available in _the_ scope outside of the `if` block".

> If, on the other hand, you declare the variable outside the `if` block, the variable is available within the block as well as after the block ends.

```js
let a = 'foo';
if (1 === 1) {
  a = 'bar';
}
console.log(a);    // => 'bar'
```

> As we can see, this code prints the string `"bar"` since `a` is accessible inside the block. Thus, we can reassign it to a different value inside the block. In other words, this `a` has a broader scope than the `a` variable in the previous example.

Everything is right here except the last sentence. The variable `a` does not have a broader scope than the `a` variable in the previous. Instead, `a` is available in more scopes than the `a` variable in the previous. Speaking this way causes confusion between scope and the accessibility of identifiers. It especially makes it hard on beginners.

> Constants declared with `const` have the same scope as variables declared with `let`.

No. Identifiers declared with `const` have the same availability as identifiers declared with `let`.

> One of the trickiest things to understand for a beginner is the concept of scope and how it pertains to accessing variables. A variable's scope is the part of the program that can access that variable by name. This is true in all programming languages. Specifically, variable scoping rules describe how and where the language finds previously declared variables.

A variable's scope is not the part of the program that can access that variable by name. Keep scope separate from the availability of identifiers in a program. Variable availability rules describe whether a variable is available in particular scopes of the code. You cannot define scope in terms of where an identifier is available.

> Note that a local variable only comes into existence when you call that function. The mere act of defining a function doesn't create any variables. The function declaration does, however, _define_ the scope of the variables. For example, in the `aFunc` function [below], the function body defines where variable `a`, when created, will be accessible.

```js
function aFunc() {
  let a = 1;
}

aFunc();
console.log(a); // ReferenceError: a is not defined
```

A function declaration does define a scope, but not "the scope of the variables". It defines a scope, period. The `aFunc` does not define where `a` is accessible. The definition of identifier availability does that.

> [W]hen we talk about the scope of a variable, it doesn't matter whether we ever execute the code. For instance, suppose we had the following complete program:

```js
function aFunc() {
  let foo = 1;
}
```

> Though we never invoke `aFunc` and never create the `foo` variable, we still talk of it as in scope within `aFunc`.

The `foo` variable is not 'in scope' within `aFunc`. Instead, the `foo` variable is in a scope defined by declaring `aFunc`.

> [Consider the code below.] Executing `console.log(a)` [...] throws an error since `a` is not in scope in `funcB`. The declaration on line 2 does declare a variable named `a`, but that variable's scope is confined to `funcA`. `funcB `can't see the variable at all [...]. That also means that we could declare a separate `a` variable in `funcB` if we wanted. The two `a` variables would have different local scopes and would also be independent of each other.

```js
function funcA() {
  let a = 'hello';
  console.log(a);
}

function funcB() {
  console.log(a); // ReferenceError: a is not defined
}

funcA();
funcB();
```

Executing `console.log(a)` throws an error since there is no `a` variable in `funcB`, period.

> Nested functions follow the same rules of inner and outer scoped variables. When dealing with nested functions, our usage of what's "outer" or "inner" is going to be relative. We'll switch vocabulary and talk about the "first level," "second level," and "third level."

```js
let a = 1;           // first level variable

function foo() {     // second level
  let b = 2;

  function bar() {   // third level
    let c = 3;
    console.log(a);  // => 1
    console.log(b);  // => 2
    console.log(c);  // => 3
  }

  bar();

  console.log(a);    // => 1
  console.log(b);    // => 2
  console.log(c);    // => ReferenceError
}

foo();
```

> If some of the outputs above surprise you, you should study the code carefully and make sure you understand the rules around inner scope versus outer scope.

There are no rules around inner scope versus outer scope. There are rules about identifier accessibility in scopes.

> Take a look at the following code:

```js
[1, 2, 3].forEach(number => {
  console.log(number);
});
```

> Here, `number` is a parameter that represents a value that the callback function expects when it is invoked. It represents each element as the `forEach` method iterates through the array. Parameters are also local variables and the same scoping rules apply to them.

The last statement is incoherent or false. In particular, the 'scoping rules' fails to refer (what is a scoping rule?), but even if you replace 'scoping rules' with 'rules of availability', the statement is false.

> [...] Constructs like if/else and the for and while loops define new block scopes. The rules for block scopes are identical to those for function scopes.
Outer blocks cannot access variables from inner scopes.
Inner blocks can access variables from outer scopes.
Variables defined in an inner block can shadow variables from outer scopes.

The first statement in this passage is false. Also, there are no 'rules for block scopes'. However, there are rules of identifier accessibility that pertain to identifiers declared with either `let` or `const`.

> Scope describes how and where the language finds and retrieves values from declared variables.

False.

> Defining a function creates new scopes.

True.

> Functions must contain a variable declaration to create a new scope.

False.

> An identifier can either be available or not within scopes.

True.

> Functions and blocks always create new scopes.

False.
