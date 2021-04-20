Definitions: Contexts and Available Identifiers (Scope Chain).

Execution contexts are:

1. Given the code of line length _n_ below

```js
// line 1
// source code
// line n
```

the code from line 1 to line _n_ is the 'globalExecutionContext'.

2. Given the code of line length _n_ below

```js
// line 1
// source code
function localFunction() { // line i
  // local code of length m
}; // line i + m + 1
// more source code
// line n
```

the code from line _i_ to line _i + m + 1_ is the execution context of the `localFunction` function.

3. Given the code of line length _n_ below

```js
// line 1
// source code
class Class { // line i
  // local code of length m
} // line i + m + 1
// more source code
// line n
```

The code from line _i_ to line _i + m + 1_ is the execution context of `Class`.

Execution contexts look like this internally:

```js
fooContext = {
  VariableObject: {},
  Scope: [
    ...[executionContext.VariableObject],
    ...foo.[[Scope]]
  ],
  this: thisBinding
}
```

where, upon creation:

```js
foo.[[Scope]] = [
  barContext.VariableObject
  .
  .
  .
  globalContext.VariableObject
];
```

where `foo` is nested in `bar`, and so on.

Now, if contexts are defined like this, a value of an identifier is _available in_ (or _accessible in_) certain contexts. The scope chain mechanism for identifier accessibility works like this:

5. value of "`z`" is _available in_ context _c_ just in case, either:
  - if "`z`" is declared with `var`, then either:
    - "`z`" is declared in an outer nested context and "`z`" is not also declared in _c_ itself, or
    - "`z`" is declared and initialized in _c_ itself prior to the point of the access attempt;
  - if "`z`" is declared with either `let` or `const`, then either:
    - "`z`" is declared in an outer nested context and "`z`" is not also declared in _c_ itself, or
    - "`z`" is declared and initialized in _c_ itself prior to the point of the access attempt _and_ if "`z`" is declared and initialized within a block of _c_ then, the point of access must be within the block;
  - if "`z`" is declared as a function parameter, then either:
    - "`z`" is declared in an outer nesting function (parameter) context and "`z`" is not also declared in _c_ itself, or
    - _c_ is the function (parameter) context for which "`z`" was declared and initialized as a parameter; or
  - if "`z`" is declared as the name of a function in a function declaration, then, alas, it seems to depend.
  - if "`z`" is declared with `class`, then either:
    - "`z`" is declared in an outer nested context and "`z`" is not also declared in _c_ itself, or
    - "`z`" is declared and initialized in _c_ itself prior to the point of the access attempt.
