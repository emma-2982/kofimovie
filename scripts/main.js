import loadHeaderFooter from "./utils/loadHeaderFooter.js";
import HomePage from "./pages/home.js";
import SearchPage from "./pages/search.js";
import MovieDetailsPage from "./pages/details.js";
document.querySelector("#app").innerHTML = HomePage();

loadHeaderFooter();
HomePage(); // loads trending movies dynamically

//Search Fuctionality//

document.getElementById("searchBtn").addEventListener("click", runSearch);
document.getElementById("searchInput").addEventListener("keypress", (e) => {
    if (e.key === "Enter") runSearch();
});

function runSearch() {
    const query = document.getElementById("searchInput").value.trim();
    const resultsGrid = document.getElementById("resultsGrid");
    const noResults = document.getElementById("noResults");

    if (query === "") {
        resultsGrid.innerHTML = "";
        noResults.classList.remove("hidden");
        return;
    }

    // TEMPORARY MOCK RESULTS — replace with TMDB API later
    const mockResults = [
        { img: "assets/images/trending1.jpg", title: "Sample Movie 1" },
        { img: "assets/images/trending2.jpg", title: "Sample Movie 2" },
        { img: "assets/images/trending3.jpg", title: "Sample Movie 3" }
    ];

    resultsGrid.innerHTML = mockResults
        .map(movie => MovieCard(movie.img, movie.title))
        .join("");

    noResults.classList.add("hidden");
}

function MovieCard(img, title) {
    return `
        <div class="movie-card">
            <img src="${img}" alt="${title}">
            <p>${title}</p>
        </div>
    `;
}


// Get movie ID from URL: details.html?id=123
const params = new URLSearchParams(window.location.search);
const movieId = params.get("id");

// TEMPORARY MOCK DATA — replace with TMDB API later
const mockMovie = {
    id: movieId,
    title: "Sample Movie Title",
    tagline: "A thrilling adventure awaits.",
    overview: "This is a sample movie description for layout testing.",
    release_date: "2024-05-10",
    rating: 8.2,
    genres: ["Action", "Drama"],
    poster: "assets/images/trending1.jpg",
    backdrop: "assets/images/hero-bg.jpg"
};

// Inject the page
app.innerHTML = MovieDetailsPage(mockMovie);