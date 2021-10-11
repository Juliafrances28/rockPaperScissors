// This section was written to getUserChoice.

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();

  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log("Error!");
  }
};

// below is how we test the function
console.log(getUserChoice("paper"));
console.log(getUserChoice("fork"));

// This is a function written to getComputerChoice. It useses a switch statement and math.random to generate one of the three choices.
function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

// again this is used to test the function
console.log(getComputerChoice("scissors"));
console.log(getComputerChoice("rock"));

// This was used to determind the who won in there different possible cases. To do this I impliented a if/else statment of each opition
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "The game was tied";

    if (userChoice === "paper") {
      if (computerChoice === "scissors") {
        return "the computer won!";
      } else {
        return "You won!";

        if (userChoice === "paper") {
          if (computerChoice === "paper") {
            return "The computer won!";
          } else {
            return "You won!";

            if (userChoice === "paper") {
              if (computerChoice === "rock") {
                return "The computer won!";
              } else {
                return "You won!";
              }
            }
          }
        }
      }
    }
  }
};

// testing this function
console.log(determineWinner("paper", "scissors"));
console.log(determineWinner("paper", "paper"));
console.log(determineWinner("paper", "rock"));

//finally time to play the game. This function allows the game to run.
const playGame = () => {
  const userChoice = getUserChoice();
  const computerChoice = getComputerChoice();
  console.log("You threw:" + userChoice);
  console.log("The computer threw:" + computerChoice);
  console.log(determineWinner(getUserChoice, getComputerCHoice));
};

playGame();
