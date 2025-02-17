class Pantalla {
  constructor() {
    this.estado = "inicio"; 

    this.botonJugar = new Boton(width / 2 - 75, height / 2 - 25, 150, 50, "Jugar", this.iniciarJuego);
    this.botonCreditos = new Boton(width / 2 - 75, height / 2 + 50, 150, 50, "Créditos", this.irACreditos);
    this.botonRegresar = new Boton(width / 2 - 75, height / 2 + 50, 150, 50, "Regresar", this.irAInicio);
  }

  iniciarJuego() {
    this.estado = "juego";
    this.juego = new Juego();
    if (!musicaIniciada) {
      musicaJuego.loop();
      musicaIniciada = true;
    }
  }

  irACreditos() {
    this.estado = "creditos";
  }

  irAInicio() {
    this.estado = "inicio";
  }

  mostrar() {
    if (this.estado === "inicio") {
      this.mostrarPantallaInicio();
    } else if (this.estado === "juego") {
      this.mostrarPantallaJuego();
    } else if (this.estado === "creditos") {
      this.mostrarPantallaCreditos();
    }
  }

  procesarClic() {
    if (this.estado === "inicio") {
      if (this.botonJugar.estaClickeado(mouseX, mouseY)) {
        this.iniciarJuego(); 
      }
      if (this.botonCreditos.estaClickeado(mouseX, mouseY)) {
        this.irACreditos();
      }
    } else if (this.estado === "creditos") {
      if (this.botonRegresar.estaClickeado(mouseX, mouseY)) {
        this.irAInicio(); 
      }
    }
  }

  mostrarPantallaInicio() {
    textSize(32);
    textAlign(CENTER, CENTER);
    fill(255);
    text("Bienvenido a Haikyuu: El videojuego", width / 2, height / 4);

    textSize(18);
    text("Controles del Juego:", width / 2, height - 100);
    text("Mover personaje: Flechas izquierda y derecha", width / 2, height - 70);
    text("Disparar: Enter", width / 2, height - 40);
    text("Reiniciar juego: Flecha de arriba", width / 2, height - 10);

    this.botonJugar.dibujar();
    this.botonCreditos.dibujar();
  }

  mostrarPantallaJuego() {
    this.juego.dibujar();
    this.juego.manejarTeclas();
    this.juego.evaluarColision();

    if (this.juego.juegoTerminado) {
      fill(0, 0, 255);
      textSize(32);
      textAlign(CENTER, CENTER);
      text("¡Perdiste! Flecha de arriba para reiniciar", width / 2, height / 2);
    }

    if (this.juego.juegoGanado) {
      fill(0, 255, 0);
      textSize(32);
      textAlign(CENTER, CENTER);
      text("¡Ganaste! Flecha de arriba para reiniciar", width / 2, height / 2);
    }
  }

  mostrarPantallaCreditos() {
    textSize(24);
    textAlign(CENTER, CENTER);
    fill(255);
    text("Créditos:\nDesarrollado por [Gianluca Laura y Maia Laikow]", width / 2, height / 4);
    this.botonRegresar.dibujar();
  }
}
