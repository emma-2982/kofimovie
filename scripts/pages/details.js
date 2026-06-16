import { fetchMovieDetails } from "../services/tmdb.js";
export default async function MovieDetailsPage() {
    const params = new URLSearchParams(window.location.search);
    const movieId = params.get("id");

    const movie = await fetchMovieDetails(movieId);

    if (!movie) {
        return `<p class="error">Movie details not found.</p>`;
    }

    return `
        <section class="movie-details">
            <div class="backdrop" style="background-image: url('${movie.backdrop}')"></div>

            <div class="details-content">
                <img class="poster" src="${movie.poster}" alt="${movie.title}">

                <h1>${movie.title}</h1>
                <h3>${movie.tagline || ""}</h3>

                <p class="rating">⭐ ${movie.rating}</p>
                <p class="genres">${movie.genres.join(", ")}</p>
                <p class="overview">${movie.overview}</p>

                ${movie.trailerKey
            ? `<a class="trailer-btn" href="https://youtube.com/watch?v=${movie.trailerKey}" target="_blank">Watch Trailer</a>`
            : `<p>No trailer available</p>`
        }
            </div>
        </section>
    `;
}

