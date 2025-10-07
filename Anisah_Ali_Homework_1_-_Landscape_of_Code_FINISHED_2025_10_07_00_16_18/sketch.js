/*
Homework #1
Name: Anisah Ali
Date: AU2025
Simple Description: portrait of mountainscape made from basic shapes.
Instructions: TBA
*/
//added for dreamweaver//
var canvas;
function windowResized() {
  //console.log('resized');
  resizeCanvas()
}
//
function setup() {
  createCanvas(400, 400);
  //added for dreamweaver//
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
//
  noStroke();

  // sky
  background(116, 147, 196);

  // sun
  fill(255, 204, 0);
  ellipse(70, 160, 80, 80);

  // mountains
  fill(132, 149, 176);
  triangle(50, 250, 150, 100, 250, 250);
  triangle(150, 250, 300, 120, 400, 250);

  // ground
  fill(77, 120, 73);
  rect(0, 250, 400, 150);

  // river
  fill(30, 144, 255);
  rect(150, 250, 100, 150);

  // trees
  drawTree(80, 260);
  drawTree(320, 270);
}

function drawTree(x, y) {
  // trunk
  fill(139, 69, 19);
  rect(x - 5, y, 10, 40);
  // leaves
  fill(55, 89, 52);
  ellipse(x, y - 10, 40, 40);
}
