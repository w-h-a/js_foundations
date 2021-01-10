Problem:

A stack is a list of values that grows and shrinks. A stack might be implemented as an array that uses .push() and .pop(). 

A stack-and-register programming language is a language that uses a stack of values. Each operation in the language operates on a register, which can be considered the current value. The register is not part of the stack. An operation that requires two values pops the topmost item from the stack, operates on the popped value and the register value, and stores the result back in the register.

This might sound complex, but the behavior is straightforward. Consider a MULT operation in a stack-and-register language. It removes the topmost value from the stack, multiplies the stack value with the register value, and stores the result back in the register. For example, if we start with a stack [3, 6, 4] (where 4 is the topmost element in the stack) and a register value of 7, the MULT operation selects the 4 from the stack, and the result of the multiplication, 28, is left in the register. If we do another MULT at this point, the 6 is selected from the stack, and the register is left with the value of 168.

Write a function that implements a miniature stack-and-register-based programming language that has the following commands (also called 'operations' or 'tokens'):

n: Place a number value, n, in the register. Does not modify the stack.
PUSH: Push the register value onto the stack. The value is also still in the register.
ADD: Pop a value from the stack and add it to the register value, storing the result in the register.
SUB: Pop a value from the stack and subtract it from the register value, storing the result in the register
MULT: Pop a value from the stack and multiply it by the register value, storing the result in the register
DIV: Pop a value from the stack and divide the register value by the stack value, storing the _integer_ result in the register
REM: Pop a value from the stack and get the register value remainder the stack value, storing the _integer_ result in the register
POP: Remove the topmost item from the stack and place it in the register.
PRINT: Print the register value

All operations are _integer_ operations. Programs will be supplied to your language function via a string argument. Each of the above operations is self-contained (i.e., operations are not operands of one another) and the syntax of the string argument is that each operation is separated by one whitespace. Your function may assume that all arguments are permissible programs---i.e., they will not do anything like pop a non-existent value from the stack, and they won't contain any unknown operations.

Initialize the stack and register to the values [] and 0, respectively. 

- input: string
- output: a number if, and only if, part of the input string is 'PRINT'

- explicit
  - operations are defined above
  - all operations are integer operations.
  - each operation is self-contained and the syntax of the string argument that each operation is separated by one whitespace (this is explicit now that I've added it into the problem statement; it was merely implicit in the original problem)
  - all arguments are permissible
  - initialize the stack and register to [] and 0, respectively

- implicit
  - doesn't seem to be any now

Test Cases (Given):

miniLang('PRINT') // => 0
miniLang('5 PUSH 3 MULT PRINT') // => 15
miniLang('5 PRINT PUSH 3 PRINT ADD PRINT') // => 5, 3, 8
miniLang('5 PUSH POP PRINT') // => 5
miniLang('5 PUSH PRINT') // => 5
miniLang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT') // 5, 10, 4, 7
miniLang('3 PUSH PUSH 7 DIV MULT PRINT') // => 6
miniLang('4 PUSH PUSH 7 REM MULT PRINT') // => 12
miniLang('-3 PUSH 5 SUB PRINT') // => 8
miniLang('6 PUSH') // => n/a

Pseudocode:

for miniLang
1. SET stack to []
2. SET register to 0
3. SET array to split string by whitespace
4. WHILE there are elements in array
  - IF number version of element is not NaN
    - SET register to number version of element
    ELSE IF set of permissible operations does not include element
    - PRINT 'impermissible operation'
    ELSE IF element is 'PUSH'
    - SET stack to include number of register
    ELSE IF element is 'POP'
    - SET register to include last element of stack
    ELSE IF element is 'PRINT'
    - PRINT register to console
    ELSE
    - SET register to RETURN value of performMath function
5. IF register is NaN
  - PRINT 'stack had length of 0'

for performMath
1. IF element is 'ADD'
  - SET register to register plus last element of stack
  ELSE IF element is 'SUB'
  - SET register to register minus last element of stack
  ELSE IF element is 'MULT'
  - SET register to register times last element of stack
  ELSE IF element is 'DIV'
  - SET register to truncated: register divided by last element of stack
  ELSE IF element is 'REM'
  - SET register to truncated: register remainder last element of stack
2. RETURN register


=====================================================================================


Test Cases :

miniLogLang('PRINT'); // => false
miniLogLang('NOT NOT PRINT') // => false
miniLogLang('5 PUSH 3 AND PRINT'); // => true
miniLogLang('5 PRINT NOT PUSH 3 PRINT NOT OR PRINT'); // => true, true, false
miniLogLang('5 PUSH POP PRINT'); // => true
miniLogLang('5 PUSH PRINT'); // => true
miniLogLang("[0] PUSH {P: 2, K: 'concrete'} PUSH 0 PUSH PRINT EVERY-NOT-OBJECT-EXISTS PRINT POP PRINT EVERY-OBJECT-EXISTS PRINT SOME-OBJECT-CONCRETE PRINT"); // => false, true, false, true, true
miniLogLang('6 PUSH'); // => n/a
miniLogLang('PROOF PRINT'); // => true
miniLogLang("1 OR PRINT PUSH ['b'] PUSH SOME-ID PRINT ['b'] SOME-ID PRINT NOT PRINT"); // => true, true, false, true
miniLogLang('true PUSH true PUSH false NOT PUSH SOME-BCON PRINT SOME-NOT-BCON PRINT POP NOT PUSH SOME-NOT-BCON PRINT EVERY-NOT-BCON PRINT'); // => true, false, true, false
miniLogLang('undefined PUSH null PUSH EVERY-NOT-TRUE PRINT true EVERY-NOT-AND PRINT SOME-AND NOT PRINT'); // => true, true, true
miniLogLang('false PUSH true PUSH ID PRINT TRU NOT PRINT'); // => true, true
miniLogLang('false PUSH +0 PUSH NaN PUSH NaN PUSH ID PRINT SOME-PRIM-EXISTS PRINT CON PRINT EVERY-PRIM-EXISTS PRINT'); // => false, true, true, true
miniLogLang('EVERY-OBJECT-EXISTS PRINT EVERY-PRIM-EXISTS PRINT'); // => true, true
miniLogLang('SOME-OBJECT-EXISTS PRINT SOME-PRIM-EXISTS PRINT'); // => false, false

Pseudocode:

for miniLogLang
1. SET stack to array of length 0
2. SET register to 0
3. SET array to split string by whitespace
4. WHILE there are elements in array
  - IF set of operations does not include element
    - SET register to RETURN value of parseRegister function
  ELSE
    - IF element is 'PUSH'
      - SET stack to include value of register
      ELSE IF element is 'POP'
      - SET register to element of stack popped off
      ELSE IF element is 'PRINT'
      - PRINT Boolean(register)
      ELSE IF element is 'NOT'
      - SET register to negation of register
      ELSE
      - SET register to RETURN value of performLogic function

for parseRegister
1. IF element is identical to 'NaN'
  - SET register to NaN
  ELSE IF number version of element is not NaN
  - SET register to number version of element
  ELSE IF element is identical to 'undefined'
  - SET register to undefined
  ELSE IF element is identical to 'null'
  - SET register to null
  ELSE IF element is identical to 'true'
  - SET register to true
  ELSE IF element is identical to 'false'
  - SET register to false
  ELSE IF element includes { or [
  - SET register to JSON.parse(element)
  ELSE
  - SET register to string
2. RETURN register

for performLogic
1. IF element is 'AND'
  - SET stack to remove last element
  - SET register to Boolean(stack element) && Boolean(register)
  ELSE IF element is 'OR'
  - SET stack to remove last element
  - SET register to Boolean(stack element) || Boolean(register)
  ELSE IF element is 'CON'
  - SET stack to remove last element
  - SET register to !Boolean(stack element) || Boolean(register)
  ELSE IF element is 'BCON'
  - SET stack to remove last element
  - SET register to Boolean(stack element) ? Boolean(register) : !Boolean(register)
  ELSE IF element is 'ID'
  - SET stack to remove last element
  - SET register to stack value === register
  ELSE IF element is 'TRU'
  - SET stack to remove last element
  - SET register to Boolean(stack element) === true
  ELSE IF element is 'OBJECT-EXISTS'
  - SET stack to remove last element
  - SET register to result of whether stack value is an object with properties
  ELSE IF element is 'OBJECT-CONCRETE'
  - SET stack to remove last element
  - SET register to result of whether stack value is an object with concreteness property
  ELSE IF element is 'PRIM-EXISTS'
  - SET stack to remove last element
  - SET register to result of whether stack value is a primitive value and not NaN
  ELSE IF element is 'EVERY-AND'
  - SET register to result of stack.every(ele => (Boolean(ele) && Boolean(register)))
  ELSE IF element is 'EVERY-NOT-AND'
  - SET register to result of stack.every(ele => !(Boolean(ele) && Boolean(register)))
  ELSE IF element is 'EVERY-OR'
  - SET register to result of stack.every(ele => (Boolean(ele) || Boolean(register)))
  ELSE IF element is 'EVERY-NOT-OR'
  - SET register to result of stack.every(ele => !(Boolean(ele) || Boolean(register)))
  ELSE IF element is 'EVERY-CON'
  - SET register to result of stack.every(ele => (!Boolean(ele) || Boolean(register)))
  ELSE IF element is 'EVERY-NOT-CON'
  - SET register to result of stack.every(ele => !(!Boolean(ele) || Boolean(register)))
  ELSE IF element is 'EVERY-BCON'
  - SET register to result of stack.every(ele => (Boolean(ele) ? Boolean(register) : !Boolean(register)))
  ELSE IF element is 'EVERY-NOT-BCON'
  - SET register to result of stack.every(ele => !(Boolean(ele) ? Boolean(register) : !Boolean(register)))
  ELSE IF element is 'EVERY-ID'
  - SET register to result of stack.every(ele => ele === register)
  ELSE IF element is 'EVERY-NOT-ID'
  - SET register to result of stack.every(ele => ele !== register)
  ELSE IF element is 'EVERY-TRU'
  - SET register to result of stack.every(ele => Boolean(ele) === true)
  ELSE IF element is 'EVERY-NOT-TRU'
  - SET register to result of stack.every(ele => Boolean(ele) !== true)
  ELSE IF element is 'EVERY-OBJECT-EXISTS'
  - SET register to result of stack.every(ele => Object.keys(ele)['length'] > 0)
  ELSE IF element is 'EVERY-NOT-OBJECT-EXISTS'
  - SET register to result of stack.every(ele => Object.keys(ele)['length'] === 0)
  ELSE IF element is 'EVERY-OBJECT-CONCRETE'
  - SET register to result of stack.every(ele => Object.value(ele).includes('concrete'))
  ELSE IF element is 'EVERY-NOT-OBJECT-CONCRETE'
  - SET register to result of stack.every(ele => !Object.values(ele).includes('concrete'))
  ELSE IF element is 'EVERY-PRIM-EXISTS'
  - SET register to result of stack.every(ele => (typeof ele !== 'object' && !Number.isNaN(ele)))
  ELSE IF element is 'EVERY-NOT-PRIM-EXISTS'
  - SET register to result of stack.every(ele => !(typeof ele !== 'object' && !Number.isNaN(ele)))
  ELSE IF element is 'SOME-AND'
  - SET register to result of stack.some(ele => (Boolean(ele) && Boolean(register)))
  ELSE IF element is 'SOME-NOT-AND'
  - SET register to result of stack.some(ele => !(Boolean(ele) && Boolean(register)))
  ELSE IF element is 'SOME-OR'
  - SET register to result of stack.some(ele => (Boolean(ele) || Boolean(register)))
  ELSE IF element is 'SOME-NOT-OR'
  - SET register to result of stack.some(ele => !(Boolean(ele) || Boolean(register)))
  ELSE IF element is 'SOME-CON'
  - SET register to result of stack.some(ele => (!Boolean(ele) || Boolean(register)))
  ELSE IF element is 'SOME-NOT-CON'
  - SET register to result of stack.some(ele => !(!Boolean(ele) || Boolean(register)))
  ELSE IF element is 'SOME-BCON'
  - SET register to result of stack.some(ele => (Boolean(ele) ? Boolean(register) : !Boolean(register)))
  ELSE IF element is 'SOME-NOT-BCON'
  - SET register to result of stack.some(ele => !(Boolean(ele) ? Boolean(register) : !Boolean(register)))
  ELSE IF element is 'SOME-ID'
  - SET register to result of stack.some(ele => ele === register)
  ELSE IF element is 'SOME-NOT-ID'
  - SET register to result of stack.some(ele => ele !== register)
  ELSE IF element is 'SOME-TRU'
  - SET register to result of stack.some(ele => Boolean(ele) === true)
  ELSE IF element is 'SOME-NOT-TRU'
  - SET register to result of stack.some(ele => Boolean(ele) !== true)
  ELSE IF element is 'SOME-OBJECT-EXISTS'
  - SET register to result of stack.some(ele => Object.keys(ele)['length'] > 0)
  ELSE IF element is 'SOME-NOT-OBJECT-EXISTS'
  - SET register to result of stack.some(ele => Object.keys(ele)['length'] === 0)
  ELSE IF element is 'SOME-OBJECT-CONCRETE'
  - SET register to result of stack.some(ele => Object.value(ele).includes('concrete'))
  ELSE IF element is 'SOME-NOT-OBJECT-CONCRETE'
  - SET register to result of stack.some(ele => !Object.values(ele).includes('concrete'))
  ELSE IF element is 'SOME-PRIM-EXISTS'
  - SET register to result of stack.some(ele => (typeof ele !== 'object' && !Number.isNaN(ele)))
  ELSE IF element is 'SOME-NOT-PRIM-EXISTS'
  - SET register to result of stack.some(ele => !(typeof ele !== 'object' && !Number.isNaN(ele)))
2. RETURN register
