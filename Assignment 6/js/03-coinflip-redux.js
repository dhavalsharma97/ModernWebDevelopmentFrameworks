// Initialize the variables
var coinFlip;
var i;

// Loop over printing the results ten times
for (i = 0; i < 10; i += 1) {
    coinFlip = Math.round(Math.random());
    if (coinFlip === 0) {
        window.console.log("Heads");
    }
    else {
        window.console.log("Tails");
    }
}