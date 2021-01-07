/*
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
*/

let operations = ['PUSH', 'ADD', 'SUB', 'MULT', 'DIV', 'REM', 'POP', 'PRINT'];

function performMath(accParam, eleParam, stackParam) {
  if (eleParam === 'ADD') {
    accParam += stackParam.pop();
  } else if (eleParam === 'SUB') {
    accParam -= stackParam.pop();
  } else if (eleParam === 'MULT') {
    accParam *= stackParam.pop();
  } else if (eleParam === 'DIV') {
    accParam = Math.trunc(accParam / stackParam.pop());
  } else if (eleParam === 'REM') {
    accParam = Math.trunc(accParam % stackParam.pop());
  }
  return accParam;
}

function miniLang(commandLineParam) {
  let stack = [];
  let register = commandLineParam.split(' ').reduce((acc, ele) => {
    if (!Number.isNaN(Number(ele))) {
      acc = Number(ele);
    } else if (!operations.includes(ele)) {
      console.log('impermissible operation');
    } else if (ele === 'PUSH') {
      stack.push(acc);
    } else if (ele === 'POP') {
      acc = stack.pop();
    } else if (ele === 'PRINT') {
      console.log(acc);
    } else {
      acc = performMath(acc, ele, stack);
    }
    return acc;
  }, 0);
  if (Number.isNaN(register)) console.log('stack had length of 0');
}

miniLang('PRINT'); // => 0
miniLang('5 PUSH 3 MULT PRINT'); // => 15
miniLang('5 PRINT PUSH 3 PRINT ADD PRINT'); // => 5, 3, 8
miniLang('5 PUSH POP PRINT'); // => 5
miniLang('5 PUSH PRINT'); // => 5
miniLang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT'); // 5, 10, 4, 7
miniLang('3 PUSH PUSH 7 DIV MULT PRINT'); // => 6
miniLang('4 PUSH PUSH 7 REM MULT PRINT'); // => 12
miniLang('-3 PUSH 5 SUB PRINT'); // => 8
miniLang('6 PUSH'); // => n/a
miniLang('WIGGLE PRINT'); // => 'impermissible operation', 0
miniLang('2 ADD PRINT'); // => NaN, 'stack had length of 0'
