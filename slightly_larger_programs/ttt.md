Problem:

Tic Tac Toe is a 2-player game played on a 3x3 grid called the board. Each player takes a turn and marks a square on the board. The first player to get 3 squares in a row---horizontally, vertically, or diagonally---wins. The game is a tie just in case all 9 squares are filled and neither player has 3 in a row.

Pseudocode (second pass):

1. DO
  - PRINT the intial empty 3x3 board
  - WHILE there is no winner and the board is not full
    - GET user's move
    - GET computer's move
    - PRINT updated board state
  - IF the board is a winning board
    - PRINT winner
    ELSE
    - PRINT tie
  - GET user's response to "Play again?"
2. WHILE yes
3. PRINT "Goodbye!"
