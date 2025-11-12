/*
Project 1: Line by Line
Name: Anisah Ali
Date: Nov. 7th, AU2025
Description: Constellation Randomizer! Click to generate a new constellation.
*/

let stars = [];
let numStars = 400;
let connectDist = 180;

function setup() {
  createCanvas(2100, 2100);
  colorMode(HSB, 360, 100, 100, 1);
  noLoop();
  generateConstellation();
}

function draw() {
  background(230, 40, 6); // deep night blue
  noStroke();

  // Draw stars
  for (let s of stars) {
    fill(s.hue, 40, 100, 0.9);
    ellipse(s.x, s.y, s.size);
  }

  // Draw constellation lines
  strokeWeight(1.2);
  for (let i = 0; i < stars.length; i++) {
    for (let j = i + 1; j < stars.length; j++) {
      let a = stars[i];
      let b = stars[j];
      let d = dist(a.x, a.y, b.x, b.y);
      if (d < connectDist && random() < 0.03) {
        stroke((a.hue + b.hue) / 2, 40, 90, 0.5);
        line(a.x, a.y, b.x, b.y);
      }
    }
  }
}

// Create a new random constellation arrangement
function generateConstellation() {
  stars = [];
  for (let i = 0; i < numStars; i++) {
    let x = random(width);
    let y = random(height);
    let size = random(1.5, 5);
    let hue = random([200, 220, 240, 260]);
    stars.push({ x, y, size, hue });
  }
  redraw();
}

// Click to generate a new sky view
function mousePressed() {
  generateConstellation();
}