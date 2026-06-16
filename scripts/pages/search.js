export default function SearchPage() {
    return `
        <section class="search-header">
            <h1>Search Movies</h1>
            <div class="search-bar">
                <input type="text" id="searchInput" placeholder="Search for a movie...">
                <button id="searchBtn">Search</button>
            </div>
        </section>

        <section class="results-section">
            <h2>Results</h2>
            <div id="resultsGrid" class="results-grid">
                <!-- Dynamic results will appear here -->
            </div>

            <p id="noResults" class="no-results hidden">
                No movies found. Try another search.
            </p>
        </section>
    `;
}

function MovieCard(img, title, id = 1) {
    return `
        <div class="movie-card" onclick="window.location.href='details.html?id=${id}'">
            <img src="${img}" alt="${title}">
            <p>${title}</p>
        </div>
    `;
}
