var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h",];

var wins = 0;
var losses = 0;
var guessesLeft = 0;
var guessesSoFar = 0;

var directionsText = document.getElementById("directions-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guesses-left-text");
var guessesSoFarText = document.getElementById("guesses-so-far");

document.onkeyup = function(event) {
    var userGuess = event.key;
    var computerGuess = computerChoices[Math.floor(math.random() * computerChoices.length)];
}

