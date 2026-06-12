import loadHeaderFooter from "./utils/loadHeaderFooter.js";
import HomePage from "./pages/home.js";

document.querySelector("#app").innerHTML = HomePage();

loadHeaderFooter();
HomePage() ; // loads trending movies dynamically

