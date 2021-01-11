/*
from wikipedia:

procedure bubbleSort(A : list of sortable items)
    n := length(A)
    repeat
        swapped := false
        for i := 1 to n - 1 inclusive do
            if A[i - 1] > A[i] then
                swap(A[i - 1], A[i])
                swapped = true
            end if
        end for
        n := n - 1
    until not swapped
end procedure
*/

function bubbleSort(arrParam) {
  let swapped = true;

  while (swapped) {
    swapped = false;

    for (let idx = 1; idx < arrParam['length']; idx += 1) {
      if (arrParam[idx - 1] > arrParam[idx]) {
        [arrParam[idx - 1], arrParam[idx]] = [arrParam[idx], arrParam[idx - 1]];
        swapped = true;
      }
    }
  }

  return arrParam;
}

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
