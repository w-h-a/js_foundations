Definitions: Executable Code and Identifier Presence or Availability.

Executable code is a property of some function object. Executable code is always run within some execution context. When a piece of executable code uses an identifier, the execution context is checked to determine whether the identifier is present. If it is, the identifier is resolved. If it is not, an exception is thrown.

Let's assume we don't declare functions (or classes) inside of blocks. Then an execution environment is composed like this:

```js
fooContext = {
  this: ContextObject,
  BlockStack = [ .. ],
  Environment = { .. },
  EnvironmentChain = [
    fooContext.Environment,
    ...foo.Envelope  
  ]
};
```

If the code of `foo` is in a block of code, JS first checks `fooContext.BlockStack`, from the last entry to the first entry, and second checks `fooContext.EnvironmentChain`, from the first entry to the last entry. If `foo` is not in a block of code, JS just checks `fooContext.EnvironmentChain`. An identifier is available if and only if JS does not throw a `ReferenceError` after all the checks.
