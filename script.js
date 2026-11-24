const compliments = [
  "You are making progress every day.",
  "You are more capable than you think.",
  "Consistency beats talent.",
  "Never give up."
];

const message = document.querySelector("p");
const button = document.querySelector("button");

button.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * compliments.length);
  message.textContent = compliments[randomIndex];
});

