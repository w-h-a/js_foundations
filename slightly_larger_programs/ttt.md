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

Bonus Problem 2:

Allow computer or human to go first.

Bonus Problem 3:

Improve AI

for computerMoves()
IF GET checkInMemory() RETURNS true
  - SET compSquare to value at 'square' key of object from GET pullFromMemory()
  - SET compSquare of playerMoves to computerMarker
ELSE
  - SET compSquare to value at 'square' key of object from GET getStrategy(playerMoves, "computer")
  - SET compSquare of playerMoves to computerMarker

for getStrategy(movesParam, playerParam)
1. SET copyOfMoves to copy of playerMoves object
2. SET emptySquares to RETURN value of getEmpties(copyOfMoves)
3. IF user is the winner
  - RETURN object with 'score', -1 key-value pair
  ELSE IF computer is the winner
  - RETURN object with 'score', +1 key-value pair
  ELSE IF emptySquares length is 0
  - RETURN object with 'score', 0 key-value pair
4. SET possibleMoves to RETURN value of getMoves(emptySquares, copyOfMoves, playerParam)
5. SET optimalMove to RETURN value of minHumanMaxComputer(playerParam, possibleMoves)
6. IF playerParam is 'computer'
  - SET chosenSquare to element of possibleMoves at index optimalMove
  - GET addToMemory(copyOfMoves, chosenSquare)
7. RETURN element of possibleMoves at index optimalMove

for getMoves(emptiesParam, movesParam, playerParam)
1. SET possibleMoves to array of length 0
2. WHILE emptiesParam has elements
  - SET move to {}
  - SET temp variable to value of movesParam at element
  - SET value of move's 'square' key to element
  - IF playerParm is 'human'
    - GET getHumanMove(movesParam, ele, move)
    ELSE
    - GET getComputerMove(movesParam, ele, move)
  - SET movesParam at element back to temp variable's value
  - SET possibleMoves to include move object
3. RETURN possibleMoves

for getHumanMove(movesParam, eleParam, singleMoveParam)
1. SET value of movesParam at eleParam to humanMarker
2. SET value of singleMoveParam at 'score' to RETURN value at 'score' key of getStrategy(movesParam, "computer")

for getComputerMove(movesParam, eleParam, singleMoveParam)
1. SET value of movesParam at eleParam to computerMarker
2. SET value of singleMoveParam at 'score' to RETURN value at 'score' key of getStrategy(movesParam, "human")

for minHumanMaxComputer(playerParam, possParam)
IF playerParam is 'human'
  - RETURN getHumanBestMove(possParam)
ELSE
  - RETURN getComputerBestMove(possParam)

for getHumanBestMove(possParam)
1. SET minSocre to Infinity
2. SET indexOfBestMove to undefined
3. WHILE possParam has elements
  - IF value at 'score' key of ele (move) is less than minScore
    - SET minScore to value at 'score' key of ele
    - SET indexOfBestMove to idx of current element
4. RETURN indexOfBestMove

for getComputerBestMove(possParam)
1. SET maxSocre to -Infinity
2. SET indexOfBestMove to undefined
3. WHILE possParam has elements
  - IF value at 'score' key of ele (move) is greater than maxScore
    - SET maxScore to value at 'score' key of ele
    - SET indexOfBestMove to idx of current element
4. RETURN indexOfBestMove

for addToMemory(movesParam, squareParam)
1. SET entry to numberified version of itself
2. SET entry to entry plus 1
3. SET entry to stringified version of itself
4. SET entry value at entry key of cache to
  - gameState: movesParam
  - bestMove: squareParam

for checkInMemory()
1. SET currGameState to entries of playerMoves
2. SET result1 to false
3. SET arr to entries of cache
4. WHILE there are elements in arr
  - SET obj to element at index 1
  - SET src to entries of value at 'gameState' key of obj
  - SET result2 to true
  - WHILE there are elements in src
    - IF src and currentGameState's value don't match up at each idx
      - SET result2 to false
  - SET result1 to result2
5. RETURN result1

for pullFromMemory()
1. SET currGameState to entries of playerMoves
2. SET result1 to empty array
3. SET arr to entries of cache
4. WHILE there are elements in arr
  - SET obj to element at index 1
  - SET src to entries of value at 'gameState' key of obj
  - SET result2 to true
  - WHILE there are elements in src
    - IF src and currentGameState's value don't match up at each idx
      - SET result2 to false
  - SET result1 to include the unique element of arr for which result2 remains true
5. SET result1 to its element at index 0 (the unique element of arr); this has two elements, the 'entry' key and the object value with gameState and bestMove properties.
6. SET result1 to its element at index 1
7. SET result1 to bestMove property, which is itself an object with 'square' and 'score' properties
8. RETURN result1
