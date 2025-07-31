const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const question = document.getElementById("question");


const messages = [
  "Please say yes 🥺",
  "Sochle!!",
  "Are you suree?",
  "Pakka?",
  "Sahi me??",
  "Bloo 😭"
];

let messageIndex = 0;

noBtn.addEventListener("mouseenter", () => {
  question.innerText = messages[messageIndex];
  // noBtn.innerText = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;
  moveButton(); // Move only on click
});

function moveButton() {
  const container = document.querySelector(".buttons");
  const x = Math.random() * (container.offsetWidth - noBtn.offsetWidth);
  const y = Math.random() * (container.offsetHeight - noBtn.offsetHeight);
  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

yesBtn.addEventListener("click", () => {
  window.location.href = "yay.html";
});
