class Orb{
  int n;
  int x;
  int y;
  int d;
  Orb c;
  Orb(int n, int x, int y, int d, Orb c) {
    this.n = n;
    this.x = x;
    this.y = y;
    this.d = d;
    if(c!=null){
      this.c = c;
    }
  }
  Orb(int n, int x, int y, int d) {
    this.n = n;
    this.x = x;
    this.y = y;
    this.d = d;
  }
  void draw() {
    circle(this.x, this.y, this.d); 
  }
  void update() {
    this.x = this.x + 1; 
  }
}
