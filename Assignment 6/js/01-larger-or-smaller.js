// Initialize the variables
var firstNum, SecondNum;

// Get the values from user
firstNum = parseInt(window.prompt("Enter the first number:"));
SecondNum = parseInt(window.prompt("Enter the second number:"));

// Compare the values
if (firstNum > SecondNum) {
    window.document.write("The larger number is " + firstNum);
}
else if (firstNum < SecondNum) {
    window.document.write("The larger number is " + SecondNum);
}
else {
    window.document.write("Both the numbers are equal!");
}