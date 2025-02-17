class Personaje {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.vida = 3;
    this.miColor = color(0, 255, 0);
    this.bala = new Bala(posX, posY);
    this.municion = 20; 
  }

  dibujar() {
    fill(255);
    textSize(16);  
    textAlign(LEFT, TOP); 
    this.bala.dibujar();
    fill(this.miColor);
    image(imgPersonaje,this.posX+15, this.posY, 80, 80);
    fill(255);
    textSize(16);
    text("Munición: " + this.municion, 10, 20);
  }

  movimientoIzq() {
    this.posX -= 5;
  }

  movimientoDer() {
    this.posX += 5;
  }

  dispararBala() {
    if (this.municion > 0 && !this.bala.disparada) {
      this.bala = new Bala(this.posX + 25, this.posY);
      this.bala.disparar();
      this.municion--; 
    }
  }
}
