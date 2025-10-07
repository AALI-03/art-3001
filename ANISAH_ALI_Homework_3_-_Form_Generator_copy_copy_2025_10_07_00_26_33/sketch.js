/*
 *Title: HW #3_FormGenerator
 *Author: Anisah Ali
 *Date: 17 Sept AU2025
 *Simple Description: Stretch the House!
 */

let cloudOffset = 0;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  noCursor();
}

function draw() {
  background(180, 220, 250);

  // Grass thickness mapped to mouse position
  let grassThickness = map(mouseX + mouseY, 0, width + height, 40, 160);
  grassThickness = constrain(grassThickness, 40, 160);

  // Draw grass anchored to bottom of canvas
  let grassTop = height - grassThickness;
  fill(100, 200, 100);
  rect(width / 2, grassTop + grassThickness / 2, width, grassThickness);

  // House dimensions mapped but stopped when grass is max
  let houseW = map(mouseX, 0, width, 60, 200);
  let houseH = map(mouseY, 0, height, 60, 200);
  houseW = constrain(houseW, 60, width - 40);
  houseH = constrain(houseH, 60, height - 40);

  // Roof height
  let roofH = houseH / 2;

  // House base should always sit on grass
  let baseY = grassTop; // top of grass
  let cy = baseY - houseH / 2; // center y of house
  let cx = width / 2;

  // House body
  fill(200, 160, 120);
  rect(cx, cy, houseW, houseH);

  // Roof
  fill(150, 80, 60);
  triangle(
    cx - houseW / 2, cy - houseH / 2,
    cx + houseW / 2, cy - houseH / 2,
    cx, cy - houseH / 2 - roofH
  );

  // Window
  let winSize = houseW / 4;
  fill(255);
  rect(cx, cy, winSize, winSize);

  // Clouds (scaled to move with house + grass //)
  let cloudYShift = map(grassThickness, 40, 160, 0, -50);
  let cloudScale = map(houseH, 60, 200, 0.8, 1.5);

  //big cloud movement
  drawCloud((cloudOffset % (width + 100) - 50), 80 + cloudYShift, 60 * cloudScale);
  //little cloud movement
  drawCloud(((cloudOffset * 0.7) % (width + 200) - 100), 130 + cloudYShift, 40 * cloudScale);
  cloudOffset += 0.5;
}

//draw clouds NOW!!!
function drawCloud(x, y, size) {
  noStroke();
  fill(255, 240);
  ellipse(x, y, size, size * 0.6);
  ellipse(x + size * 0.4, y - 10, size * 0.8, size * 0.5);
  ellipse(x - size * 0.4, y - 10, size * 0.8, size * 0.5);
}