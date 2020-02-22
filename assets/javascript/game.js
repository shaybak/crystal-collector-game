// Global variables
var wins = 0;
var losses = 0;
var targetNum = 0;
var currentScore = 0;
var crystal1 = 0;
var crystal2 = 0;
var crystal3 = 0;
var crystal4 = 0;
var crystalValue = 0;
var crystalArray = [];

// We initialize the UI with starting values
function initializeGame() {
  $("#wins").text(wins);
  $("#losses").text(losses);
  $("#current-score").text(currentScore);
}

function getTargetNum() {

  // Generate random number for targetNum (range of 19 - 120)
  targetNum = Math.floor(Math.random() * (121 - 19) + 19);
  console.log(targetNum); // test random number
  $("#target-number").text(targetNum);
}

// Get random number options for crystals
// Assign random number to each crystal (range of 1 - 12)
function getCrystalValues() {

  // We set up a loop to assign values to the crystal value array
  for (var i = 0; i < 4; i++) {

    // The variable crystalValue is set to a random number between 1 and 12
    crystalValue = Math.floor(Math.random() * (13 - 1) + 1);

    // We add each value to the array so we can access it for each crystal below
    crystalArray.push(crystalValue);
    console.log(crystalArray + "--testing crystal array values");
  }

  // Here is where we assign each crystal to a number in the array we built above
  crystal1 = crystalArray[0];
  console.log(crystal1 + " ---crystal1 value");

  crystal2 = crystalArray[1];
  console.log(crystal2 + " ---crystal2 value");

  crystal3 = crystalArray[2];
  console.log(crystal3 + " ---crystal3 value");

  crystal4 = crystalArray[3];
  console.log(crystal4 + " ---crystal4 value");
}


// Here is where we set functions for each crystal on the click event
function userInterface() {

  // Using .unbind() to solve issue were clicks were firing multiple events in later rounds
  // Source code: https://stackoverflow.com/questions/14969960/jquery-click-events-firing-multiple-times
  $("#crystal1").unbind().click(function() {

    crystalValue = crystal1;
    console.log(crystalValue + " --testing crystal value");

    $("#current-score").text(currentScore += crystalValue);

    setTimeout(winLose, 1000);

  });

  $("#crystal2").unbind().click(function() {

    crystalValue = crystal2;
    console.log(crystalValue + " --testing crystal value");

    $("#current-score").text(currentScore += crystalValue);

    setTimeout(winLose, 1000);

  });

  $("#crystal3").unbind().click(function() {

    crystalValue = crystal3;
    console.log(crystalValue + " --testing crystal value");

    $("#current-score").text(currentScore += crystalValue);

    setTimeout(winLose, 1000);

  });

  $("#crystal4").unbind().click(function() {

    crystalValue = crystal4;
    console.log(crystalValue + " --testing crystal value");

    $("#current-score").text(currentScore += crystalValue);

    setTimeout(winLose, 1000);

  });

}

function winLose() {
  // Win scenario: The player matches the target number & wins++
  if (currentScore === targetNum) {
    wins++;
    $("#wins").text(wins);
    alert("You won this round!");
    resetGame();
  }

  // Loss scenario: The player goes over the target number & losses++
  else if (currentScore > targetNum) {
    losses++;
    $("#losses").text(losses);
    alert("Uh-oh. You lost this round.");
    resetGame();
  }
}

// Reset game at win or loss
function resetGame() {
  targetNum = 0;
  currentScore = 0;
  crystal1 = 0;
  crystal2 = 0;
  crystal3 = 0;
  crystal4 = 0;
  crystalValue = 0;
  crystalArray = [];
  playGame();
}

function playGame() {
  initializeGame();
  getTargetNum();
  getCrystalValues();
  userInterface();
}

playGame();
