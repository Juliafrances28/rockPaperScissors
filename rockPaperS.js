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
