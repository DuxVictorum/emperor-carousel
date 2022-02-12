import coinData from "./coinData.js";

const leftButton = document.querySelector(".left-button");
const rightButton = document.querySelector(".right-button");
const coinObverse = document.querySelector(".coin-obverse");
const coinReverse = document.querySelector(".coin-reverse");

rightButton.addEventListener("click", e => {
  coinObverse.src = "assets/02-Tiberius27.jpg";
  coinReverse.src = "assets/02-Tiberius27_rev.jpg";
});
