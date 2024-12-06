//Maia Laikow 119062/7 y Gianluca Laura 121642/3
//https://youtu.be/XKSex74IblQ?si=-imH0omKdUZoaBPQ

let objJuego;
let imgPersonaje, imgBala, imgMeteorito, imgCiudadIntacta, imgCiudadDañada, imgCiudadDestruida;
let musicaJuego;
let pantallaActual;
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
  pantallaActual = new Pantalla(); // Inicia en la pantalla de inicio
}

function draw() {
  background(205, 90, 0);
  pantallaActual.mostrar(); // Mostrar la pantalla actual
}

function mousePressed() {
  pantallaActual.procesarClic(); // Procesar clic en la pantalla actual
}

function iniciarJuego() {
  pantallaActual = new PantallaJuego();
  if (!musicaIniciada) {
    musicaJuego.loop();
    musicaIniciada = true;
  }
}

function mostrarCreditos() {
  pantallaActual = new PantallaCreditos();
}

function regresarInicio() {
  pantallaActual = new PantallaInicio();
}
