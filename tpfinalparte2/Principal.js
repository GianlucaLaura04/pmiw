//Maia Laikow 119062/7 y Gianluca Laura 121642/3
//https://youtu.be/XKSex74IblQ?si=-imH0omKdUZoaBPQ

let objJuego;
let imgPersonaje, imgBala, imgMeteorito, imgCiudadIntacta, imgCiudadDañada, imgCiudadDestruida;
let musicaJuego;
let pantallaActual = 'inicio'; 
let musicaIniciada = false;

function preload() {
  imgPersonaje = loadImage("data/imagenPersonaje.png");
  imgBala = loadImage("data/imagenBala.png");
  imgMeteorito = loadImage("data/imagenMeteorito.png");
  imgCiudadIntacta = loadImage("data/ciudadIntacta.png");
  imgCiudadDañada = loadImage("data/ciudadDanada.png");
  imgCiudadDestruida = loadImage("data/ciudadDestruida.png");

  musicaJuego = loadSound('data/musica.mp3');
}

function setup() {
  createCanvas(640, 480);
  objJuego = new Juego(); 
}

function draw() {
  background(0);

  if (pantallaActual === 'inicio') {
    mostrarPantallaInicio();
  } else if (pantallaActual === 'juego') {
    objJuego.dibujar();
    objJuego.manejarTeclas();
    objJuego.evaluarColision();

    if (objJuego.juegoTerminado) {
      fill(255, 0, 0);
      textSize(32);
      textAlign(CENTER, CENTER);
      text("¡Perdiste! Flecha de arriba para reiniciar", width / 2, height / 2);
    }
    if (objJuego.juegoGanado) {
      fill(0, 255, 0);
      textSize(32);
      textAlign(CENTER, CENTER);
      text("¡Ganaste! Flecha de arriba para reiniciar", width / 2, height / 2);
    }
  } else if (pantallaActual === 'creditos') {
    mostrarPantallaCreditos();
  }
}

function mostrarPantallaInicio() {
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(255);
  text('Bienvenido a Ciudad en peligro', width / 2, height / 4);
  textSize(18);
  text('Controles del Juego:', width / 2, height - 100);
  text('Mover personaje: Flechas izquierda y derecha', width / 2, height - 70);
  text('Disparar: Enter', width / 2, height - 40);
  text('Reiniciar juego: Flecha de arriba', width / 2, height - 10);

  // Botón "Jugar"
  fill(0, 255, 0);
  rect(width / 2 - 75, height / 2 - 25, 150, 50);
  fill(0);
  textSize(24);
  text('Jugar', width / 2, height / 2);

  // Botón "Créditos"
  fill(0, 0, 255);
  rect(width / 2 - 75, height / 2 + 25, 150, 50);
  fill(255);
  textSize(24);
  text('Créditos', width / 2, height / 2 + 50);
}

function mostrarPantallaCreditos() {
  textSize(24);
  textAlign(CENTER, CENTER);
  fill(255);
  text('Créditos:\nDesarrollado por [Gianluca Laura y Maia Laikow]', width / 2, height / 4);

  // Botón "Regresar"
  fill(255, 0, 0);
  rect(width / 2 - 75, height / 2 + 50, 150, 50);
  fill(0);
  textSize(24);
  text('Regresar', width / 2, height / 2 + 75);
}

// Función para detectar los clics en los botones
function mousePressed() {
  // Si estamos en la pantalla de inicio
  if (pantallaActual === 'inicio') {
    // Botón "Jugar"
    if (mouseX > width / 2 - 75 && mouseX < width / 2 + 75 && mouseY > height / 2 - 25 && mouseY < height / 2 + 25) {
      iniciarJuego();
    }
    // Botón "Créditos"
    else if (mouseX > width / 2 - 75 && mouseX < width / 2 + 75 && mouseY > height / 2 + 25 && mouseY < height / 2 + 75) {
      mostrarCreditos();
    }
  }
  // Si estamos en la pantalla de créditos
  else if (pantallaActual === 'creditos') {
    // Botón "Regresar"
    if (mouseX > width / 2 - 75 && mouseX < width / 2 + 75 && mouseY > height / 2 + 50 && mouseY < height / 2 + 100) {
      regresarInicio();
    }
  }
}

function iniciarJuego() {
  pantallaActual = 'juego'; 
  objJuego = new Juego(); 

 
  if (!musicaIniciada) {
    musicaJuego.loop();
    musicaIniciada = true;
  }
}

function mostrarCreditos() {
  pantallaActual = 'creditos'; 
}

function regresarInicio() {
  pantallaActual = 'inicio';
}
