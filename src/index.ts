
import { JokeResponse } from "./interfaces";

const $joke = document.querySelector(".jokes") as  HTMLParagraphElement;
const $button = document.getElementById("btn-next") as HTMLButtonElement;


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
        $joke.textContent = json.joke; 
    } catch (err: any) {
        const message = err.statusText || "An error occurred";
        $joke.textContent = `Error ${err.status}: ${message}`;
    }
}
