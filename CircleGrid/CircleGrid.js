/* n : number
   x : x coord
   y : y coord
   d : diameter
   p : parent orb
*/
class Orb {
  constructor(n, x, y, d, c) {
    this.n = n;
    this.x = x;
    this.y = y;
    this.d = d;
    this.c = c;
  }
  draw() {
    circle(this.x, this.y, this.d);
  }
  update() {
    this.x = this.x + 1;
    if (this.x >= 50) {
      
    }
  }
}

let dim = 100;
let rows = 5;
let cols = 5;
let count = 0;
let cn = 4;
let orbs = [];

function setup() {
  createCanvas(500, 500);
  frameRate(1);

  let index = 0;
  for (let i = 0; i < cols; i++) { //y
    orbs[i] = [];
    for (let j = 0; j < rows; j++) { //x
      n = (i * j) + j;
      x = (j * dim) + (dim/2);
      y = (i * dim) + (dim/2);
      d = dim;
      a1 = new Orb(n, x, y, d-40, null);
      a2 = new Orb(n, x, y, d-60, a1);
      orbs[i][j] = new Orb(n, x, y, d-20, a2);
    }
  }
}

function draw() {
  background(220);
  //drawCirc((dim / 4), (dim / 4), dim, cn);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let curOrb = orbs[i][j];
      while (curOrb.c != null) {
        curOrb.draw();
        curOrb = curOrb.c;
      }
    }
  }
}
