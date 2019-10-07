let x;
let y;
let diameter;

function setup() {
  createCanvas(600, 600);
  background(100);

  x = 0;
  y = height/2;
  diameter = 10;
}


function draw() {
  // clear background every frame
  background(100);  // ***

  // update the variables
  x += 5;            // x = x + 2;
  diameter ++;  // diameter = diameter + 1;

  // display
  fill(255,0,0);
  ellipse(x, y, diameter, diameter);
}
