let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
 return Math.floor(Math.random() * 10)
}

const compareGuesses = (human, computer, generateTarget) => {
 let humanTarget =  Math.abs(generateTarget - human)
 let computerTarget =  Math.abs(generateTarget - computer)
 if (humanTarget <= computerTarget) {
   return true
 } else {
   return false
 }
 }

  function updateScore(winner) {
    if (winner == 'human') {
        return humanScore++
    } if (winner == "computer") {
        return  computerScore++
    } else {

    }
}

  const advanceRound = () => {
    currentRoundNumber ++;
  }
