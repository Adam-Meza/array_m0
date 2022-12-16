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


console.log("----------------------------------")
// This is my open ended part 

// This console logs whether a certain album (in this case Cherry Bomb) won a grammy it might look like this:

var specific = 2
console.log("Did", albums.at(specific), "win a grammy?")

if (grammys.at(specific)) {
    console.log("Yes it did!");
} else {
    console.log("No it didn't");
}

console.log("----------------------------------")
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

console.log("----------------------------------")

// this is jsut for fun. what can i build with the few tools i have? 
// also I can get new ones if i really want it doesnt matter

var albums = ["Goblin", "Wolf", "Cherry Bomb", "Flower Boy", "IGOR", "CALL ME IF YOU GET LOST"];
var years = [2011, 2013, 2015, 2017, 2019, 2021];
var grammys = [false, false, false, false, true, true];

var goblin = {
    name: "Goblin",
    grammy: false,
    year: 2011,
    hat: true
}
var wolf = {
    name: "Wolf",
    grammy: false,
    year: 2013,
    hat: true
}
var cherryBomb = {
    name: "CHerry Bomb",
    grammy: false,
    year: 2015,
    hat: false
}
 var flower = {
    name: "Flower Boy",
    grammy: false,
    year: 2017,
    hat: true
 }
 var igor = {
    name: "IGOR",
    grammy: true,
    year: 2019,
    hat: false
 }
 var CMYGL = {
    name: "CALL ME IF YOU GET LOST",
    grammy: true,
    year: 2021,
    hat: true
 }

var ablumArray = [goblin, wolf, cherryBomb, flower, igor, CMYGL];

console.log(Object.keys(ablumArray.at(2)))
console.log(Object.values(ablumArray.at(3)))
console.log(ablumArray.at(1).name)

// this next part is me trying to build code that checks wether or not
// tyler the creator wore a hat on a particular album

for (i = 0; i < ablumArray.length; i++) {
    if (ablumArray.at(i).hat) {
    console.log("Tyler wore a hat on the cover of", ablumArray.at(i).name);
    }
}

// turn it into a function

function checkHat(album) {
    if (album.hat) {
        console.log("TYLER WORE A HAT ON THE COVER OF", album.name)
    }
}

checkHat(wolf)
checkHat(cherryBomb)

// what else???

// make a for loop function so i dont have to write it all the time - 

function forLoop(x) {
    for ()
}