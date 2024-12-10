import { JokeResponse } from "./interfaces";
import { Report } from "./interfaces";


let currentJoke: string = "";
let reportJokes: Report[] = [];

// EX 1-Function to get API Joke
export async function getJoke(): Promise<void> {
  const $joke = document.getElementById("joke-text") as HTMLParagraphElement;
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

    const json: JokeResponse = await resp.json();
    currentJoke = json.joke; // Guardamos el chiste actual
    $joke.textContent = currentJoke; // Mostramos el chiste en la interfaz
  } catch (err: any) {
    const message = err.statusText || "An error occurred";
    $joke.textContent = `Error ${err.status}: ${message}`;
  }
}

// Función para manejar la puntuación del chiste
export const handleScore = (score: number) => {
  // Verificar si el chiste ya ha sido puntuado
  const existingReport = reportJokes.find((report) => report.joke === currentJoke);

  if (existingReport) {
    // Si ya existe, actualizar el puntaje
    existingReport.score = score;
  } else {
    // Si no existe, agregar un nuevo reporte
    reportJokes.push({
      joke: currentJoke,
      score: score,
      date: new Date().toISOString(),
    });
  }

  // Mostrar los reportes por consola para ver la información
  console.log(reportJokes); 
};

