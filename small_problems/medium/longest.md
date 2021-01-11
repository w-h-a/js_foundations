Problem:

Program prints the longest sentence in a string based on the number of words. Sentences may end with periods (.), exclamation points (!), or question marks (?). You should treat any sequence of characters that are not spaces or sentence-ending characters as a word. Thus, -- should count as a word. Log the longest sentence and its word count to the console. Pay attention to the expected output, and be sure you preserve the punctuation from the end of the sentence. Note that this problem is about manipulating and processing strings. As such, every detail about the string matters (e.g., case, punctuation, tabs, spaces, etc.).

- input: string
- output: two strings

- explicit:
  - program prints:
    - longest sentence
    - word count of longest sentence
  - sentence length is determined by number of words
  - sentence ends with ., !, or ?
  - if sequence of characters does not include whitespace, then it is a word

- implicit:
  - program only prints:
    - longest sentence
    - word count of longest sentence
  - if a sequence of characters is a word, then it does not include whitespace

Test Cases (Given)

Pseudocode:

1. SET longestSentence to []
2. SET accumulator to []
3. SET text to split input string at whitespace
4. WHILE there are words in the text
  - SET accumulator to include the word
  - IF last character of word is a punctuation mark
    - IF length of longestSentence is less than length of accumulator
      - SET longestSentence to accumulator
    - SET accumulator to []
5. PRINT joined longestSentence
6. PRINT length of longest sentence in words.
