// Initialize the variables
var coinFlip;

// Loop till we get tails
do {
    coinFlip = Math.round(Math.random());
    if (coinFlip === 0) {
        window.console.log("Heads");
    }
    else {
        window.console.log("Tails");
    }
} while (coinFlip !== 1);