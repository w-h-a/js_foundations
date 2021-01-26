let adj = ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'];
let nouns = ['fox', 'dog', 'head', 'leg', 'tail', 'cat'];
let verbs = ['jumps', 'lifts', 'bites', 'licks', 'pats'];
let adv = ['easily', 'lazily', 'noisily', 'excitedly'];

let template1 = "The ADJ brown NOUN ADV VERB the ADJ yellow NOUN and the NOUN ADV VERB their NOUN and looks around.";
let template2 = "The NOUN VERB the NOUN of the NOUN all the way to town.";

function getRandomIdxFromInterval(minParam, maxParam) {
  return Math.floor((Math.random() * (maxParam - minParam + 1)) + minParam);
}

function madlibs(templateParam) {
  return templateParam.split(' ').reduce((acc, ele) => {
    if (ele === 'ADJ') {
      let jdx = getRandomIdxFromInterval(0, adj['length'] - 1);
      acc.push(adj[jdx]);
    } else if (ele === 'NOUN') {
      let jdx = getRandomIdxFromInterval(0, nouns['length'] - 1);
      acc.push(nouns[jdx]);
    } else if (ele === 'VERB') {
      let jdx = getRandomIdxFromInterval(0, verbs['length'] - 1);
      acc.push(verbs[jdx]);
    } else if (ele === 'ADV') {
      let jdx = getRandomIdxFromInterval(0, adv['length'] - 1);
      acc.push(adv[jdx]);
    } else {
      acc.push(ele);
    }
    return acc;
  }, []).join(' ');
}

console.clear();

console.log(madlibs(template1));

console.log(madlibs(template1));

console.log(madlibs(template2));      // The "fox" "bites" the "dog"'s "tail".

console.log(madlibs(template2));      // The "cat" "pats" the "cat"'s "head".
