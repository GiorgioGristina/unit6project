// declaring variables
let qwerty = document.getElementById("qwerty");
let phrase = document.getElementById("phrase");
const buttonReset = document.querySelector(".btn__reset");
const overlay = document.getElementById("overlay");
let missedGuess = 0;
let ul = phrase.querySelector("ul");
//created array w phrases to guess;
let phrases = ["blackcurrent", "book shop", "the mouline rouge", "red wine", "rolling paper"];

//add event listner to start the Game, so this will remove the-
//overlay when the reset button has been clicked
buttonReset.addEventListener("click", () => {
  overlay.style.display = "none";
});

// function for random phrases
function stub (arr) {
  // random number between 0 and the length of the array
  let randomNumb = math.floor(math.random * phrases.length)
  // get the random index number
  phrases[randomNumb.value];
};
