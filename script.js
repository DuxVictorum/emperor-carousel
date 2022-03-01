import coinData from "./coinData.js";

const leftButton = document.querySelector(".left-button");
const rightButton = document.querySelector(".right-button");
const coinObverse = document.querySelector(".coin-obverse");
const coinReverse = document.querySelector(".coin-reverse");
const coinLink = document.querySelector(".coinLink");

const empID = document.querySelector(".ID");
const name = document.querySelector(".name");
const fullName = document.querySelector(".fullName");
const bornDied = document.querySelector(".bornDied");
const reigned = document.querySelector(".reigned");
const yearsReigned = document.querySelector(".yearsReigned");
const howDied = document.querySelector(".howDied");
const notableFor = document.querySelector(".notableFor");

let currentEmperor = 0;

function notableBits(stuff) {
  let notableStuff = "";
  for (let i = 0; i < stuff.length; i++) {
    notableStuff += "<li>" + stuff[i] + "</li>";
  }
  return notableStuff;
}

leftButton.addEventListener("click", e => {
  if (currentEmperor > 0) {
    currentEmperor -= 1;
  }
  console.log(currentEmperor);
  coinObverse.src = coinData[currentEmperor].coinFile[0];
  coinReverse.src = coinData[currentEmperor].coinFile[1];
  coinLink.href = coinData[currentEmperor].coinLink;
  empID.innerText = coinData[currentEmperor].emperorId;
  name.innerText = coinData[currentEmperor].emperorName;
  name.href = coinData[currentEmperor].wikiLink;
  fullName.innerText = coinData[currentEmperor].fullName;
  bornDied.innerText = coinData[currentEmperor].bornDied;
  reigned.innerText = coinData[currentEmperor].reigned;
  yearsReigned.innerText = coinData[currentEmperor].yearsReigned;
  howDied.innerText = coinData[currentEmperor].howDied;
  notableFor.innerHTML = notableBits(coinData[currentEmperor].notableFor);
});

rightButton.addEventListener("click", e => {
  if (currentEmperor < coinData.length - 1) currentEmperor += 1;
  console.log(currentEmperor);
  coinObverse.src = coinData[currentEmperor].coinFile[0];
  coinReverse.src = coinData[currentEmperor].coinFile[1];
  coinLink.href = coinData[currentEmperor].coinLink;
  empID.innerText = coinData[currentEmperor].emperorId;
  name.innerText = coinData[currentEmperor].emperorName;
  name.href = coinData[currentEmperor].wikiLink;
  fullName.innerText = coinData[currentEmperor].fullName;
  bornDied.innerText = coinData[currentEmperor].bornDied;
  reigned.innerText = coinData[currentEmperor].reigned;
  yearsReigned.innerText = coinData[currentEmperor].yearsReigned;
  howDied.innerText = coinData[currentEmperor].howDied;
  notableFor.innerHTML = notableBits(coinData[currentEmperor].notableFor);
});
