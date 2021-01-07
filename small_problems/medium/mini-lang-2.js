/*
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
*/

let operations = [
  'PUSH', 'POP', 'PRINT', 'NOT',
  'AND', 'OR', 'CON', 'BCON',
  'ID', 'TRU', 'OBJECT-EXISTS', 'OBJECT-CONCRETE', 'PRIM-EXISTS',
  'EVERY-AND', 'EVERY-NOT-AND', 'EVERY-OR', 'EVERY-NOT-OR',
  'EVERY-CON', 'EVERY-NOT-CON', 'EVERY-BCON', 'EVERY-NOT-BCON',
  'EVERY-ID', 'EVERY-NOT-ID', 'EVERY-TRU', 'EVERY-NOT-TRU',
  'EVERY-OBJECT-EXISTS', 'EVERY-NOT-OBJECT-EXISTS',
  'EVERY-OBJECT-CONCRETE', 'EVERY-NOT-OBJECT-CONCRETE',
  'EVERY-PRIM-EXISTS', 'EVERY-NOT-PRIM-EXISTS',
  'SOME-AND', 'SOME-NOT-AND', 'SOME-OR', 'SOME-NOT-OR',
  'SOME-CON', 'SOME-NOT-CON', 'SOME-BCON', 'SOME-NOT-BCON',
  'SOME-ID', 'SOME-NOT-ID', 'SOME-TRU', 'SOME-NOT-TRU',
  'SOME-OBJECT-EXISTS', 'SOME-NOT-OBJECT-EXISTS',
  'SOME-OBJECT-CONCRETE', 'SOME-NOT-OBJECT-CONCRETE',
  'SOME-PRIM-EXISTS', 'SOME-NOT-PRIM-EXISTS'
];

function performLogic(accParam, eleParam, stackParam) {
  if (eleParam === 'AND') {
    accParam = Boolean(stackParam.pop()) && Boolean(accParam);
  } else if (eleParam === 'OR') {
    accParam = Boolean(stackParam.pop()) || Boolean(accParam);
  } else if (eleParam === 'CON') {
    accParam = Boolean(!stackParam.pop()) || Boolean(accParam);
  } else if (eleParam === 'BCON') {
    accParam = Boolean(stackParam.pop()) ? Boolean(accParam) : Boolean(!accParam);
  } else if (eleParam === 'ID') {
    accParam = stackParam.pop() === accParam;
  } else if (eleParam === 'TRU') {
    accParam = Boolean(stackParam.pop()) === true;
  } else if (eleParam === 'OBJECT-EXISTS') {
    let value = stackParam.pop();
    accParam = (typeof value === 'object' && Object.keys(value)['length'] > 0);
  } else if (eleParam === 'OBJECT-CONCRETE') {
    let value = stackParam.pop();
    accParam = (typeof value === 'object' && !Object.values(value).includes('concrete'));
  } else if (eleParam === 'PRIM-EXISTS') {
    let value = stackParam.pop();
    accParam = (typeof value !== 'object' && Number.isNaN(value));
  } else if (eleParam === 'EVERY-AND') {
    accParam = stackParam.every(ele => (Boolean(ele) && Boolean(accParam)));
  } else if (eleParam === 'EVERY-NOT-AND') {
    accParam = stackParam.every(ele => !(Boolean(ele) && Boolean(accParam)));
  } else if (eleParam === 'EVERY-OR') {
    accParam = stackParam.every(ele => (Boolean(ele) || Boolean(accParam)));
  } else if (eleParam === 'EVERY-NOT-OR') {
    accParam = stackParam.every(ele => !(Boolean(ele) || Boolean(accParam)));
  } else if (eleParam === 'EVERY-CON') {
    accParam = stackParam.every(ele => (Boolean(!ele) || Boolean(accParam)));
  } else if (eleParam === 'EVERY-NOT-CON') {
    accParam = stackParam.every(ele => !(Boolean(!ele) || Boolean(accParam)));
  } else if (eleParam === 'EVERY-BCON') {
    accParam = stackParam.every(ele => (Boolean(ele) ? Boolean(accParam) : Boolean(!accParam)));
  } else if (eleParam === 'EVERY-NOT-BCON') {
    accParam = stackParam.every(ele => !(Boolean(ele) ? Boolean(accParam) : Boolean(!accParam)));
  } else if (eleParam === 'EVERY-ID') {
    accParam = stackParam.every(ele => ele === accParam);
  } else if (eleParam === 'EVERY-NOT-ID') {
    accParam = stackParam.every(ele => ele !== accParam);
  } else if (eleParam === 'EVERY-TRU') {
    accParam = stackParam.every(ele => Boolean(ele) === true);
  } else if (eleParam === 'EVERY-NOT-TRU') {
    accParam = stackParam.every(ele => Boolean(ele) !== true);
  } else if (eleParam === 'EVERY-OBJECT-EXISTS') {
    accParam = stackParam.every(ele => Object.keys(ele)['length'] > 0);
  } else if (eleParam === 'EVERY-NOT-OBJECT-EXISTS') {
    accParam = stackParam.every(ele => Object.keys(ele)['length'] === 0);
  } else if (eleParam === 'EVERY-OBJECT-CONCRETE') {
    accParam = stackParam.every(ele => Object.values(ele).includes('concrete'));
  } else if (eleParam === 'EVERY-NOT-OBJECT-CONCRETE') {
    accParam = stackParam.every(ele => !Object.values(ele).includes('concrete'));
  } else if (eleParam === 'EVERY-PRIM-EXISTS') {
    accParam = stackParam.every(ele => (typeof ele !== 'object' && !Number.isNaN(ele)));
  } else if (eleParam === 'EVERY-NOT-PRIM-EXISTS') {
    accParam = stackParam.every(ele => !(typeof ele !== 'object' && !Number.isNaN(ele)));
  } else if (eleParam === 'SOME-AND') {
    accParam = stackParam.some(ele => (Boolean(ele) && Boolean(accParam)));
  } else if (eleParam === 'SOME-NOT-AND') {
    accParam = stackParam.some(ele => !(Boolean(ele) && Boolean(accParam)));
  } else if (eleParam === 'SOME-OR') {
    accParam = stackParam.some(ele => (Boolean(ele) || Boolean(accParam)));
  } else if (eleParam === 'SOME-NOT-OR') {
    accParam = stackParam.some(ele => !(Boolean(ele) || Boolean(accParam)));
  } else if (eleParam === 'SOME-CON') {
    accParam = stackParam.some(ele => (Boolean(!ele) || Boolean(accParam)));
  } else if (eleParam === 'SOME-NOT-CON') {
    accParam = stackParam.some(ele => !(Boolean(!ele) || Boolean(accParam)));
  } else if (eleParam === 'SOME-BCON') {
    accParam = stackParam.some(ele => (Boolean(ele) ? Boolean(accParam) : Boolean(!accParam)));
  } else if (eleParam === 'SOME-NOT-BCON') {
    accParam = stackParam.some(ele => !(Boolean(ele) ? Boolean(accParam) : Boolean(!accParam)));
  } else if (eleParam === 'SOME-ID') {
    accParam = stackParam.some(ele => ele === accParam);
  } else if (eleParam === 'SOME-NOT-ID') {
    accParam = stackParam.some(ele => ele !== accParam);
  } else if (eleParam === 'SOME-TRU') {
    accParam = stackParam.some(ele => Boolean(ele) === true);
  } else if (eleParam === 'SOME-NOT-TRU') {
    accParam = stackParam.some(ele => Boolean(ele) !== true);
  } else if (eleParam === 'SOME-OBJECT-EXISTS') {
    accParam = stackParam.some(ele => Object.keys(ele)['length'] > 0);
  } else if (eleParam === 'SOME-NOT-OBJECT-EXISTS') {
    accParam = stackParam.some(ele => Object.keys(ele)['length'] === 0);
  } else if (eleParam === 'SOME-OBJECT-CONCRETE') {
    accParam = stackParam.some(ele => Object.values(ele).includes('concrete'));
  } else if (eleParam === 'SOME-NOT-OBJECT-CONCRETE') {
    accParam = stackParam.some(ele => !Object.values(ele).includes('concrete'));
  } else if (eleParam === 'SOME-PRIM-EXISTS') {
    accParam = stackParam.some(ele => (typeof ele !== 'object' && !Number.isNaN(ele)));
  } else if (eleParam === 'SOME-NOT-PRIM-EXISTS') {
    accParam = stackParam.some(ele => !(typeof ele !== 'object' && !Number.isNaN(ele)));
  }
  return accParam;
}

function parseRegister(accParam, eleParam) {
  if (eleParam === 'NaN') {
    accParam = NaN;
  } else if (!Number.isNaN(Number(eleParam))) {
    accParam = Number(eleParam);
  } else if (eleParam === 'undefined') {
    accParam = undefined;
  } else if (eleParam === 'null') {
    accParam = null;
  } else if (eleParam === 'true') {
    accParam = true;
  } else if (eleParam === 'false') {
    accParam = false;
  } else if (eleParam.includes('{') || eleParam.includes('[')) {
    accParam = JSON.parse(eleParam);
  } else {
    accParam = eleParam;
  }
  return accParam;
}

function miniLogLang(commandLineParam) {
  let stack = [];
  commandLineParam.split(' ').reduce((acc, ele) => {
    if (!operations.includes(ele)) {
      acc = parseRegister(acc, ele);
    }

    if (ele === 'PUSH') {
      stack.push(acc);
    } else if (ele === 'POP') {
      acc = stack.pop();
    } else if (ele === 'PRINT') {
      console.log(Boolean(acc));
    } else if (ele === 'NOT') {
      acc = !acc;
    } else {
      acc = performLogic(acc, ele, stack);
    }

    return acc;
  }, 0);
}

miniLogLang('PRINT'); // => false
miniLogLang('NOT NOT PRINT'); // => false
miniLogLang('5 PUSH 3 AND PRINT'); // => true
miniLogLang('5 PRINT NOT PUSH 3 PRINT NOT OR PRINT'); // => true, true, false
miniLogLang('5 PUSH POP PRINT'); // => true
miniLogLang('5 PUSH PRINT'); // => true
miniLogLang('[0] PUSH {"P":2,"K":"concrete"} PUSH 0 PUSH PRINT EVERY-OBJECT-EXISTS PRINT POP PRINT EVERY-OBJECT-EXISTS PRINT SOME-OBJECT-CONCRETE PRINT'); // => false, false, false, true, true
miniLogLang('6 PUSH'); // => n/a
miniLogLang('PROOF PRINT'); // => true
miniLogLang('1 OR PRINT PUSH ["b"] PUSH SOME-ID PRINT ["b"] SOME-ID PRINT NOT PRINT'); // => true, true, false, true
miniLogLang('true PUSH true PUSH false NOT PUSH SOME-BCON PRINT SOME-NOT-BCON PRINT POP NOT PUSH SOME-NOT-BCON PRINT EVERY-NOT-BCON PRINT'); // => true, false, true, false
miniLogLang('undefined PUSH null PUSH EVERY-NOT-TRUE PRINT true EVERY-NOT-AND PRINT SOME-AND NOT PRINT'); // => true, true, true
miniLogLang('false PUSH true PUSH ID PRINT TRU NOT PRINT'); // => true, true
miniLogLang('false PUSH +0 PUSH NaN PUSH NaN PUSH ID PRINT SOME-PRIM-EXISTS PRINT CON PRINT EVERY-PRIM-EXISTS PRINT'); // => false, true, true, true
miniLogLang('EVERY-OBJECT-EXISTS PRINT EVERY-PRIM-EXISTS PRINT'); // => true, true
miniLogLang('SOME-OBJECT-EXISTS PRINT SOME-PRIM-EXISTS PRINT'); // => false, false
