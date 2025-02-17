class Juego {
  constructor() {
    this.personaje = new Personaje(width / 2 - 25, 380);
    this.enemigos = [];
    this.juegoTerminado = false;
    this.juegoGanado = false;
    this.ciudad = new Ciudad();

    for (let i = 0; i < 15; i++) {
      let posXAleatoria = random(50, width - 50);
      let posYInicial = random(-700, -80);
      this.enemigos.push(new Meteorito(posXAleatoria, posYInicial));
    }
  }

  dibujar() {
    this.ciudad.dibujar();
    this.personaje.dibujar();

    for (let i = 0; i < this.enemigos.length; i++) {
      this.enemigos[i].dibujar();
    }

    if (this.personaje.municion <= 0) {
      this.juegoTerminado = true;
    }

    this.comprobarVictoria();
  }

  manejarTeclas() {
    if (keyIsDown(LEFT_ARROW)) {
      this.personaje.movimientoIzq();
    } else if (keyIsDown(RIGHT_ARROW)) {
      this.personaje.movimientoDer();
    } else if (keyIsDown(ENTER)) {
      this.personaje.dispararBala();
    } else if (keyIsDown(UP_ARROW)) {
      pantallaActual.irAInicio();
    }
  }

  evaluarColision() {
    for (let i = 0; i < this.enemigos.length; i++) {
      let enemigo = this.enemigos[i];
      if (
        enemigo.vida &&
        dist(enemigo.posX, enemigo.posY, this.personaje.bala.posX, this.personaje.bala.posY) < 25 &&
        this.personaje.bala.disparada
      ) {
        enemigo.vida = false;
        this.personaje.bala.disparada = false;
      }
    }

    this.ciudad.actualizarEstado(this.enemigos);

    if (this.ciudad.vidas <= 0) {
      this.juegoTerminado = true;
    }
  }

  comprobarVictoria() {
    let meteoritosDestruidos = 0;

    for (let i = 0; i < this.enemigos.length; i++) {
      if (!this.enemigos[i].vida) {
        meteoritosDestruidos++;
      }
    }

    if (meteoritosDestruidos === this.enemigos.length) {
      this.juegoGanado = true;
    }
  }
}
