import Header from "../templates/header.js";
import Footer from "../templates/footer.js";

export default function loadHeaderFooter() {
    document.querySelector("#main-header").innerHTML = Header();
    document.querySelector("#main-footer").innerHTML = Footer();

    //Added the year and last modified dynamically
    document.querySelector("#currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;

    //hamburger and navigaation selected to be toggled/
    const hamburgerButton = document.getElementById("hamburger-btn");
    const navLinks = document.querySelector("#nav-links");

    //show class toggled//
    if (hamburgerButton && navLinks) {
        hamburgerButton.addEventListener("click", () => {
            hamburgerButton.classList.toggle("show");
            navLinks.classList.toggle("show");
        });
    }
}
