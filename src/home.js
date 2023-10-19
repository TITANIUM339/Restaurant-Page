export default function () {
    document.querySelectorAll("button").forEach((element, index) => {
        element.style.borderColor = index === 0? "white": "#2E4374";
    });

    const main = document.querySelector("main");
    main.innerHTML = "";
    main.style = "";
    
    const text = document.createElement("p");
    text.innerText = "Here at Bing Chilling, we are dedicated to bringing you the most exquisite tasting bing chilling. Our bing chilling is authentic to Chinese traditions, We source the ingredients straight from China, and then we process them with machines made in China giving you the most authentic taste.";
    text.style = `
        max-width: 500px;
        font-size: large;
    `;

    const image = document.createElement("img");
    image.src = "./images/john xina.jpg";
    image.style = `
        aspect-ratio: 1 / 1;
        max-width: 200px;
        border-radius: 50%;
    `;

    const container = document.createElement("div");
    container.style = `
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 50px;
    `;
    container.appendChild(text);
    container.appendChild(image);

    main.appendChild(container);
}