// For this project I organized Tyler the Creators albums by title, year, and whether or not it won the Grammy for Best Rap Album of the year:

var albums = ["Goblin", "Wolf", "Cherry Bomb", "Flower Boy", "IGOR", "CALL ME IF YOU GET LOST"];
var years = [2011, 2013, 2015, 2017, 2019, 2021];
var grammys = [false, false, false, false, true, true];

// This console logs his most recent album, and when it was relased:

console.log(years.at(-1));
console.log("Tyler, the Creator's most recent album", (albums.at (-1)), "was realeased in", (years.at (-1)))

// This console logs the names of the albums that won Grammys:

console.log("Tylers albums", albums.slice(4,6), "won Grammys");

//This pushes a new album to his discography:

albums.push("NEW");
console.log("Check out Tyler, the Creator's new album:", (albums.pop()));

// This is my open ended part 

// This console logs whether a certain album (in this case Cherry Bomb) won a grammy it might look like this:

var specific = 2
console.log("Did", albums.at(specific), "win a grammy?")

if (grammys.at(specific)) {
    console.log("Yes it did!");
} else {
    console.log("No it didn't");
}

// EXTRA, added after reading about For statements.

//This console logs all his projects and the year they were released. 

for (var x = 0; x < albums.length; x++) {
    console.log(albums.at (x), "was released in", years.at(x));}

//This console logs whether or not a project won a Grammy or not.

for (x = 0; x < grammys.length; x++){
    if (grammys.at (x)) {
    console.log(albums.at (x), "won a grammy!");
} else {
    console.log(albums.at (x), "didn't win a grammy. :(");
}}

