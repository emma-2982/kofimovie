export default function MovieDetailsPage(movie) {
    return `
        <section class="details-hero">
            <img src="${movie.backdrop}" alt="${movie.title}" class="details-backdrop">

            <div class="details-hero-text">
                <h1>${movie.title}</h1>
                <p class="details-tagline">${movie.tagline || ""}</p>
            </div>
        </section>

        <section class="details-content">
            <div class="details-poster">
                <img src="${movie.poster}" alt="${movie.title}">
            </div>

            <div class="details-info">
                <h2>Overview</h2>
                <p>${movie.overview}</p>

                <h3>Release Date</h3>
                <p>${movie.release_date}</p>

                <h3>Rating</h3>
                <p>${movie.rating} ⭐</p>

                <h3>Genres</h3>
                <p>${movie.genres.join(", ")}</p>

                <button class="btn watch-btn">Watch Trailer</button>
            </div>
        </section>
    `;
}
