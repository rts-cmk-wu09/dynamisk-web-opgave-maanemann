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

        let faciHead2 = document.createElement("h3");
        faciHead2.textContent = facility.headline;
        faciArt.append(faciHead2);

        let faciText = document.createElement("p");
        faciText.textContent = facility.text;
        faciArt.append(faciText);

        let faciLink = document.createElement("a");
        faciLink.href = "#";
        faciLink.innerHTML = "Show me more";
        faciArt.append(faciLink);
    })

    let sitesIntro = document.createElement("article");
    sitesDOM.append(sitesIntro);
    
    let sitesHead = document.createElement("h2");
    sitesHead.textContent = sites.headline;
    sitesIntro.append(sitesHead);

    let sitesText = document.createElement("p");
    sitesText.textContent = sites.text;
    sitesIntro.append(sitesText);

    // --- Forsøg 1 : ---
    // sitesDOM.innerHTML = `
    //     <a href="#">
    //         <img src="${sites.btnicon}">
    //         Start
    //     </a>
    // `;

    // --- Forsøg 2 : ---
    // sitesBtn.append("<img src="${sites.btnicon}">")

    // --- Forsøg 3 : ---
    let sitesBtn = document.createElement("a");
    sitesBtn.href = "#";
    // sitesBtn.innerHTML = sites.btnicon + "Start";
    sitesIntro.append(sitesBtn);

    let sitesBtnContent = document.createElement(img);
    sitesBtnContent.src = sites.btnicon;
    sitesBtn.append(sitesBtnContent + "Start");

}) // DOMContentLoaded slut

