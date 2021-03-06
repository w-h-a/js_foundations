/*
for searchWord
1. SET wordP to return value of uppercasing wordP
2. SET textP to return value of uppercasing textP
3. SET textP to split string
4. SET idx to index of wordP in textP
5. SET result to include idx
6. IF result includes negative 1
  - RETURN length of result minus 1
  ELSE
  - SET textP to sliced from 1 plus idx
  - SET textP to joined array
  - RETURN GET searchWord with wordP, textP, and result
*/

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Sed quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?';

function searchWord(wordP, textP, result = []) {
  wordP = wordP.toUpperCase();
  textP = textP.toUpperCase().split(' ');
  let idx = textP.indexOf(wordP);
  result.push(idx);
  if (result.includes(-1)) {
    return result['length'] - 1;
  } else {
    return searchWord(wordP, textP.slice(idx + 1).join(' '), result);
  }
}

console.log(searchWord('sed', text));     // 4
console.log(searchWord('est', text));     // 0
console.log(searchWord('est,', text));    // 2
