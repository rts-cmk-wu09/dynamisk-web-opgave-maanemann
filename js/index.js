document.addEventListener("DOMContentLoaded", function() {

    //eksempel på at udskrive alle overskrifter i services i konsollen:
    services.forEach(service => console.log(service.headline))

    const heroDOM = document.querySelector(".hero");

    heroDOM.innerHTML = `
        <img src="${hero.image}" alt="...">
        <nav></nav>
    `;

}) // DOMContentLoaded slut

