function selectVowels(strP) {
  let selectedChars = '';

  for (let counter = 0; counter < strP['length']; counter += 1) {
    let currentChar = strP[counter];

    if ('aeiouAEIOU'.includes(currentChar)) {
      selectedChars += currentChar;
    }
  }

  return selectedChars;
}
