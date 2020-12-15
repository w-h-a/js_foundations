// When you call a function, you may feed another function call into the
// initial function as an argument. Suppose we have the following rps
// function.

function rps(fist1, fist2) {
  if (fist1 === "rock") {
    return fist2 === "paper" ? "paper" : "rock";
  } else if (fist1 === "paper") {
    return fist2 === "scissors" ? "scissors" : "paper";
  } else {
    return fist2 === "rock" ? "rock" : "scissors";
  }
}

// What does this output:
console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));
                      // paper               // rock
                  // paper
            // paper
