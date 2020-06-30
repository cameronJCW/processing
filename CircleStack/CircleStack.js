class Orb {
  constructor(n, x, y, d) {
    this.n = n;
    this.x = x;
    this.y = y;
    this.d = d;
  }
}

let dim = 500;
let ang;
let count = 0;

function setup() {
  createCanvas(260, 260);
  frameRate(1);
  ang = PI / 4; //random(360);
}

function draw() {
  background(220);
  drawCirc((dim / 4), (dim / 4)+10, dim, count);
}

function drawCirc(tx, ty, ts, count) {
  if (ts > 25) {
    switch(count%2) {
      default:
        fill(color(255-count*15));
        tx -= 5;
        ty += 5;  
        break;
      case 0:
        fill(color(count*15));//ts/4));
        tx += 5;
        ty -= 5;
    }
    ellipse(tx, ty, ts / 2, ts / 2);
    count = count + 1;
    drawCirc(tx, ty, ts - 30, count);
  }
}
