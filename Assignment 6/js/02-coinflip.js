// Initialize the coin flip
var coinFlip;
coinFlip = Math.round(Math.random());

// Initialize the choice of the user
var choice;
choice = (window.prompt("Choose Heads or Tails:")).toLowerCase();

// Initialize the result
var result;

// Compare the coin flip and the user choice
if (choice === "heads" || choice === "tails") {
    if (coinFlip === 0) {
        result = "heads"
        if (choice === result) {
            window.alert("The flip was heads and you chose heads...you win!");
        }

        else {
            window.alert("The flip was heads and you chose tails...you lose!");
        }

    }
    else if (coinFlip === 1) {
        result = "tails"
        if (choice === result) {
            window.alert("The flip was tails and you chose tails...you win!");

        }
        else {
            window.alert("The flip was tails and you chose heads...you lose!");

        }
    }
}
else {
    window.alert("Please enter a valid choice: Heads or Tails.")
}