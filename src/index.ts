import { getJoke, handleScore } from "./jokeFunctions.js"; 

const $button = document.getElementById("btn-next") as HTMLButtonElement;
const $score1 = document.getElementById("score-1") as HTMLButtonElement;
const $score2 = document.getElementById("score-2") as HTMLButtonElement;
const $score3 = document.getElementById("score-3") as HTMLButtonElement;
const $dataNavBar = document.getElementById("current-date") as HTMLButtonElement;


addEventListener("DOMContentLoaded", (e) => { //Add Date NavBar
  const today = new Date();
  const formattedDateTime = today.toLocaleString("es-ES");
  $dataNavBar.textContent = formattedDateTime;
});


$button.addEventListener("click", (e) => { //Call function getJoke
  e.preventDefault();
  getJoke(); 
});

$score1.addEventListener("click", () => handleScore(1)); //Report Joke
$score2.addEventListener("click", () => handleScore(2)); //Report Joke
$score3.addEventListener("click", () => handleScore(3)); //Report Joke



