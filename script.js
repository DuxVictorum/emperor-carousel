import coinData from "./coinData.js";

const leftButton = document.querySelector(".left-button");
const rightButton = document.querySelector(".right-button");
const coinObverse = document.querySelector(".coin-obverse");
const coinReverse = document.querySelector(".coin-reverse");

let currentEmperor = 0;

rightButton.addEventListener("click", e => {
  currentEmperor += 1;
  coinObverse.src = coinData[currentEmperor].coinFile[0];
  coinReverse.src = coinData[currentEmperor].coinFile[1];
});

leftButton.addEventListener("click", e => {
  currentEmperor -= 1;
  coinObverse.src = coinData[currentEmperor].coinFile[0];
  coinReverse.src = coinData[currentEmperor].coinFile[1];
});
