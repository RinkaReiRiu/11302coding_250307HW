/*
function setup() { // setup() runs once
  createCanvas(windowWidth, windowHeight); // create a canvas that is the size of the window
  setGradient(0, 0, windowWidth, windowHeight, color(125, 86, 173), color(23, 0, 51), 'Y'); // set the gradient background
}

function draw() { // draw() runs in a loop
}

function windowResized() { // windowResized() runs when the window is resized
  resizeCanvas(windowWidth, windowHeight); // resize the canvas to the new window size
}

function setGradient(x, y, w, h, c1, c2, axis) { // create greadient color
  noFill();
  if (axis === 'Y') {
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  }
}
*/

let h = 360; // set the hue to 360
let s = 100; // set the saturation to 100
let b = 100; // set the brightness to 100

function setup() { // setup() runs once
  createCanvas(windowWidth, windowHeight); // create window size canvas
  colorMode(HSB, 360, 100, 100); // set the color mode to HSB
  background(0,0,80); // gray background
}

function draw() { // draw() runs in a loop
  //h = (h + 10) % 360; // set the hue to a value between 0 and 360
  //h = ( 360 - (mouseX / windowWidth) * 360 ) % 360; // h changes with mouseX
  fill(h, s, b); // set the fill color
  //ellipse(mouseX, mouseY, 50, 50); // draw an ellipse at the mouse position

  // for (let i = 0; i < 10; i++) { // draw 10 ellipses  
  //   h = 360 * i / 10;
  //   s = 100 * mouseY / windowHeight;
  //   b = 100 * mouseX / windowWidth;
  //   fill(h, s, b); // set the fill color
  //   ellipse(width * i / 10, height/2, 50); // line of circles
  // }

  for (let i = 0; i < width; i=i+50) { // draw ellipses x
    for (let j = 0; j < height; j=j+50) { // draw ellipses y
      h = 180 + 180 * sin((frameCount + i + j) * 0.01);
      s = 100;
      b = 100;
      fill(h, s, b); // set the fill color
      ellipse(i, j, 50); // line of circles
    }
  }
}

/*
function setup(){
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
}

function draw(){
  background(0, 0, 100); // 白色背景
  fill(0,0,0,20); // 黑色半透明
  textSize(72);
  textAlign(CENTER,CENTER); // 文字置中
  text('TKUET', width/2, height/2); // 文字在正中間生成
}
*/