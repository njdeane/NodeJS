// this is using an internal nodeJS module 
// const fs = require("fs");

// fs.copyFileSync("file1.txt", "file2.txt");


// This line incorporates an external packate - the NPM superhero module into the project
var superheroes = require("superheroes");
var superVillains = require("supervillains");

// These lines use a function from the NPM package (info on NPM superhero package page), stores it in a variable that we can then run from terminal to get random superhero names.
var mySuperHeroName = superheroes.random();
var mySuperVillainName = superVillains.random();
console.log(mySuperHeroName);
console.log(mySuperVillainName);

// the console.logs have to be at the bottom, before I had the console.log for hero and vilain underneath each so the code would execute the console.log to the terminal before being able to get to the next variable. having the .logs at the bottom allows both hero and villain to be printed to the terminal.
