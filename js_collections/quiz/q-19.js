
const obj = { a: 'able', b: 'baker', c: 'charley' };
/*
let result = someMethod(obj).map(value => value.toUpperCase());
// => [ 'ABLE', 'BAKER', 'CHARLEY' ]
*/

let result = Object.values(obj).map(ele => ele.toUpperCase());


console.log(result);
