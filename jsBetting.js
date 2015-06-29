
function bettingGame() {
var pot = 100

  var bet;
  alert("Rules of the game: if you guess within 1 of the number, you get your money back. If you guess right, you get double. Otherwise, you lose that bet")
  while (bet != 5 && bet != 10 ){
  var bet  = prompt("You start with 100 dollars. Place a bet of 5 or 10.");
};

while (pot > 5) {
  var guess = prompt("Enter a number between 1-10");
  var number = Math.floor(Math.random() * 10 + 1);
  if (guess === number) {
    pot += (bet * 2)
    alert("You guessed right! Your pot is now " + pot)
  }
  else if (guess == (number +1) || guess == (number - 1)) {
    alert("Close! The number was "+ number+ " Your pot is still " + pot)
  }
  else {
    pot -= bet;
    alert("Nope. The number was "+ number+ " Your pot is now " + pot)
  };
};

if (pot <= 0) {
  alert("Sorry you lost all your money")
};
};

console.log(bettingGame());
