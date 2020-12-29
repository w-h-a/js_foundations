/*
I tried to generalize to multiply all n-tuples using the idea of a Cartesian product.

for multiplyAllNTuples:
1. GET cartesian product
2. SET result variable to empty array
3. WHILE there are cartesian products in renesProducts
  - SET product to 1
  - WHILE there are elements in cartesian product
    1. SET product to product times element
    2. RETURN product
  - SET result to include product
4. SET result so that it is in ascending order
5. RETURN result

for getCartesianProduct:
1. SET renesProducts to first input array
2. WHILE there are (additional) arrays in the input arrayOArrays
  - SET map1 to empty array
  - WHILE there are ele1 elements in renesProducts
    1. SET map2 to empty array
    2. WHILE there are ele2 elements in current input array (skipping first)
      - SET array to [ele1, ele2]
      - SET array to flattened version
      - SET map2 to include flattened version
    3. SET map1 to include map2
    4. SET map1 to flattened version
  - SET renesProducts to map1
3. RETURN renesProducts
*/

function getCartesianProduct(arrayOArraysP) {
  return arrayOArraysP.reduce((accumulator, otherArray) => {
    return accumulator.flatMap(ele1 => {
      return otherArray.map(ele2 => {
        return [ele1, ele2].flat();
      });
    });
  });
}

function multiplyAllNTuples(...arrayOArraysP) {
  let renesProducts = getCartesianProduct(arrayOArraysP);
  return renesProducts.reduce((result, array) => {
    result.push(
      array.reduce((product, ele) => {
        product *= ele;
        return product;
      }, 1)
    );
    return result;
  }, []).sort((a, b) => a - b);
}

console.log(multiplyAllNTuples([2, 4], [4, 3, 1, 2], [2, 2, 2]));

//  [
//    4, 4, 4,
//    8, 8, 8, 8, 8, 8,
//    12, 12, 12,
//    16, 16, 16, 16, 16, 16,
//    24, 24, 24,
//    32, 32, 32
//  ]
