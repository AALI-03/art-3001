/*
Homework #8: Experimental Clock
Name: Anisah Ali
Date: AU2025
Simple Description: 
Instructions: Watch the seconds tick by on the structure stuck in time.
*/
let images = []; //Arrary to list/store images in for later
let currentImageIndex=0;
let savedTime;
let totalTime=3000 // measured in milliseconds. 3000 milliseconds = 3 seconds. might change later.
var gif_createImg; //for gifs to load AND play
//

function preload() { //loading images to use here
//**NOTE**, images are bigger than set canvas size only NOW because i needed placeholders for the gifs that are going to replace these later on. 10-15-2025//
  gif_createImg = createImg('homework 8 experimental clock art here.gif')
  // add more here (if needed)
}

function setup() {
  createCanvas(600, 600);
   gif_createImg.position(0, 0); // places atop canvas instead of adding below
  gif_createImg.size(width, height);
  savedTime = millis(); // starts timer
  let speedMultiplier = 1; // <--- Change this to speed up or slow down the gif

}

function draw() {
  background(220);

  let passedTime = millis() - savedTime;
  if (passedTime > totalTime) {
    currentImageIndex = (currentImageIndex + 1) % images.length; // Move to the next image, loop if at the end
  savedTime = millis(); // Reset the timer
  } // Display the current image
  image(images[currentImageIndex], 0, 0, width, height); // Display image covering the canvas*

}