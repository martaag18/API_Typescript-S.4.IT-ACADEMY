
import { JokeResponse } from "./interfaces";

const $joke = document.getElementById("joke-text") as  HTMLParagraphElement;
const $button = document.getElementById("btn-next") as HTMLButtonElement;
const $dataNavBar = document.getElementById("current-date") as HTMLButtonElement;


addEventListener("DOMContentLoaded", (e) => {
    const today = new Date();
    const formattedDateTime = today.toLocaleString("es-ES");
    $dataNavBar.textContent = formattedDateTime;
});

$button.addEventListener("click", (e) => {
    e.preventDefault();
    getJoke();
});

async function getJoke(): Promise<void> {
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
        $joke.textContent = `${json.joke}`;
    } catch (err: any) {
        const message = err.statusText || "An error occurred";
        $joke.textContent = `Error ${err.status}: ${message}`;
    }
}
