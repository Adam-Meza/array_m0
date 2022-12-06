// For this project I organized Tyler the Creators albums by Title, Year, and wether or not it won the Grammy got Best Rap Album of the year.

var albums = ["Goblin", "Wolf", "Cherry Bomb", "Flower Boy", "IGOR", "CMYGL"];
var years = [2011, 2013, 2015, 2017, 2019, 2021];
var grammys = [false, false, false, false, true, true];

// If user goes to Tylers spotify they'll promote his most recent album, which they might do like:

console.log(years.at(-1));
console.log("Tyler, the Creator's most recent album", (albums.at (-1)), "was realeased in", (years.at (-1)))

// If user asks which albums won a grammy it might work something like

console.log("Tylers albums", albums.slice(4,6), "won Grammys");

//IF tyler makes a new album here refered to as "NEW" than they would add it to his discography like this

albums.push("NEW");
console.log("Check out Tyler, the Creator's new album:", (albums.pop()));

// This is my open ended part - If user was to ask if a certain albums, (in this case Cherry Bomb) won a grammy it might look like this
var specific = 2
console.log("Did", albums.at(specific), "win a grammy?")

if (grammys.at(specific)) {
    console.log("Yes it did!");
} else {
    console.log("No it didn't");
}

// EXTRA added after reading about For statements

for (var x = 0; x <= 5; x++) {
    console.log(albums.at (x), "was released in", years.at(x));


// couldn't get this code to work. going to focus on out standing hw.

} /*if (grammys.at (x)){
    console.log(albums.at (x), "won a grammy!");
} else {
    console.log(albums.at (x)), "didn't win a grammy. :("
}
*/  