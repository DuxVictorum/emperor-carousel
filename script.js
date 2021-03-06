import coinData from "./coinData.js";

const leftButton = document.querySelector(".left-button");
const rightButton = document.querySelector(".right-button");
const coinObverse = document.querySelector(".coin-obverse");
const coinReverse = document.querySelector(".coin-reverse");
const coinLink = document.querySelector(".coinLink");

const empID = document.querySelector(".ID");
const name = document.querySelector(".name");
const minus2 = document.querySelector(".minus2");
const minus1 = document.querySelector(".minus1");
const plus1 = document.querySelector(".plus1");
const plus2 = document.querySelector(".plus2");
const timePeriod = document.querySelector(".timePeriod");
const fullName = document.querySelector(".fullName");
const birthName = document.querySelector(".birthName");
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
  coinObverse.src = coinData[currentEmperor].coinFile[0];
  coinReverse.src = coinData[currentEmperor].coinFile[1];
  coinLink.href = coinData[currentEmperor].coinLink;
  empID.innerText = coinData[currentEmperor].emperorId;
  name.innerText = coinData[currentEmperor].emperorName;
  name.href = coinData[currentEmperor].wikiLink;
  if (currentEmperor > 1) {
    minus2.innerText = coinData[currentEmperor - 2].emperorName;
  } else {
    minus2.style.visibility = "hidden";
  }
  if (currentEmperor > 0) {
    minus1.innerText = coinData[currentEmperor - 1].emperorName;
  } else {
    minus1.style.visibility = "hidden";
  }
  if (currentEmperor < coinData.length - 1) {
    plus1.style.visibility = "visible";
    plus1.innerText = coinData[currentEmperor + 1].emperorName;
  }
  if (currentEmperor < coinData.length - 2) {
    plus2.style.visibility = "visible";
    plus2.innerText = coinData[currentEmperor + 2].emperorName;
  }
  timePeriod.innerText = coinData[currentEmperor].period;
  fullName.innerText = coinData[currentEmperor].fullName;
  birthName.innerText = coinData[currentEmperor].birthName;
  bornDied.innerText = coinData[currentEmperor].bornDied;
  reigned.innerText = coinData[currentEmperor].reigned;
  yearsReigned.innerText = coinData[currentEmperor].yearsReigned;
  howDied.innerText = coinData[currentEmperor].howDied;
  notableFor.innerHTML = notableBits(coinData[currentEmperor].notableFor);
});

rightButton.addEventListener("click", e => {
  if (currentEmperor < coinData.length - 1) {
    currentEmperor += 1;
  }
  coinObverse.src = coinData[currentEmperor].coinFile[0];
  coinReverse.src = coinData[currentEmperor].coinFile[1];
  coinLink.href = coinData[currentEmperor].coinLink;
  empID.innerText = coinData[currentEmperor].emperorId;
  name.innerText = coinData[currentEmperor].emperorName;
  name.href = coinData[currentEmperor].wikiLink;
  if (currentEmperor > 1) {
    minus2.style.visibility = "visible";
    minus2.innerText = coinData[currentEmperor - 2].emperorName;
  }
  if (currentEmperor > 0) {
    minus1.style.visibility = "visible";
    minus1.innerText = coinData[currentEmperor - 1].emperorName;
  }
  if (currentEmperor < coinData.length - 1) {
    plus1.innerText = coinData[currentEmperor + 1].emperorName;
  } else {
    plus1.style.visibility = "hidden";
  }
  if (currentEmperor < coinData.length - 2) {
    plus2.innerText = coinData[currentEmperor + 2].emperorName;
  } else {
    plus2.style.visibility = "hidden";
  }
  timePeriod.innerText = coinData[currentEmperor].period;
  fullName.innerText = coinData[currentEmperor].fullName;
  birthName.innerText = coinData[currentEmperor].birthName;
  bornDied.innerText = coinData[currentEmperor].bornDied;
  reigned.innerText = coinData[currentEmperor].reigned;
  yearsReigned.innerText = coinData[currentEmperor].yearsReigned;
  howDied.innerText = coinData[currentEmperor].howDied;
  notableFor.innerHTML = notableBits(coinData[currentEmperor].notableFor);
});
