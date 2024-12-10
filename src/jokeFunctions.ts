import { JokeResponse } from "./interfaces";
import { ChuckNorrisResponse } from "./interfaces";
import { Report } from "./interfaces";

const $joke = document.getElementById("joke-text") as HTMLParagraphElement;
let currentJoke: string = "";
let reportJokes: Report[] = [];

// EX 1-Function to get API Joke && EX 5

export function getRandomJoke(){
  const URLS = ['https://icanhazdadjoke.com/','https://api.chucknorris.io/jokes/random'];
  const randomURL = Math.floor(Math.random()*URLS.length);
  randomURL === 0? fetchChuckNorris() : fetchJoke();
  console.log(randomURL);
}

export async function fetchChuckNorris(): Promise<void> {
   try {
    const resp = await fetch('https://api.chucknorris.io/jokes/random', {
      headers: {
        'Accept': 'application/json'
      }
    });
    if (!resp.ok) {
      throw {
        status: resp.status,
        statusText: resp.statusText || "Unknown error"
      };
    }
    const json: ChuckNorrisResponse  = await resp.json();
    currentJoke = json.value; 
    $joke.textContent = currentJoke; 
  } catch (err: any) {
    const message = err.statusText || "An error occurred";
    $joke.textContent = `Error ${err.status}: ${message}`;
  }
}

export async function fetchJoke(): Promise<void> {
  try {
    const resp = await fetch('https://icanhazdadjoke.com/', {
      headers: {
        'Accept': 'application/json'
      }
    });
    if (!resp.ok) {
      throw {
        status: resp.status,
        statusText: resp.statusText || "Unknown error"
      };
    }
    const json: JokeResponse  = await resp.json();
    currentJoke = json.joke; 
    $joke.textContent = currentJoke; 
  } catch (err: any) {
    const message = err.statusText || "An error occurred";
    $joke.textContent = `Error ${err.status}: ${message}`;
  }
}

//EX-3
export const handleScore = (score: number) => {
  const existingReport = reportJokes.find((report) => report.joke === currentJoke);

  if (existingReport) {
    existingReport.score = score;
  } else {
    reportJokes.push({
      joke: currentJoke,
      score: score,
      date: new Date().toISOString(),
    });
  }
  console.log(reportJokes);
};
