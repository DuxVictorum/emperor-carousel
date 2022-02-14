import coinData from "./coinData.js";

const leftButton = document.querySelector(".left-button");
const rightButton = document.querySelector(".right-button");
const coinObverse = document.querySelector(".coin-obverse");
const coinReverse = document.querySelector(".coin-reverse");

const name = document.querySelector(".name");
const fullName = document.querySelector(".fullName");

const notableFor = document.querySelector(".notableFor");

let currentEmperor = 0;

function notableBits(stuff) {
  let notableStuff = "";
  for (let i = 0; i < stuff.length; i++) {
    notableStuff += "<li>" + stuff[i] + "</li>";
  }
  console.log(notableStuff);
  return notableStuff;
}

leftButton.addEventListener("click", e => {
  currentEmperor -= 1;
  coinObverse.src = coinData[currentEmperor].coinFile[0];
  coinReverse.src = coinData[currentEmperor].coinFile[1];
  name.innerText = coinData[currentEmperor].emperorName;
  fullName.innerText = coinData[currentEmperor].fullName;

  notableFor.innerHTML = notableBits(coinData[currentEmperor].notableFor);
});

rightButton.addEventListener("click", e => {
  currentEmperor += 1;
  coinObverse.src = coinData[currentEmperor].coinFile[0];
  coinReverse.src = coinData[currentEmperor].coinFile[1];
  name.innerText = coinData[currentEmperor].emperorName;
  fullName.innerText = coinData[currentEmperor].fullName;

  notableFor.innerHTML = notableBits(coinData[currentEmperor].notableFor);
});
