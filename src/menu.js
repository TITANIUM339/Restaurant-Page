export default function () {
    document.querySelectorAll("button").forEach((element, index) => {
        element.style.borderColor = index === 1? "white": "#2E4374";
    });

    const main = document.querySelector("main");
    main.innerHTML = "";
    main.style = "";

    const container = document.createElement("div");
    container.style = `
        display: grid;
        width: 100%;
        justify-content: center;
        align-items: center;
        grid-template-columns: repeat(auto-fit, minmax(220px, 0.2fr));
        grid-auto-rows: minmax(220px, 0.2fr);
        gap: 20px;
    `;

    const images = ["./images/bing chilling1.jpg", "./images/bing chilling2.jpg", "./images/bing chilling3.jpg", "./images/bing chilling4.jpg"];

    const text = ["Bing chilling special", "Bing chilling pink", "Bing chilling deluxe", "Bing chilling green"];

    const credits = [
        `Photo by <a href="https://unsplash.com/@thissillygirlskitchen?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Dana DeVolk</a> on <a href="https://unsplash.com/photos/5-RS_ScO3X4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>`,
        `Photo by <a href="https://unsplash.com/@henrykhroch?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Tomek</a> on <a href="https://unsplash.com/photos/Z54FRHZugQg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>`,
        `Photo by <a href="https://unsplash.com/@sadswim?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">ian dooley</a> on <a href="https://unsplash.com/photos/TLD6iCOlyb0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>`,
        `Photo by <a href="https://unsplash.com/@raphaellovaski?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Raphael Lovaski</a> on <a href="https://unsplash.com/photos/Nag3E3yzygU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>`
    ]

    for (let i = 0; i < 4; i++) {
        let credit = document.createElement("h6");
        credit.innerHTML = credits[i];

        let img = document.createElement("div");
        img.style.background = `url("${images[i]}") center/cover no-repeat`;
        img.appendChild(credit);
        
        let divText = document.createElement("div");
        divText.innerText = text[i];
        
        let card = document.createElement("div");
        card.className = "card";
        card.appendChild(img);
        card.appendChild(divText);

        container.appendChild(card);
    }

    main.appendChild(container);
}