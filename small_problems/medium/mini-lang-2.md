Problem:

A stack is a list of values that grows and shrinks. A stack might be implemented as an array that uses .push() and .pop(). 

A stack-and-register programming language is a language that uses a stack of values. Each operation in the language operates on a register, which can be considered the current value. The register is not part of the stack. An operation that requires two values pops the topmost item from the stack, operates on the popped value and the register value, and stores the result back in the register.

This might sound complex, but the behavior is straightforward. Consider an OR operation in a stack-and-register language. It removes the topmost value from the stack, determines whether either the stack value or the register value is true, and stores the result back in the register. For example, if we start with a stack [3, true, 0 (where 0 is the topmost element in the stack) and a register value of [], the OR operation selects the 0 from the stack, and the result of the operation, true (after Boolean coercion), is left in the register. If we do another OR at this point, the true is selected from the stack, and the register is left with the value of true.

Consider an ID operation in the language. It removes the topmost value from the stack, determines whether the stack value and the register value are identical, and stores the result back in the register. For example, if we start with a stack [3, true, [3]] and register value of [3], the ID operation selects the [3] from the stack, and the result of the operation, false, is left in the register. If we do another ID at this point, the true is selected from the stack, and the register is left with the value of false. Finally, consider an EVERY-ID operation in the language. It determines whether each stack value and the register value are identical, and stores the result back in the register. For example, if we start with a stack [3, '3', [3]] and register value of [3], the result of the EVERY-ID operation, false, is left in the register.

The function implements a miniature stack-and-register-based programming language that has the following command (or operations):

x: place any JS value, x, in the register. Does not modify the stack.

PUSH: Push the register value onto the stack. The value is also still in the register.
POP: Remove the topmost item from the stack and place it in the register.
PRINT: Print the boolean version of register value
NOT: !Boolean(register value)

AND: Pop a value off of the stack and check conjunction of Boolean(value) and Boolean(register), storing result in register.
OR: Pop a value off of the stack and check disjunction of Boolean(value) and Boolean(register), storing result in register
CON: Pop a value off of the stack and check disjunction of !Boolean(value) and Boolean(register), storing result in register
BCON: Pop a value off of the stack and check Boolean(value) ? Boolean(register) : !Boolean(register)

ID: Pop a value off of the stack and check value === register, storing result in register
TRU: Pop a value off of the stack and check Boolean(value) === true, storing result in register
OBJECT-EXISTS: Pop a value off of the stack and check whether it is an object with properties, storing result in register
OBJECT-CONCRETE: Pop a value off of the stack and check whether it is an object with the concreteness property, storing result in register
PRIM-EXISTS: Pop a value off of the stack and check whether it is a primitive value other than NaN.

EVERY-AND: Check, for each stack value, (Boolean(value) && Boolean(register)), storing result in register
EVERY-NOT-AND: Check, for each stack value, !(Boolean(value) && Boolean(register)), storing result in register
EVERY-OR: Check, for each stack value, (Boolean(value) || Boolean(register)), storing result in register
EVERY-NOT-OR: Check, for each stack value, !(Boolean(value) || Boolean(register)), storing result in register
EVERY-CON: Check, for each stack value, !Boolean(value) || Boolean(register), storing result in register
EVERY-NOT-CON: Check, for each stack value, !(!Boolean(value) || Boolean(register)), storing result in register
EVERY-BCON: Check, for each stack value, Boolean(value) ? Boolean(register) : !Boolean(register), storing result in register
EVERY-NOT-BCOM: Check, for each stack value, !(Boolean(value) ? Boolean(register) : !Boolean(register)), storing result in register

EVERY-ID: Check, for each stack value, Boolean(value) === Boolean(register), storing result in register
EVERY-NOT-ID: Check, for each stack value, Boolean(value) !== Boolean(register), storing result in register
EVERY-TRU: Check, for each stack value, Boolean(value) === true, storing result in register
EVERY-NOT-TRU: Check, for each stack value, Boolean(value) !== true, storing result in register
EVERY-OBJECT-EXISTS: Check, for each stack value, value is object w/ properties, storing result in register
EVERY-NOT-OBJECT-EXISTS: Check, for each stack value, value is not object w/ properties, storing result in register
EVERY-OBJECT-CONCRETE: Check, for each stack value, value is concrete object, storing result in register
EVERY-NOT-OBJECT-CONCRETE: Check, for each stack value, value is not concrete object, storing result in register
EVERY-PRIM-EXISTS: Check, for each stack value, value is primitive value other than NaN, storing result in register
EVERY-NOT-PRIM-EXISTS: Check, for each stack value, value is not primitive value other than NaN

SOME-AND: Check, there is a stack value s.t. (Boolean(value) && Boolean(register)), storing result in register
SOME-NOT-AND: Check, there is a stack value s.t. !(Boolean(value) && Boolean(register)), storing result in register
SOME-OR: Check, there is a stack value s.t. (Boolean(value) || Boolean(register)), storing result in register
SOME-NOT-OR: Check, there is a stack value s.t. !(Boolean(value) || Boolean(register)), storing result in register
SOME-CON: Check, there is a stack value s.t. (!Boolean(value) || Boolean(register)), storing result in register
SOME-NOT-CON: Check, there is a stack value s.t. !(!Boolean(value) || Boolean(register)), storing result in register
SOME-BCON: Check, there is a stack value s.t. Boolean(value) ? Boolean(register) : !Boolean(register), storing result in register
SOME-NOT-BCOM: Check, there is a stack value s.t. !(Boolean(value) ? Boolean(register): !Boolean(register)), storing result in register

SOME-ID: Check, there is a stack value s.t. Boolean(value) === Boolean(register), storing result in register
SOME-NOT-ID: Check, there is a stack value s.t. Boolean(value) !== Boolean(register), storing result in register
SOME-TRU: Check, there is a stack value s.t. Boolean(value) === true, storing result in register
SOME-NOT-TRU: Check, there is a stack value s.t. Boolean(value) !== true, storing result in register
SOME-OBJECT-EXISTS: Check, there is stack value s.t value is an object w/ properties, storing result in register
SOME-NOT-OBJECT-EXISTS: Check, there is stack value s.t. value is not object w/ properties, storing result in register
SOME-OBJECT-CONCRETE: Check, there is stack value s.t. value is concrete object, storing result in register
SOME-NOT-OBJECT-CONCRETE: Check, there is stack value s.t. value is not concrete object, storing result in register
SOME-PRIM-EXISTS: Check, there is stack value s.t. value is primitive value other than NaN, storing result in register
SOME-NOT-PRIM-EXISTS: Check, there is stack value s.t. value is not primitive value other than NaN

Programs will be supplied to the language function via a string argument. Each of the above operations is self-contained (i.e., operations are not operands of one another) and the syntax of the string argument is that each operation is separated by one whitespace.

Initialize the stack and register to the values [] and 0, respectively. 

- input: string
- output: boolean if, and only if, 'PRINT' is part of the input string

- explicit
  - operations are defined above
  - each operation is self-contained and the syntax of the string argument that each operation is separated by one whitespace
  - initialize the stack and register to [] and 0, respectively

- implicit
  - working with stack with length 0 is permissible

Test Cases (Given):

miniLogLang('PRINT'); // => false
miniLogLang('NOT NOT PRINT') // => false
miniLogLang('5 PUSH 3 AND PRINT'); // => true
miniLogLang('5 PRINT NOT PUSH 3 PRINT NOT OR PRINT'); // => true, true, false
miniLogLang('5 PUSH POP PRINT'); // => true
miniLogLang('5 PUSH PRINT'); // => true
miniLogLang("[0] PUSH {P: 2, K: 'concrete'} PUSH 0 PUSH PRINT EVERY-NOT-OBJECT-EXISTS PRINT POP PRINT EVERY-OBJECT-EXISTS PRINT SOME-OBJECT-CONCRETE PRINT"); // => false, true, false, true, true
miniLogLang('6 PUSH'); // => n/a
miniLogLang('PROOF PRINT'); // => 'impermissible operation', false
miniLogLang("1 OR PRINT PUSH ['b'] PUSH SOME-ID PRINT ['b'] SOME-ID PRINT NOT PRINT"); // => true, true, false, true
miniLogLang('true PUSH true PUSH false NOT PUSH SOME-BCON PRINT SOME-NOT-BCON PRINT POP NOT PUSH SOME-NOT-BCON PRINT EVERY-NOT-BCON PRINT'); // => true, false, true, false
miniLogLang('undefined PUSH null PUSH EVERY-NOT-TRUE PRINT true EVERY-NOT-AND PRINT SOME-AND NOT PRINT'); // => true, true, true
miniLogLang('false PUSH true PUSH ID PRINT TRU NOT PRINT'); // => true, true
miniLogLang('false PUSH +0 PUSH NaN PUSH NaN PUSH ID PRINT SOME-PRIM-EXISTS PRINT CON PRINT EVERY-PRIM-EXISTS PRINT'); // => false, true, true, true
miniLogLang('EVERY-OBJECT-EXISTS PRINT EVERY-PRIM-EXISTS PRINT'); // => true, true
miniLogLang('SOME-OBJECT-EXISTS PRINT SOME-PRIM-EXISTS PRINT'); // => false, false
