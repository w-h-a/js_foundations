Problem:

Tic Tac Toe is a 2-player game played on a 3x3 grid called the board. Each player takes a turn and marks a square on the board. The first player to get 3 squares in a row---horizontally, vertically, or diagonally---wins. The game is a tie just in case all 9 squares are filled and neither player has 3 in a row.

Pseudocode (fourth draft):

1. DO
  - IF doWelcome is true
    - PRINT 'Welcome!'
    - SET doWelcome to false
  - SET 3x3 board to empty
  - SET (initialize) currentPlayer to 'human'
  - WHILE there is no winner and the board is not full
    - PRINT updated board
    - GET currentPlayer's move (either human or computer)
    - SET currentPlayer to GET switchPlayer(currentPlayer)
  - PRINT updated board
  - IF the board is a winning board
    - PRINT winner
    ELSE
    - PRINT tie
  - GET user's response to "Play again?"
2. WHILE yes
  - GO back to step 1
3. PRINT "Goodbye!"

Bonus Problem 1:

Function named `joinWith` takes the following as arguments:

- an array of numbers
- a delimiter (default value should be ", ")
- a word (default value should be "or")

The function should return a string such that

- If the input array is length 0, the output string is length 0,
- If the input array is length 1, the output string represents the number in the array,
- If the the input array is length 2, the output string is "num1 or num2"; otherwise,
- The output string is "num1, num2, ..., or numN"

Test Cases (Given)

Pseudocode:

IF the input array is length < 2
  - RETURN joined array
  ELSE IF the input array is length === 2
  - RETURN "num1 ${word} num2"
  ELSE
  - RETURN joined array except for last item + delimiter + word + last item
