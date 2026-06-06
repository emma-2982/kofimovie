import Header from "../templates/header.js";
import Footer from "../templates/footer.js";

export default function loadHeaderFooter() {
    document.querySelector("#main-header").innerHTML = Header();
    document.querySelector("#main-footer").innerHTML = Footer();
}

