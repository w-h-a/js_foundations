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

1. SET stack to []
2. SET register to 0
3. SET array to split string by whitespace
4. WHILE there are elements in array
  - GET and PERFORM operation
5. PRINT register
