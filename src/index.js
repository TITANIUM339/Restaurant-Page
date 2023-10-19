import loadHomePage from "./home.js";
import loadMenuPage from "./menu.js";
import loadContactPage from "./contact.js";


loadHomePage();

document.querySelector(".home").addEventListener("click", () => {
    loadHomePage();
});

document.querySelector(".menu").addEventListener("click", () => {
    loadMenuPage();
});

document.querySelector(".contact").addEventListener("click", () => {
    loadContactPage();
});
