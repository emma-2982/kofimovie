import Header from "../templates/header.js";
import Footer from "../templates/footer.js";

export default function loadHeaderFooter() {
    document.querySelector("#main-header").innerHTML = Header();
    document.querySelector("#main-footer").innerHTML = Footer();

    //Added the year and last modified dynamically
    document.querySelector("#currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;

}
