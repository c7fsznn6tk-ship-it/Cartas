const cards = [
  { color: "Vermelho", value: "0", type: "Numero", cssClass: "red" },
  { color: "Vermelho", value: "3", type: "Numero", cssClass: "red" },
  { color: "Vermelho", value: "7", type: "Numero", cssClass: "red" },
  { color: "Vermelho", value: "+2", type: "Acao", cssClass: "red" },
  { color: "Amarelo", value: "1", type: "Numero", cssClass: "yellow" },
  { color: "Amarelo", value: "5", type: "Numero", cssClass: "yellow" },
  { color: "Amarelo", value: "Pular", type: "Acao", cssClass: "yellow" },
  { color: "Azul", value: "2", type: "Numero", cssClass: "blue" },
  { color: "Azul", value: "6", type: "Numero", cssClass: "blue" },
  { color: "Azul", value: "Reverso", type: "Acao", cssClass: "blue" },
  { color: "Verde", value: "4", type: "Numero", cssClass: "green" },
  { color: "Verde", value: "9", type: "Numero", cssClass: "green" },
  { color: "Verde", value: "+2", type: "Acao", cssClass: "green" },
  { color: "Especial", value: "Coringa", type: "Especial", cssClass: "wild" },
  { color: "Especial", value: "+4", type: "Especial", cssClass: "wild" }
];

const drawButton = document.getElementById("draw-button");
const drawnCard = document.getElementById("drawn-card");
const cardFlip = document.getElementById("card-flip");
const cardShell = document.getElementById("card-shell");
const cardColor = document.getElementById("card-color");
const cardValue = document.getElementById("card-value");
const cardCornerTop = document.getElementById("card-corner-top");
const cardCornerBottom = document.getElementById("card-corner-bottom");
const cardType = document.getElementById("card-type");
const cardMessage = document.getElementById("card-message");
let revealTimeout;
let finishAnimationTimeout;

function getRandomCard() {
  const randomIndex = Math.floor(Math.random() * cards.length);
  return cards[randomIndex];
}

function updateCard(card) {
  cardShell.className = `card-shell card-front ${card.cssClass}`;
  cardColor.textContent = card.color;
  cardValue.textContent = card.value;
  cardCornerTop.textContent = card.value;
  cardCornerBottom.textContent = card.value;
  cardType.textContent = card.type;
  cardMessage.textContent = `Carta sorteada: ${card.color} ${card.value}`;
  drawnCard.classList.remove("is-hidden");
}

function animateDraw(card) {
  drawButton.disabled = true;
  drawnCard.classList.remove("is-hidden");
  drawnCard.classList.remove("is-animating");

  clearTimeout(revealTimeout);
  clearTimeout(finishAnimationTimeout);

  void cardFlip.offsetWidth;
  drawnCard.classList.add("is-animating");

  revealTimeout = setTimeout(() => {
    updateCard(card);
  }, 320);

  finishAnimationTimeout = setTimeout(() => {
    drawnCard.classList.remove("is-animating");
    drawButton.disabled = false;
  }, 900);
}

drawButton.addEventListener("click", () => {
  const card = getRandomCard();
  animateDraw(card);
});
