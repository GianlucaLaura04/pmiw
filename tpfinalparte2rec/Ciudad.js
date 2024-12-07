class Ciudad {
  constructor() {
    this.posX = 0;
    this.posY = height - 200;
    this.vidas = 3; 
    this.imagenActual = imgCiudadIntacta; 
  }

 
  actualizarEstado(meteoritos) {
    for (let i = 0; i < meteoritos.length; i++) {
    
      if (meteoritos[i].posY > height - 190 && meteoritos[i].posY < height) {
        meteoritos[i].posY = random(-300, -80); 
        meteoritos[i].posX = random(50, width - 50);

       
        if (this.vidas > 0) {
          this.vidas--;
          this.actualizarImagen(); 
        }
      }
    }
  }

  
  actualizarImagen() {
    if (this.vidas === 2) {
      this.imagenActual = imgCiudadDañada;
    } else if (this.vidas === 1) {
      this.imagenActual = imgCiudadDestruida;
    }
  }

  
  dibujar() {
    fill(0,0,255);
    textSize(16);  
    textAlign(LEFT, TOP); 
    image(this.imagenActual, this.posX, this.posY, width, 100);
    text("Vidas: " + this.vidas, 10, 40);
  }
}
