let arr = [{ b: 'foo' }, ['bar']];
let serializedArr = JSON.stringify(arr);
let deepCopiedArr = JSON.parse(serializedArr);
