document.querySelector("#start").addEventListener("click", start);

let guess = 50;
let guesshalf = 50;
let counter = 1;

function start() {
  event.preventDefault();
  console.log("JS loaded");
  newguess(guess);
}

function newguess(guess) {
  event.preventDefault();
  //remove previous buttons but keep previous guesses
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.remove();
  });
  const list = document.querySelector("#guesslist");
  //    // insert this list item before the end of the list with the number 50 and three buttons higher, lower, correct with appropriate ids. use insertAdjacentHTML
  list.insertAdjacentHTML(
    "beforeend",
    `<li><h3>${guess}<h3><button id='higher'>Higher</button><button id='lower'>Lower</button><button id='correct'>Correct</button></li>`
  );
  document.querySelector("#higher").addEventListener("click", higher);
  document.querySelector("#lower").addEventListener("click", lower);
  document.querySelector("#correct").addEventListener("click", correct);
}

function higher() {
  event.preventDefault();
  console.log("higher");
    console.log(guesshalf);
  counter = counter * 2;
  console.log(counter);
  if (guess % 2 == 0) {
    guess = Math.round(guess + guesshalf / counter, 0);
    newguess(guess);
  } else {
    guess = Math.round(guess + (guesshalf - 1) / counter, 0);
    newguess(guess);
  }
}

function lower() {
  event.preventDefault();
  console.log("lower");
  console.log(guesshalf);
  counter = counter * 2;
  if (guess % 2 == 0) {
    guess = guess - Math.round(guesshalf / counter, 0);
    newguess(guess);
  } else {
    guess = guess - Math.round((guesshalf + 1) / counter, 0);
    newguess(guess);
  }
}

function correct() {
  console.log("correct");
  alert("Computer guessed it!");
}
