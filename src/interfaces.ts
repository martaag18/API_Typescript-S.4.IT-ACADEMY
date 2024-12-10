export interface JokeResponse {
    id: string;
    joke: string;
    status: number;
}

export interface Report {
    joke: string;
    score: number;
    date: string;
}