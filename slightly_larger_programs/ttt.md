Problem:

Tic Tac Toe is a 2-player game played on a 3x3 grid called the board. Each player takes a turn and marks a square on the board. The first player to get 3 squares in a row---horizontally, vertically, or diagonally---wins. The game is a tie just in case all 9 squares are filled and neither player has 3 in a row.

Pseudocode (third pass):

1. DO
  - SET 3x3 board to empty
  - WHILE there is no winner and the board is not full
    - PRINT updated board
    - GET user's move
    - IF there is a winner or the board is full
      - BREAK out of WHILE
    - GET computer's move
  - PRINT updated board
  - IF the board is a winning board
    - PRINT winner
    ELSE
    - PRINT tie
  - GET user's response to "Play again?"
2. WHILE yes
  - GO back to step 1
3. PRINT "Goodbye!"
