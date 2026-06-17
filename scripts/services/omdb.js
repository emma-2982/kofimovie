import { OMDB_KEY } from "../utils/config.js";

export async function fetchGhanaMovie(title) {
    const url = `https://www.omdbapi.com/?apikey=${OMDB_KEY}&t=${encodeURIComponent(title)}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.Response === "False") return null;

        return {
            id: data.imdbID,
            title: data.Title,
            year: data.Year,
            poster: data.Poster !== "N/A" ? data.Poster : "assets/images/no-poster.png",
            plot: data.Plot
        };

    } catch (error) {
        console.error("OMDb Ghana Error:", error);
        return null;
    }
}
