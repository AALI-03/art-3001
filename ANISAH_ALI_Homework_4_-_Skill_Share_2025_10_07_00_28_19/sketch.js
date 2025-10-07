/*
 *Title: HW #4_Skill Share
 *Author: Anisah Ali
 *Date: 10 Sept AU2025
 *Simple Description: Demo to explain the "constrain()" function.
 */

//This function constrains values within it to remain within a specified range.//

function setup() {
  createCanvas(400, 200);
}

function draw() {
  background(240);

  // Sets the ellipse to remained CONSTRAINED to the mouse's x-position without going off screen!! //
  let constrainedX = constrain(mouseX, 0, width);

  // Draws the circle, then tells it to follow the mouse. "constrainedX" is our variable for the original function //
  fill(100, 200, 250);
  ellipse(constrainedX, height / 2, 50, 50);
  // example of what happens when constraint() is NOT used --> ellipse(mouseX, height/2, 50, 50);

  // Text explanation, ignore
  fill(0);
  textSize(14);
  text("Move your mouse left and right!", 10, 20);
  text("constrain(mouseX, 0, width) keeps the circle inside", 10, height - 10);
}
