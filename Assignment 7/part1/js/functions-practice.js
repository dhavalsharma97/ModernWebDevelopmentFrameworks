//STEP 1
function halfNumber(n) {
    "use strict";
	return n / 2;
}
window.console.log("Half of " + 5 + " is " + halfNumber(5) + ".");


//STEP 2
function squareNumber(n) {
    "use strict";
	return n * n;
}
window.console.log("The result of squaring the number " + 3 + " is " + squareNumber(3) + ".");


//STEP 3
function percentOf(a, b) {
    "use strict";
	return (a / b) * 100;
}
window.console.log(2 + " is " + percentOf(2, 4) + "% of " + 4 + ".");


//STEP 4
function findModulus(a, b) {
    "use strict";
	return (a % b);
}
window.console.log(findModulus(10, 4) + " is the modulus of " + 4 + " and " + 10 + ".");


//STEP 5
function sum(args) {
    "use strict";
    var arr = args.split(",");
    var sumOfNumbers = 0;
    
	for (var i = 0; i < arr.length; i++) {
		sumOfNumbers += Number(arr[i]);
	}
	
	return sumOfNumbers;
}

var numbers = window.prompt("Enter numbers seperated by comma(,):");
window.console.log("The sum of numbers " + numbers + " is " + sum(numbers) + ".");