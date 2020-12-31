Problem:

Function has word and text parameters, as before. The function should return the value of text with every instance of the value of word highlighted.

- input: small string, large string
- output: large string with highlighted text

- explicit
  - both param's values are always strings
  - consecutive non-whitespace characters define words

- implicit
  - first argument is a word; second argument is a larger string passage
  - case does not matter

Test Cases (Given):

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Sed quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?';

searchWord('sed', text);
// returns
// "**SED** ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, **SED** quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, **SED** quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? **SED** quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?"

Pseudocode:

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
