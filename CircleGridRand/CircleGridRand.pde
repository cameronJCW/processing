/**
 * Grid containing circles with randomly oriented inner circles
 *
 */ 
int dim = 100;
int cols = 5;
int rows = 5;
int orbC = 6;
Orb[][] orbs = new Orb[rows][cols]; //<>//

void setup() {
  size(500,500);
  for (int i = 0; i < rows; i++) { //y
    for (int j = 0; j < cols; j++) { //x
      int n = (i * j) + j;
      int x = (j * dim) + (dim/2);
      int y = (i * dim) + (dim/2);
      int d = dim;
      int c = 0;
      Orb a = null;
      int lim = 90;
      int r;
      //while (c < orbC && lim > 15) {
      while (lim > 15) {
        r = int(random(lim - 30,lim));
        if (r < 0) { break; }
        println("i:" +i+ " j:" +j+ " r:"+r);
        a = new Orb(n, x, y, d-r, a);
        lim -= lim - r;
        println("c:"+c +" lim= " + lim);
        c++;
      }
      orbs[i][j] = new Orb(n, x, y, d-5, a); //<>//
    }
  }
}

void draw() {
   background(220);
   for(int i = 0; i < rows; i++) {
     for(int j = 0; j < cols; j++) {
       //orbs[i][j].draw();
       Orb curOrb = orbs[i][j];
       while (curOrb != null) {
         curOrb.draw();
         curOrb = curOrb.c;
       }
     }
   }
}
