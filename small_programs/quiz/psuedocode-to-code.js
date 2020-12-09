/*
Problem:
Given a sentence made up of several words,
write a method to return the longest word.
Words consist of any text separated by a
single space.

Pseudocode:
Split the sentence into words
Save the first word as the starting word.
For each of the remaining words in the sentence:
  If the current word is longer than the saved word:
    Reassign the saved word as the new current word.
Return the saved word.
*/

function longestWord1(sentence) {
  let words = sentence.split(' ');
  let savedWord = words[0];

  words.forEach(word => {
    if (word.length >= savedWord.length) {
      savedWord = word;
    }
  });

  return savedWord;
}

function longestWord2(sentence) {
  let words = sentence.split(' ');
  let savedWord = words.shift();

  words.forEach(word => {
    if (savedWord.length < word.length) {
      savedWord = word;
    }
  });

  return savedWord;
}

function longestWord3(sentence) {
  let words = sentence.split(' ');
  let savedWord = words.shift();

  words.forEach(word => {
    if (word.length > savedWord.length) {
      savedWord = word;
    }
  });

  return savedWord;
}

function longestWord4(sentence) {
  let words = sentence.split(' ');
  let savedWord = words[0];

  words.forEach(word => {
    if (savedWord.length <= word.length) {
      savedWord = word;
    }
  });

  return savedWord;
}
