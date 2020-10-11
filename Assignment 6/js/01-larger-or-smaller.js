// Initialize the variables
var firstNum, secondNum;

// Get the values from user
firstNum = parseInt(window.prompt("Enter the first number:"));
secondNum = parseInt(window.prompt("Enter the second number:"));

// Compare the values
if (firstNum > secondNum) {
    window.document.write("The larger number is " + firstNum);
}
else if (firstNum < secondNum) {
    window.document.write("The larger number is " + secondNum);
}
else {
    window.document.write("Both the numbers are equal!");
}