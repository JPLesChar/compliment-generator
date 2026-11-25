const compliments = [
  "You are making progress every day.",
  "Now unpress the button and see what happens.",
  "You are more capable than you think.",
  "Do not press the button again.",
  "Consistency beats talent.",
  "Never give up."
];

const message = document.querySelector("p");
const button = document.querySelector("button");

button.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * compliments.length);
  message.textContent = compliments[randomIndex];
});

