import loadHeaderFooter from "./utils/loadHeaderFooter.js";
import HomePage from "./pages/home.js";
import SearchPage from "./pages/search.js";
import MovieDetailsPage from "./pages/details.js";
import { fetchTrendingMovies } from "./services/tmdb.js";

//import { TMDB_KEY, TMDB_BASE, TMDB_IMG } from "../utils/config.js";


//document.querySelector("#app").innerHTML = HomePage();
async function init() {
    const app = document.querySelector("#app");

    if (window.location.pathname.includes("details.html")) {
        app.innerHTML = await MovieDetailsPage();
        return;
    }

    app.innerHTML = await HomePage();
    await loadTrendingMovies();

}


async function loadTrendingMovies() {
    const movies = await fetchTrendingMovies();

    // Select the FIRST movie-grid on the page (Trending Now section)
    const grids = document.querySelectorAll(".movie-grid");
    if (!grids.length) return;

    const trendingGrid = grids[0]; // first grid is trending section

    trendingGrid.innerHTML = movies
        .map(movie => `
            <div class="movie-card" onclick="window.location.href='details.html?id=${movie.id}'">
                <img src="${movie.poster}" alt="${movie.title}">
                <p>${movie.title}</p>
            </div>
        `)
        .join("");
}
init();
loadHeaderFooter();
HomePage(); // loads trending movies dynamically

//Search Fuctionality//
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");

if (searchBtn && searchInput) {
    searchBtn.addEventListener("click", runSearch);
    searchInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") runSearch();

    });
}
function runSearch() {
    const query = document.getElementById("searchInput").value.trim();
    const resultsGrid = document.getElementById("resultsGrid");
    const noResults = document.getElementById("noResults");
    if (query === "") {
        resultsGrid.innerHTML = "";
        noResults.classList.remove("hidden");
        return;
    }
}

function MovieCard(img, title) {
    return `
    <div class="movie-card">
     <img src="${img}" alt="${title}">
      <p>${title}</p>
    </div>

    `;

}

