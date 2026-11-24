const compliments = [
  "Fjztfdjztd.",
  "Yxhdfhxhtrsx.",
  "Cxhfgdxhgfxh.",
  "Dgkujzfp."
];

const message = document.querySelector("p");
const button = document.querySelector("button");

button.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * compliments.length);
  message.textContent = compliments[randomIndex];
});

