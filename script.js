let computer = document.querySelector(".computer img");
let player = document.querySelector(".player img");
let computerPoints = document.querySelector(".computerPoints");
let playerPoints = document.querySelector(".playerPoints");
let options = document.querySelectorAll(".options button");

options.forEach((option) => {
  option.addEventListener("click", () => {
    computer.classList.add("shakeComputer");
    player.classList.add("shakePlayer");

    setTimeout(() => {
      computer.classList.remove("shakeComputer");
      player.classList.remove("shakePlayer");

      let playerChoice = option.innerHTML;
      player.src = "images/" + playerChoice + "Player.png";

      const choice = ["STONE", "PAPER", "SCISSORS"];
      let arrayNo = Math.floor(Math.random() * 3);
      let computerChoice = choice[arrayNo];
      computer.src = "images/" + computerChoice + "Computer.png";

      console.log(`Player Choice: ${playerChoice}`);
      console.log(`Computer Choice: ${computerChoice}`);

      let cPoints = parseInt(computerPoints.innerHTML);
      let pPoints = parseInt(playerPoints.innerHTML);

      if (playerChoice === "STONE") {
        if (computerChoice === "PAPER") {
          computerPoints.innerHTML = cPoints + 1;
        } else if (computerChoice === "SCISSORS") {
          playerPoints.innerHTML = pPoints + 1;
        }
      } else if (playerChoice === "PAPER") {
        if (computerChoice === "SCISSORS") {
          computerPoints.innerHTML = cPoints + 1;
        } else if (computerChoice === "STONE") {
          playerPoints.innerHTML = pPoints + 1;
        }
      } else if (playerChoice === "SCISSORS") {
        if (computerChoice === "STONE") {
          computerPoints.innerHTML = cPoints + 1;
        } else if (computerChoice === "PAPER") {
          playerPoints.innerHTML = pPoints + 1;
        }
      }
    }, 900);
  });
});