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
const cardShell = document.getElementById("card-shell");
const cardColor = document.getElementById("card-color");
const cardValue = document.getElementById("card-value");
const cardType = document.getElementById("card-type");
const cardMessage = document.getElementById("card-message");

function getRandomCard() {
  const randomIndex = Math.floor(Math.random() * cards.length);
  return cards[randomIndex];
}

function updateCard(card) {
  cardShell.className = `card-shell ${card.cssClass}`;
  cardColor.textContent = card.color;
  cardValue.textContent = card.value;
  cardType.textContent = card.type;
  cardMessage.textContent = `Carta sorteada: ${card.color} ${card.value}`;
  drawnCard.classList.remove("is-hidden");
}

drawButton.addEventListener("click", () => {
  const card = getRandomCard();
  updateCard(card);
});
