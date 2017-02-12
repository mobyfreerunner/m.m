var objSize = 300;
var brushSize = 1.5;
var dis = 300;
var canvas;

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  noStroke();
  frameRate(30);
  rectMode(CENTER);
  ellipseMode(CENTER);
}

function draw() {
  background(255,188,0);
  //drawCirc();
  drawRect();
}

function drawRect(){
  for (var x = 0; x <= width+dis; x = x + dis) {
    for (var y = 0; y <= height+dis; y = y + dis) {

      var d = dist(x, y, mouseX, mouseY);
      var maxDist = dist(0, 0, width/2, height/2);
      var size = map(d, 0, maxDist, objSize, 0);

      noStroke();
      fill(254,200,69);
      rect(x, y, size, size);
    }
  }
}

function drawCirc(){
  for (var x = 0; x <= width+dis; x = x + dis) {
    for (var y = 0; y <= height+dis; y = y + dis) {

      var d = dist(x, y, mouseX, mouseY);
      var maxDist = dist(0, 0, width/2, height/2);
      var size = map(d, 0, maxDist, objSize, 0);

      noStroke();
      fill(254,200,69);
      ellipse(x, y, size, size);
    }
  }
}
