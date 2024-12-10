import { getJoke, handleScore } from "./jokeFunctions.js"; 
import { updateNavbarDate } from "./navbarFunctions.js";
import { addWeather } from "./navbarFunctions.js";

const $button = document.getElementById("btn-next") as HTMLButtonElement;
const $score1 = document.getElementById("score-1") as HTMLButtonElement;
const $score2 = document.getElementById("score-2") as HTMLButtonElement;
const $score3 = document.getElementById("score-3") as HTMLButtonElement;


addEventListener("DOMContentLoaded", (e) => {
  updateNavbarDate()
  addWeather()
});


$button.addEventListener("click", (e) => { 
  e.preventDefault();
  getJoke(); 
});

$score1.addEventListener("click", () => handleScore(1)); //Report Joke
$score2.addEventListener("click", () => handleScore(2)); //Report Joke
$score3.addEventListener("click", () => handleScore(3)); //Report Joke



