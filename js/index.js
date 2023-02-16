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
        // servArt.classList = "services__article"
        servicesDOM.append(servArt);

        let image = document.createElement("img");
        // image.classList = "services__illustration";
        image.src = service.illustration;
        image.alt = "One of our services";
        servArt.append(image);
        
        let servHead = document.createElement("h3");
        servHead.textContent = service.headline;
        servArt.append(servHead);

        let text = document.createElement("p");
        text.classList ="services__text";
        text.textContent = service.text;
        servArt.append(text);

        let linktext = document.createElement("p");
        linktext.classList ="services__linktext";
        linktext.textContent = service.linktext;
        servArt.append(linktext);
    })

    let faciHead = document.createElement("h2");
    faciHead.textContent = facilities.headline;
    facilitiesDOM.append(faciHead);

    facilities.options.forEach((facility) => {
        let faciArt = document.createElement("article");
        facilitiesDOM.append(faciArt);

        let faciIcon = document.createElement("img");
        faciIcon.src = facility.icon;
        faciArt.append(faciIcon);
    })

}) // DOMContentLoaded slut

