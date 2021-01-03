let words = ['go', 'ahead', 'and', 'jump'];

console.log(words.sort((a, b) => a['length'] - b['length']));

let scores = [[3, 6, 4], [6, 8, 9], [1, 4, 2]];

console.log(scores.sort((a, b) => a.reduce((aAcc, aEle) => aAcc + aEle) - b.reduce((bAcc, bEle) => bAcc + bEle)));
