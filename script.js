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
  // Secretly log the click
  fetch("https://docs.google.com/forms/d/e/1FAIpQLSdonUgTjQnpxwsa5ytmgzw5zeXKZUSyMg9_XvLEx52EdnERTQ/formResponse", {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: "entry.284502747=Yes clicked"
  });

  // Proceed to the cute page
  window.location.href = "yay.html";
});

