export default async function HomePage() {
  return `
        <section class="hero">
            <div class="hero-text">
                <h1>Trending Movies</h1>
                <p>Watch the latest and hottest movies right now.</p>
                <a href="search.html" class="btn">Explore Movies</a>
            </div>
        </section>

        <section class="movie-row">
            <h2>🔥 Trending Now</h2>
            <div class="movie-grid">
                ${MovieCard("assets/images/trending1.jpg", "Movie Title 1")}
                ${MovieCard("assets/images/trending2.jpg", "Movie Title 2")}
                ${MovieCard("assets/images/trending3.jpg", "Movie Title 3")}
            </div>
        </section>

        <section class="movie-row">
            <h2>🇬🇭 Ghanaian Movies</h2>
            <div class="movie-grid">
                ${MovieCard("assets/images/ghana1.jpg", "Bob Santo Classics")}
                ${MovieCard("assets/images/ghana2.jpg", "Akrobeto Comedy")}
                ${MovieCard("assets/images/ghana3.jpg", "Kumawood Action")}
            </div>
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






