document.querySelector("#start").addEventListener("click", start);

function start() {
  event.preventDefault();
  console.log("JS loaded");
  firstGuess();
}

function firstGuess() {
  event.preventDefault();
  const list = document.querySelector("#guesslist");
  //    // insert this list item before the end of the list with the number 50 and three buttons higher, lower, correct with appropriate ids. use insertAdjacentHTML
  list.insertAdjacentHTML(
    "beforeend",
    "<li>50<button id='higher'>Higher</button><button id='lower'>Lower</button><button id='correct'>Correct</button></li>"
  );
  document.querySelector("#higher").addEventListener("click", higher);
  document.querySelector("#lower").addEventListener("click", lower);
  document.querySelector("#correct").addEventListener("click", correct);
}
