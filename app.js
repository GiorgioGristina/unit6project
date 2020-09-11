// declaring variables
let qwerty = document.getElementById("qwerty");
let phrase = document.getElementById("phrase");
const buttonReset = document.querySelector(".btn__reset");
const overlay = document.getElementById("overlay");
let missedGuess = 0;
//let ul = phrase.querySelector("ul");
//created array w phrases to guess;
let phrases = ["blackcurrent", "book shop", "the mouline rouge", "red wine", "rolling paper"];

//add event listner to start the Game, so this will remove the-
//overlay when the reset button has been clicked
buttonReset.addEventListener("click", () => {
  overlay.style.display = "none";
});

// function for random phrases
function getRandomPhraseAsArray (arr) {
  // random number between 0 and the length of the array
  let random = Math.random();
  let numbOfPhrases = arr.length;
  let randomIndex = Math.floor(random * numbOfPhrases);
  // get the random index number
  return phrases[randomIndex].split("");

};
console.log(getRandomPhraseAsArray(phrases));


let phrasearray = getRandomPhraseAsArray(phrases);

function addPhraseToDisplay (arr){

 for (i=0; i<arr.length; i++){
   // create li element
   let li = document.createElement("li");
   // add letter and space to the li element
   li.appendChild.innerText(arr[i]);
   // select ul in div with id phase
   let ul = document.querySelectorAll("#phrase ul");
   //append the li to
    ul.appendChild(li);
   // conditional to add class "letter" if if the li element is a letter
   if (li === "letter"){
     li.className = "letter";
     
   }

 };

};






// check letter function
