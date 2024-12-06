class Boton {
  constructor(posX, posY, ancho, alto, texto, accion) {
    this.posX = posX;
    this.posY = posY;
    this.ancho = ancho;
    this.alto = alto;
    this.texto = texto;
    this.accion = accion; // Función a ejecutar al hacer clic
  }

  dibujar() {
    fill(0, 255, 0);
    rect(this.posX, this.posY, this.ancho, this.alto);
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(16);
    text(this.texto, this.posX + this.ancho / 2, this.posY + this.alto / 2);
  }

  estaClickeado(posMouseX, posMouseY) {
    return posMouseX > this.posX && posMouseX < this.posX + this.ancho && posMouseY > this.posY && posMouseY < this.posY + this.alto;
  }
}
