const compliments = [
<<<<<<< Updated upstream
  "Fjztfdjztd.",
  "Yxhdfhxhtrsx.",
  "Cxhfgdxhgfxh.",
  "Dgkujzfp."
=======
  "Glzglzgligglig.",
  "Dzttkufkuf.",
  "Cuzouiztgil.",
  "Uktzfkuzf."
>>>>>>> Stashed changes
];

const message = document.querySelector("p");
const button = document.querySelector("button");

button.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * compliments.length);
  message.textContent = compliments[randomIndex];
});

