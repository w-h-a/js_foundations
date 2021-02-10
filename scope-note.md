Definitions: Scope and Available Variables.

Define 'scope' as follows:

1. Suppose we make the main function of JS source code explicit (even though we can think of it as implicit). Then the code

```js
function main() {
  // all of the source code
}
```

is the scope the `main` function. This is also referred to as the 'global' scope.

2. Given the code of line length _n_ below

```js
function main() { // line 0
  // potential source code // more lines
  function localFunction() { // line i
    // local code of length m
  } // line i + m
  // more source code
} // line n + 1
```

the code from line _i_ to line _i + m_ is the scope of the `localFunction` function. This is also referred to as 'function' scope.

3. Given the code of line length _n_ below

```js
function main() { // line 0
  // potential source code // more lines
  { // line i
    // block code of length k
    function localFunction() { // line i + k
      // local code of length m
    } // line i + k + m
    // block code of length l
    { // line i + k + m + l
      // nested block code of length p
      const a; // line i + k + m + l + p
      let u;  // line i + k + m + l + p + 1
      // nested block code of length q
    } // line i + k + m + l + p + 1 + q
    // block code of length r
  } // line i + k + m + l + p + 1 + q + r
  // more source code
} // line n + 1
```

the code from line _i_ to line _i + k + m + l + p + 1 + q + r_ is the scope of the block just in case there is either a `let` or `const` declaration within block code of length _k_, block code of length _l_, or block code of length _r_. (Note, it is not enough that `a` and `u` are declared within the nested block.) This is also referred to as 'block' scope.

Now if scopes are defined like this, let's talk about which scopes variables are _available in_ (or _accessible in_) rather than say scopes are properties of variables.

4. An occurrence of `z` within a scope is _available in_ the focal scope just in case:
  - if `z` is declared with `var`,
    - either `z` is declared in an outer nested scope and `z` is not also declared in the focal scope itself, or
    - `z` is declared in the focal scope itself; and
  - if `z` is declared with either `let` or `const`,
    - either `z` is declared in an outer nested scope and `z` is not also declared in the focal scope itself, or
    - `z` is declared at the top of the focal scope itself.
