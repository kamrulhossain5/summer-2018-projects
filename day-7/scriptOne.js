var bubbles = []
var bubbleSize = 40


function setup() {
  createCanvas(500,400)
  
}

function draw() {
  background(0)

  for(var i = 0; i < bubbles.length; i++) {
    var currentBubble = bubbles[i]
    ellipse( currentBubble.x, currentBubble.y, currentBubble.size, currentBubble.size )

    currentBubble.x += random(-2, 2)
    currentBubble.y += random(-2, 2)
  }

}

function mouseClicked() {
  var startingLength = bubbles.length

  for(var i = bubbles.length - 1; i >= 0; i--) {
    var currentBubble = bubbles[i]
    var distance = dist(mouseX, mouseY, currentBubble.x, currentBubble.y)

    if (distance <= 20) {
      currentBubble.lifespan += 1;
      if (currentBubble.lifespan > 3) {
          currentBubble.splice(i, 1)
      }
      
    }
  }

  if (startingLength == bubbles.length) {
    var bubble = {
      x: random(width),
      y: random(height),
      size: 40,
      lifespan: 0
    }

    bubbles.push(bubble)
  }
}