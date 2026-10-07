window.addEventListener("load", () => {
  document.body.classList.remove("container");
});

const lovePhrases = [
  "Te amo",
  "Te quiero",
  "Eres mi mundo",
  "Mi vida, mi alegria",
  "Eres mi persona favorita",
  "Siempre tu"
];
let nextLovePhrase = 0;

const showLovePhrase = (x, y) => {
  const phrase = document.createElement("span");
  const inset = 24;

  phrase.className = "love-pop";
  phrase.setAttribute("aria-hidden", "true");
  phrase.textContent = lovePhrases[nextLovePhrase];
  phrase.style.left = `${Math.min(Math.max(x, inset), window.innerWidth - inset)}px`;
  phrase.style.top = `${Math.min(Math.max(y, inset), window.innerHeight - inset)}px`;
  phrase.style.setProperty("--phrase-tilt", `${Math.random() * 12 - 6}deg`);
  document.body.appendChild(phrase);

  nextLovePhrase = (nextLovePhrase + 1) % lovePhrases.length;
  window.setTimeout(() => phrase.remove(), 2400);
};

if ("PointerEvent" in window) {
  document.addEventListener("pointerdown", (event) => {
    showLovePhrase(event.clientX, event.clientY);
  }, { passive: true });
} else {
  document.addEventListener("touchstart", (event) => {
    const touch = event.changedTouches[0];
    if (touch) {
      showLovePhrase(touch.clientX, touch.clientY);
    }
  }, { passive: true });
  document.addEventListener("click", (event) => {
    showLovePhrase(event.clientX, event.clientY);
  });
}
