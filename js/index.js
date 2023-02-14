document.addEventListener("DOMContentLoaded", function() {

    //eksempel på at udskrive alle overskrifter i services i konsollen:
    services.forEach(service => console.log(service.headline))

    const heroDOM = document.querySelector(".hero");
    const servicesDOM = document.querySelector(".services");
    const facilitiesDOM = document.querySelector(".facilities");
    const sitesDOM = document.querySelector(".sites");
    const advantagesDOM = document.querySelector(".advantages");

    heroDOM.innerHTML = `
        <img class="hero-bg" src="${hero.image}" alt="...">
        <nav>
            <div class="placeh"></div>
            <div class="placeh"></div>
        </nav>
        <div class="intro">
            <h1>
                ${hero.headline}
            </h1>
            <p class="intro__text">
                ${hero.copy}
            </p>
            <a class="intro__knap" href="#">
                <img class="intro__globus" src="${hero.icon}">
                Explore
            </a>
        </div>
    `;

}) // DOMContentLoaded slut

