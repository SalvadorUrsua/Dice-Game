document.querySelector(".roll").addEventListener("click", () => {
  const diceImg = [
    "dice1.png",
    "dice2.png",
    "dice3.png",
    "dice4.png",
    "dice5.png",
    "dice6.png",
  ];

  document.querySelector(".img1").src = "../images/" + diceImg[Math.floor(Math.random() * 6)];
  document.querySelector(".img2").src = "../images/" + diceImg[Math.floor(Math.random() * 6)];

  var flagWinner = document.querySelector("h1");
  if (diceLeft > diceRight) {
    flagWinner.textContent = "🚩Player 1 Wins!";
  } else if (diceLeft < diceRight) {
    flagWinner.textContent = "Player 2 Wins!🚩";
  } else {
    flagWinner.textContent = "It's a Draw!";
  }
});
