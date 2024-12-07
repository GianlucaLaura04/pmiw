class Meteorito {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.vida = true;
    this.velocidad = 0.5;
  }

  dibujar() {
    if (this.vida) {
      fill(255, 0, 0);
      image(imgMeteorito,this.posX-10, this.posY, 50, 50);
      this.posY += this.velocidad;

      if (this.posY > height) {
        this.posY = random(-300, -80);
        this.posX = random(50, width - 50);
      }
    }
  }
}
