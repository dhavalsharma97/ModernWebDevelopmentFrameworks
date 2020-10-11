// Initializing the variables
var i;
var j;

// Looping to create the triangle
for (i = 1; i <= 7; i += 1) {
    var output = "";
    for (j = 1; j <= i; j += 1) {
        output += "#";
    }
    window.console.log(output);
}