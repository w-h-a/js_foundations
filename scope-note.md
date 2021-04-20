Definitions: Executable Code and Available Identifiers.

Executable regions (locations) of code can be:

1. global
2. function-based (including classes)
3. block-based

Now, if regions of executable code regions (locations) are defined like this, a value of an identifier is _available in_ (or _accessible in_) certain executable code regions (locations). The mechanism for determining such availability is related to the environment frame chain, which is part of any execution context. The environment frame chain is an ordered list of environment frames, one for each nested executable code region (location). Each environment frame contains identifiers associated with values.

4. If "`z`" is declared with `var`, then the value of "`z`" is available in executable code region (location) _r_ just in case either:
  - "`z`" is declared in an outer nested executable code region (location) and not also declared in "`z`",
  - "`z`" is declared in an inner nested block, or
  - "`z`" is declared and initialized in _r_ itself prior to the point of the access attempt.

5. If "`z`" is declared as a parameter, or with `let`, `const`, or `class`, then the value of "`z`" is available in executable code region (location) _r_ just in case either:
  - "`z`" is declared in an outer nested executable code region (location) and not also declared in "`z`", or
  - "`z`" is declared and initialized in _r_ itself prior to the point of the access attempt.

There are some discrepancies with identifiers that are `function` declared.
