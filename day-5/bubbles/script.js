var bubbleSize = 40

var bubble1

function setup() {
  createCanvas(500,400)
  bubble1 = {
    x: random(0, width),
    y: random(0, height)
  };
}

function draw() {
  background(0)
  fill(250)

  ellipse(bubble1.x, bubble1.y, bubbleSize, bubbleSize)

  bubble1.x += random(-2, 2)
  bubble1.y += random(-2, 2)
}