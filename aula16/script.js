const cards = document.querySelectorAll(".card");

console.log("Quantidade de cards:", cards.length);

cards.forEach(function (card, indice) {
    const tituloDoCard = card.querySelector(".card-title");
    
    tituloDoCard
        ? (tituloDoCard.innerHTML = tituloDoCard.textContent + " ☑")
        : console.log("(sem título)");
});
