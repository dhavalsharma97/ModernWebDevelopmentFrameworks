/*eslint-env browser*/

var persons = [
		["Steve Rogers", "Software Engineer", 4824],
		["Bucky Barnes", "Quality Engineer", 6343],
		["Tony Stark", "Web Developer", 3223],
		["Scott Lang", "Product Owner", 2233],
		["Peter Parker", "Manager", 9382],
]


function loadEmployee() {
    var htmlText = ""
    
	for (let i = 0; i < persons.length; i++) {
		const person = persons[i];
		htmlText += '<tr><td>' + person[0] + '</td><td>' + person[1] + '</td><td>' + person[2] + '</td><td><button class="del-btn" onclick="deleteEmployee(' + i + ')">Delete</button></td></tr>';
    }
    
	document.querySelector("tbody").innerHTML = htmlText;
	document.getElementById("count").innerHTML = persons.length;
}


function deleteEmployee(n) {
	persons.splice(n, 1);
	loadEmployee();
}


var submit = document.getElementById("submit");
submit.addEventListener("click", function () {
	const name = document.getElementById("name").value;
	const title = document.getElementById("title").value;
	const extension = document.getElementById("extension").value;
	
	if (!name) {
        document.querySelector("#name + small").style.display = "inline-block";
    }
    else {
        document.querySelector("#name + small").style.display = "none";
    }
	
	if (!title) {
        document.querySelector("#title + small").style.display = "inline-block";
    }
	else {
        document.querySelector("#title + small").style.display = "none";
    }
	
	if(!extension) {
        document.querySelector("#extension + small").style.display = "inline-block";
    }
	else {
        document.querySelector("#extension + small").style.display = "none";
    }

	if (!(name && title && extension)) {
        return;
    }
	
	persons.push([name, title, extension]);
	loadEmployee();
});

window.onload = function () {
	loadEmployee();
}