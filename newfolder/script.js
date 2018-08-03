
var racerSize = 40;
var startX = 0;
var startY = 100;
var speed = 2;

function setup() {
  createCanvas(600, 500);
}

function draw() {
  background(200, 225, 255);

  strokeWeight(4);
  stroke(0)
  line(580, 0, 580, height);


  strokeWeight(1)

  ellipse(startX, startY, racerSize, racerSize);
  ellipse(startX, startY * 2, racerSize, racerSize);
  ellipse(startX, startY * 3, racerSize, racerSize);
  ellipse(startX, startY * 4, racerSize, racerSize);
  
  startX = startX + 2;
}