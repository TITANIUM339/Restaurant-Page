export default function () {
    document.querySelectorAll("button").forEach((element, index) => {
        element.style.borderColor = index === 2? "white": "#2E4374";
    });

    const main = document.querySelector("main");
    main.innerHTML = "";
    main.style = "";

    const phoneIcon = document.createElement("img");
    phoneIcon.src = "./images/phone.svg";
    phoneIcon.style = `
        max-width: 25px;
        height: auto;
    `;

    const number = document.createElement("div");
    number.innerText = "911";

    const locationIcon = document.createElement("img");
    locationIcon.src = "./images/location.svg";
    locationIcon.style = `
        max-width: 25px;
        height: auto;
    `;

    const location = document.createElement("div");
    location.innerText = "Chinatown San Francisco, CA";

    const locationImg = document.createElement("img");
    locationImg.src = "./images/location.png";
    locationImg.style = `
        grid-column: 1 / 3;
        width: 100%;
        height: auto;
    `;

    const container = document.createElement("div");
    container.style = `
        display: grid;
        grid-template-columns: min-content 1fr;
        grid-template-rows: min-content min-content min-content;
        gap: 20px;
    `;
    container.appendChild(phoneIcon);
    container.appendChild(number);
    container.appendChild(locationIcon);
    container.appendChild(location);
    container.appendChild(locationImg);

    main.appendChild(container);
}