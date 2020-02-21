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

function initializeGame() {
  $("#wins").text(wins);
  $("#losses").text(losses);
  $("#current-score").text(currentScore);
}

function getTargetNum() {

// Generate random number for user Target (range of 19 - 120)
targetNum = Math.floor(Math.random() * (121 - 19) + 19);
console.log(targetNum); // test random number
$("#target-number").text(targetNum);
}

function getCrystalValues() {
  for (var i = 0; i < 4; i++) {
    var crystalValue = Math.floor(Math.random() * (13 - 1) + 1);
    crystalArray.push(crystalValue);
    console.log(crystalArray + "--testing crystal array values");
  }

    crystal1 = crystalArray[0];
    console.log(crystal1 + " ---crystal1 value");
    crystal2 = crystalArray[1];
    console.log(crystal2 + " ---crystal2 value");
    crystal3 = crystalArray[2];
    console.log(crystal3 + " ---crystal3 value");
    crystal4 = crystalArray[3];
    console.log(crystal4 + " ---crystal4 value");
}

// Get random number options for crystals
// Assign random number to each crystals (range of 1 - 12)
function userInterface() {



  //Source to keep click from firing multiple events in later rounds: https://stackoverflow.com/questions/14969960/jquery-click-events-firing-multiple-times

  $("#crystal1").unbind().click(function() {

    crystalValue = crystal1;
    console.log(crystalValue + " --testing crystal value");

    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    $("#current-score").text(currentScore += crystalValue);

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
  });

  $("#crystal2").unbind().click(function() {

    crystalValue = crystal2;
    console.log(crystalValue + " --testing crystal value");

    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    $("#current-score").text(currentScore += crystalValue);

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
  });

  $("#crystal3").unbind().click(function() {

    crystalValue = crystal3;
    console.log(crystalValue + " --testing crystal value");

    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    $("#current-score").text(currentScore += crystalValue);

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
  });

  $("#crystal4").unbind().click(function() {

    crystalValue = crystal4;
    console.log(crystalValue + " --testing crystal value");

    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    $("#current-score").text(currentScore += crystalValue);

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
  });

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
