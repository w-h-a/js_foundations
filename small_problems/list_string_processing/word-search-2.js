/*
for searchWord
1. SET wordP to return value of uppercasing wordP
2. SET textP to return value of uppercasing textP
3. SET textP to split string
4. SET idx to index of wordP starting fromIndex in textP
5. SET result to include idx
6. IF result includes negative 1
  - SET array to split text (note: 'text'; not 'textP')
  - SET map array to empty array
  - WHILE there are elements in array
    - IF result includes current index of array
      - SET map to include highlighted, uppercased element
      ELSE
      - SET map to include element
    - RETURN map
  - SET map to joined array
  - RETURN map
  ELSE
  - SET fromIndex to idx + 1
  - SET textP to joined array
  - RETURN GET searchWord with wordP, textP, fromIndex, and result
*/

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Sed quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?';

function searchWord(wordP, textP, fromIndex = 0, result = []) {
  wordP = wordP.toUpperCase();
  textP = textP.toUpperCase().split(' ');
  let idx = textP.indexOf(wordP, fromIndex);
  result.push(idx);
  if (result.includes(-1)) {
    return text.split(' ').map((ele, jdx) => (result.includes(jdx) ? `**${ele.toUpperCase()}**` : ele)).join(' ');
  } else {
    fromIndex = idx + 1;
    return searchWord(wordP, textP.join(' '), fromIndex, result);
  }
}

console.log(searchWord('sed', text));
// returns
// "**SED** ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, **SED** quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, **SED** quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? **SED** quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?"
