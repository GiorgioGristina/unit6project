// declaring variables
let qwerty = document.getElementById("qwerty");
let phrase = document.getElementById("phrase");
const buttonReset = document.querySelector(".btn__reset");
const overlay = document.getElementById("overlay");
let missedGuess = 0;
//created array w phrases to guess;
let phrases = ["blackcurrent", "book shop", "the mouline rouge", "red wine", "rolling paper"];

//add event listner to start the Game
buttonReset.addEventListener("click", () => {
  overlay.style.display = "none";
});
