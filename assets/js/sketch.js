  var rad = 60;        // Width of the shape
  var xpos;
  var ypos;    // Starting position of shape

  var xspeed = 20;  // Speed of the shape
  var yspeed = 20;  // Speed of the shape

  var xdirection = 1;  // Left or Right
  var ydirection = 1;  // Top to Bottom
  var canvas;

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  noStroke();
  frameRate(60);
  ellipseMode(RADIUS);
  // Set the starting position of the shape
  xpos = width/2;
  ypos = height/2;
}



function draw() {
  background(255,188,0);

  // Update the position of the shape
  xpos = xpos + ( xspeed * xdirection );
  ypos = ypos + ( yspeed * ydirection );

  // Test to see if the shape exceeds the boundaries of the screen
  // If it does, reverse its direction by multiplying by -1
  if (xpos > width-rad || xpos < rad) {
    xdirection *= -1;
  }
  if (ypos > height-rad || ypos < rad) {
    ydirection *= -1;
  }

  // Draw the shape
  fill(68,62,61);
  ellipse(xpos, ypos, rad, rad);

}
