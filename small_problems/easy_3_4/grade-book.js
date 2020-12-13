/*
START

1.  GET mean
2.  GET letter grade
3.  PRINT result

END
*/

let weights = {
  firstExam: 1 / 3,
  secondExam: 1 / 3,
  thirdExam: 1 / 3
};

function getMean(score1P, score2P, score3P) {
  return score1P * weights['firstExam'] + score2P * weights['secondExam'] + score3P * weights['thirdExam'];
}

function getLetterGrade(scoreP) {
  if ((90 <= scoreP) && (scoreP <= 100)) {
    return 'A';
  } else if ((80 <= scoreP) && (scoreP < 90)) {
    return 'B';
  } else if ((70 <= scoreP) && (scoreP < 80)) {
    return 'C';
  } else if ((60 <= scoreP) && (scoreP < 70)) {
    return 'D';
  } else if ((0 <= scoreP) && (scoreP < 60)) {
    return 'F';
  } else {
    return 'something went wrong';
  }
}

function getGrade(score1P, score2P, score3P) {
  let score = getMean(score1P, score2P, score3P);
  return getLetterGrade(score);
}

console.log(
  `${getGrade(95, 90, 93)}\n` +    // "A"
  `${getGrade(50, 50, 95)}`    // "D"
);
