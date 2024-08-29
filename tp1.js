// Alumno: Gianluca Laura 
// Legajo: 121642/3
// https://youtu.be/zPAEVb8uk8Y?si=A-OCHWBnkkURfG9a
function preload(){
img = loadImage('data/OpArt.jpg')
  }

function setup() {
  colorCuadradoNegro = 15;
  colorCuadradoBlanco = 255;
  colorRomboNegro = 15;
  colorRomboBlanco = 255;
  createCanvas(800,400);
}


function draw() {
  r = random(255);
  g = random(255);
  b = random(255);
  r2 = random(255);
  g2 = random(255);
  b2 = random(255);
  background(255);
  image(img,0,0);
  strokeWeight(0);
  for (let ancho=4; ancho<8; ancho++){ 
    for (let largo=0; largo<4; largo++){
      if (esPar(ancho + largo)) { 
      fill(colorCuadradoBlanco); 
    } else {
      fill(colorCuadradoNegro);
    }
    rect (ancho * 100, largo * 100, 100, 100); 
    quads (colorRomboNegro, colorRomboBlanco);  //funcion donde estan dibujados los rombos
    colorRombos( r, g, b, r2, g2, b2); // cambia los colores automaticamente 
    }
  }
}
