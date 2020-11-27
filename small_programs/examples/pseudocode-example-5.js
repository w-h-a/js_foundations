/*
START

1. SET largeNumbers = []
2. SET keepGoing = true
3. WHILE keepGoing == true
  1. GET "enter a collection"
  2. SET collection to user input
  3. SET largestNumber = SUBPROCESS "extract the largest one from that collection"
  4. largeNumbers.push(largestNumber)
  5. GET "enter another collection?"
  6. IF "yes"
    keepGoing = true
  7. ELSE
    keepGoing = false
4. PRINT largeNumbers

END
*/
