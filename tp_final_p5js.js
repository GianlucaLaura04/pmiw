//ALUMNOS Gianluca Laura y Maia Laikow
//https://youtu.be/DWrrEjFQhuQ

function preload() {
  for (let i=1; i<18; i++) {
    fondos[i] = loadImage("data/fondo"+i+".jpg");
 }
  txt = loadStrings("data/fases.txt");   
  
  soundFormats('mp3');
  elecSound = loadSound('data/eleccion');
  fuente = loadFont('data/letra.otf');
} 

function setup() {   
  createCanvas(640,480);
  textFont(fuente);
  textSize(33);
  background(0);
  
}


function draw() {
  pantallas();
  stroke(0);
  strokeWeight(2);
  botonPrincipal();
  if(estado===1){
    botonCreditos();  
 }
  if(estado === 3 || estado == 6 || estado == 12){
    botonesEleccion();
    botonSiguiente=false;
 }
  if(estado === 4 || estado === 7 || estado === 10 || estado ===15){
   botonSiguiente=true;
 }
  if(estado === 8 || estado === 9 || estado === 16 || estado === 13 || estado === 17){
   botonSiguiente=false;
   botonReiniciar();
 }
  punteroPelota();
}
