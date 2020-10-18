//STEP 1
var favMovies = ["Captain America Civil War", "Avengers Endgame", "Mission Impossible Fallout", "Skyfall", "13 Hours"];
window.console.log(favMovies[1]);
window.console.log("\n");


//STEP 2
var movies = new Array(5);
movies[0] = "Captain America Civil War";
movies[1] = "Avengers Endgame";
movies[2] = "Mission Impossible Fallout";
movies[3] = "Skyfall";
movies[4] = "13 Hours";

window.console.log(movies[0]);
window.console.log("\n");


//STEP 3
var movies = new Array(5);
movies[0] = "Captain America Civil War";
movies[1] = "Avengers Endgame";
movies[2] = "Mission Impossible Fallout";
movies[3] = "Skyfall";
movies[4] = "13 Hours";

movies.splice(2, 0, "Knives Out")
window.console.log(movies.length);
window.console.log("\n");


//STEP 4
var movies = [];
movies[0] = "Captain America Civil War";
movies[1] = "Avengers Endgame";
movies[2] = "Mission Impossible Fallout";
movies[3] = "Skyfall";
movies[4] = "13 Hours";

movies.splice(0, 1);
window.console.log(movies);
window.console.log("\n");


//STEP 5
var movies = [];
movies[0] = "Captain America Civil War";
movies[1] = "Avengers Endgame";
movies[2] = "Mission Impossible Fallout";
movies[3] = "Skyfall";
movies[4] = "13 Hours";
movies[5] = "Knives Out";
movies[6] = "John Wick";

for (let i = 0; i < movies.length; i++) {
	window.console.log(movies[i]);
}
window.console.log("\n");


//STEP 6
var movies = [];
movies[0] = "Captain America Civil War";
movies[1] = "Avengers Endgame";
movies[2] = "Mission Impossible Fallout";
movies[3] = "Skyfall";
movies[4] = "13 Hours";
movies[5] = "Knives Out";
movies[6] = "John Wick";

for (var i in movies) {
	window.console.log(movies[i]);
}
window.console.log("\n");


//STEP 7
var movies = [];
movies[0] = "Captain America Civil War";
movies[1] = "Avengers Endgame";
movies[2] = "Mission Impossible Fallout";
movies[3] = "Skyfall";
movies[4] = "13 Hours";
movies[5] = "Knives Out";
movies[6] = "John Wick";

movies.sort();

for (var i in movies) {
	window.console.log(movies[i]);
}
window.console.log("\n");


//STEP 8
var movies = [];
movies[0] = "Captain America Civil War";
movies[1] = "Avengers Endgame";
movies[2] = "Mission Impossible Fallout";
movies[3] = "Skyfall";
movies[4] = "13 Hours";
movies[5] = "Knives Out";
movies[6] = "John Wick";

var leastFavMovies = [];
leastFavMovies[0] = "Girl on the third floor";
leastFavMovies[1] = "Operation Red Sea";
leastFavMovies[2] = "Code 8";

window.console.log('Movies I like:');
window.console.log('');
for (let i = 0; i < movies.length; i++) {
	window.console.log(movies[i]);
}

window.console.log('Movies I regret watching:');
window.console.log('');
for (let i = 0; i < leastFavMovies.length; i++) {
	window.console.log(leastFavMovies[i]);
}
window.console.log("\n");


//STEP 9
var movies = [];
movies[0] = "Captain America Civil War";
movies[1] = "Avengers Endgame";
movies[2] = "Mission Impossible Fallout";
movies[3] = "Skyfall";
movies[4] = "13 Hours";
movies[5] = "Knives Out";
movies[6] = "John Wick";

var leastFavMovies = [];
leastFavMovies[0] = "Girl on the third floor";
leastFavMovies[1] = "Operation Red Sea";
leastFavMovies[2] = "Code 8";

movies = movies.concat(leastFavMovies);
movies.sort().reverse();

for (let i = 0; i < movies.length; i++) {
	window.console.log(movies[i]);
}
window.console.log("\n");


//STEP 10
var movies = [];
movies[0] = "Captain America Civil War";
movies[1] = "Avengers Endgame";
movies[2] = "Mission Impossible Fallout";
movies[3] = "Skyfall";
movies[4] = "13 Hours";
movies[5] = "Knives Out";
movies[6] = "John Wick";

var leastFavMovies = [];
leastFavMovies[0] = "Girl on the third floor";
leastFavMovies[1] = "Operation Red Sea";
leastFavMovies[2] = "Code 8";

movies = movies.concat(leastFavMovies);
movies.sort().reverse();

window.console.log(movies.pop());