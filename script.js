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
let hoverCount = 0;
let noBtnStatic = false;

// Unified handler for desktop and mobile
function handleNoInteraction() {
  if (noBtnStatic) return;

  question.innerText = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;
  hoverCount++;

  if (hoverCount >= 6) {
    noBtnStatic = true;

    // Reset to original position
    noBtn.style.top = "0px";
    noBtn.style.left = "0px";
    noBtn.style.position = "relative";

    question.innerText = "Ok... you can say no if you want 😔";
  } else {
    moveButton();
  }
}

// Desktop hover
noBtn.addEventListener("mouseenter", handleNoInteraction);

// Mobile tap
noBtn.addEventListener("touchstart", handleNoInteraction, { passive: true });

// "No" click — once it becomes static
noBtn.addEventListener("click", () => {
  if (noBtnStatic) {
    // Animate out
    yesBtn.classList.add("fly-away");
    noBtn.classList.add("fly-away");

    // Send to Formspree
    fetch("https://formspree.io/f/xjkooqdd", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: "She clicked No 💔"
      })
    });

    question.innerText = "Ouch... that hurt 😭";
    noBtn.disabled = true;
    yesBtn.disabled = true;
  }
});

// Move the "No" button randomly
function moveButton() {
  const container = document.querySelector(".buttons");
  const x = Math.random() * (container.offsetWidth - noBtn.offsetWidth);
  const y = Math.random() * (container.offsetHeight - noBtn.offsetHeight);
  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

// "Yes" click
yesBtn.addEventListener("click", () => {
  // Animate out
  yesBtn.classList.add("fly-away");
  noBtn.classList.add("fly-away");

  // Send to Formspree
  fetch("https://formspree.io/f/xjkooqdd", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message: "Yes clicked ❤️"
    })
  });

  // Redirect after animation finishes
  setTimeout(() => {
    window.location.href = "yay.html";
  }, 600);
});
