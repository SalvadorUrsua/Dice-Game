document.querySelector(".roll").addEventListener("click", () => {
  const diceImg = [
    "dice1.png",
    "dice2.png",
    "dice3.png",
    "dice4.png",
    "dice5.png",
    "dice6.png",
  ];

  var diceLeft = diceImg[Math.floor(Math.random() * 6)];
  document.querySelector(".img1").setAttribute("src", "../images/" + diceLeft);
  var diceRight = diceImg[Math.floor(Math.random() * 6)];
  document.querySelector(".img2").setAttribute("src", "../images/" + diceRight);

  var flagWinner = document.querySelector("h1");
  if (diceLeft > diceRight) {
    flagWinner.textContent = "🚩Player 1 Wins!";
  } else if (diceLeft < diceRight) {
    flagWinner.textContent = "Player 2 Wins!🚩";
  } else {
    flagWinner.textContent = "It's a Draw!";
  }
});
