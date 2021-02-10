Definitions: Scope and Available Variables.

Define 'scope' as follows:

1. Given the code of line length _n_ below

```js
// line 1
// source code
// line n
```

the code from line 1 to line _n_ is the 'global' or 'window' scope.

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

the code from line _i_ to line _i + m + 1_ is the scope of the `localFunction` function. This is also referred to as 'function' scope.

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

Now, if scopes are defined like this, let's talk about which scopes variables are _available in_ (or _accessible in_) rather than say scopes are properties of variables.

4. An occurrence of `z` is _available in_ a scope just in case:
  - if `z` is declared with `var`, either
    - `z` is declared in an outer nested scope and `z` is not also declared in the focal scope itself, or
    - `z` is declared in the focal scope itself; and
  - if `z` is declared with either `let` or `const`, either
    - `z` is declared in an outer nested scope and `z` is not also declared in the focal scope itself, or
    - `z` is declared at the top of the focal scope itself.

So it is inappropriate to speak of 'variable scope' or the 'scope of a variable'. Variables are accessible or available in scopes, but they don't have scopes. If you think variables have scopes, you'd say something circular like the scope of a variable is the set of scopes within which it is accessible. Or you end up saying a scope of a variable is a scope within which it is accessible.
