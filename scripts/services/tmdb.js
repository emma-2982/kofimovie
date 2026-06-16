// js/services/tmdb.js
import { TMDB_KEY, TMDB_BASE, TMDB_IMG } from "../utils/config.js";

export async function fetchTrendingMovies() {
    const url = `${TMDB_BASE}/trending/movie/week?api_key=${TMDB_KEY}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Failed to fetch trending movies");
        }

        const data = await response.json();
        console.log("Trending movies fetched:", data.results);


        // Format the results to make them easier to use
        return data.results.map(movie => ({
            id: movie.id,
            title: movie.title,
            poster: movie.poster_path
                ? TMDB_IMG + movie.poster_path
                : "assets/images/no-poster.png",
            backdrop: movie.backdrop_path
                ? TMDB_IMG + movie.backdrop_path
                : "assets/images/no-bg.jpg",
            rating: movie.vote_average,
            release_date: movie.release_date
        }));

    } catch (error) {
        console.error("TMDB Error:", error);
        return [];
    }
}

export async function fetchMovieDetails(movieId) {
    const url = `${TMDB_BASE}/movie/${movieId}?api_key=${TMDB_KEY}&append_to_response=videos`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Failed to fetch movie details");
        }

        const data = await response.json();

        // Extract trailer (if available)
        const trailer = data.videos?.results?.find(
            v => v.type === "Trailer" && v.site === "YouTube"
        );

        return {
            id: data.id,
            title: data.title,
            tagline: data.tagline,
            overview: data.overview,
            release_date: data.release_date,
            rating: data.vote_average,
            genres: data.genres?.map(g => g.name) || [],
            poster: data.poster_path
                ? TMDB_IMG + data.poster_path
                : "assets/images/no-poster.png",
            backdrop: data.backdrop_path
                ? TMDB_IMG + data.backdrop_path
                : "assets/images/no-bg.jpg",
            trailerKey: trailer ? trailer.key : null
        };

    } catch (error) {
        console.error("TMDB Details Error:", error);
        return null;
    }
}
