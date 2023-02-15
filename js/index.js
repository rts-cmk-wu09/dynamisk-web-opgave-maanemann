document.addEventListener("DOMContentLoaded", function() {

    //eksempel på at udskrive alle overskrifter i services i konsollen:
    services.forEach(service => console.log(service.headline))

    const heroDOM = document.querySelector(".hero");
    let servicesDOM = document.querySelector(".services");
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

    services.forEach((service) => {
        let servArt = document.createElement("article");

        let image = document.createElement("img");
        image.src = service.illustration;
        image.alt = "One of our services";
        
        let headline = document.createElement("h3");
        headline.textContent = service.headline;

        servArt.append(image);
        servArt.append(headline);
        servicesDOM.append(servArt);
    })

}) // DOMContentLoaded slut

