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

document.addEventListener("click", (event) => {
  const phrase = document.createElement("span");
  const inset = 24;

  phrase.className = "love-pop";
  phrase.setAttribute("aria-hidden", "true");
  phrase.textContent = lovePhrases[nextLovePhrase];
  phrase.style.left = `${Math.min(Math.max(event.clientX, inset), window.innerWidth - inset)}px`;
  phrase.style.top = `${Math.min(Math.max(event.clientY, inset), window.innerHeight - inset)}px`;
  phrase.style.setProperty("--phrase-tilt", `${Math.random() * 12 - 6}deg`);
  document.body.appendChild(phrase);

  nextLovePhrase = (nextLovePhrase + 1) % lovePhrases.length;
  window.setTimeout(() => phrase.remove(), 2400);
});
