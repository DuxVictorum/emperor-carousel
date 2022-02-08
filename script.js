const leftButton = document.querySelector(".left-button");
const rightButton = document.querySelector(".right-button");
const coinImage = document.querySelector(".coin-image");

leftButton.addEventListener("click", e => {
  coinImage.src = "assets/aureus_Nero21.jpg";
});
