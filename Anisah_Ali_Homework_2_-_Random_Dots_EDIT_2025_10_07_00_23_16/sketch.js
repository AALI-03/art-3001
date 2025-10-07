/*
 * Title: HW #2_Random Dots
 * Author: Anisah Ali
 * Date: 15 Sept AU2025
 * Instructions: Run script to generate a randomized image of dots.
 */

function setup() {
  createCanvas(400, 400);
  noLoop();        // Prevent continuous redrawing
  drawDots();      // Initial draw
}

function drawDots() {
  background(255); // Clear background to white
  noStroke();
  let numDots = 100;

  for (let i = 0; i < numDots; i++) {
    // random position
    let x = random(width);
    let y = random(height);
    // random size between 5 and 50 pixels
    let size = random(5, 50);
    // random color
    fill(random(255), random(255), random(255));
    //draw circle/dot
    ellipse(x, y, size, size);
  }
}

function draw() {
  drawDots();  // Called when redraw() is triggered
}

function mousePressed() {
  redraw();    // Triggers draw() to run once
}