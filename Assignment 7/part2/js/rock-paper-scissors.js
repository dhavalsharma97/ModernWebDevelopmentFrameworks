function rockPaperScissor() {
    var userChoice = window.prompt("Enter Rock, Paper or Scissors:").toLowerCase();
    
	if (!(userChoice == "rock" || userChoice == "paper" || userChoice == "scissors")) {
		alert("Incorrect choice! Please choose one of the given options.")
		return rockPaperScissor();
	}

	var computerChoice = Math.round(Math.random() * 100);
	computerChoice = (computerChoice <= 33) ? "rock" : ((computerChoice >= 67) ? "scissors" : "paper");

	var choice = "You chose " + userChoice + ", Computer chose " + computerChoice + ". ";
	var win = "You win!";
    var lose = "You lose!";
    var tie = "It's a tie!"

	if (computerChoice == userChoice) {
        window.alert(choice + tie);
        return rockPaperScissor()
	}
	else if (computerChoice == "rock") {
		(userChoice == "paper") ? window.alert(choice + win) : window.alert(choice + lose);
	}
	else if (computerChoice == "paper") {
		(userChoice == "rock") ? window.alert(choice + lose) : window.alert(choice + win);		
	}
	else if (computerChoice == "scissors") {
		(userChoice == "rock") ? window.alert(choice + win) : window.alert(choice + lose);		
	}
}

rockPaperScissor();