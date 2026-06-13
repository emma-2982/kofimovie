export default function Header() {
  return `
    <header class="header">
        <img src="asstes/images/site-logo.jpg" alt="kofiMovie Logo"  class="logo-img">
        <span>KofiMovie</span>
        <button class="hamburger" id="hamburger-btn" aria-label="navigation">
      </button>
      
      <nav id="nav-links" class="navigation">
        <ul>
          <li class="current"><a href="index.html">Home</a></li>
          <li><a href="search.html">Search Movies🔍</a></li>
        </ul>
      </nav>

    </header>
  `;
}

