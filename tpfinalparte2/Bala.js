class Bala {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.miColor = color(80);
    this.disparada = false;
  }

  disparar() {
    this.disparada = true;
  }

  dibujar() {
    if (this.disparada) {
      fill(this.miColor);
      image(imgBala, this.posX, this.posY, 30, 30);
      this.mover();
      if (this.posY < 0) {
        this.disparada = false; 
      }
    }
  }

  mover() {
    this.posY -= 5;
  }
}
