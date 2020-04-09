let x = 0;
let y = 0;
let z = 0;
let tsize = 20;
let codeK = 0;

function setup() {

  createCanvas(200, 200);
}

function draw() {
  // fill('white');
  // rect(0,0,200,200);
  createCanvas(200, 200);
  textSize(tsize);
  fill(x, y, z);
  text(':P', 25, tsize);
}

function mouseReleased() {
  x = random(0, 255);
  y = random(0, 255);
  z = random(0, 255);

  return false;
}

function keyPressed() {
  codeK = 0;
  tsize = 20;

  if (keyCode > 48 && keyCode < 58) {
    codeK = 1 + ((keyCode - 49) * 0.8);

    tsize *= codeK;
  }

  return false;
}