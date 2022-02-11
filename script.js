import coinData from "./coinData.js";

const leftButton = document.querySelector(".left-button");
const rightButton = document.querySelector(".right-button");
const coinObverse = document.querySelector(".coin-obverse");
const coinReverse = document.querySelector(".coin-reverse");

leftButton.addEventListener("click", e => {
  coinObverse.src = "assets/aureus_Nero21.jpg";
  coinReverse.src = "assets/aureus_rev_Nero21.jpg";
});
