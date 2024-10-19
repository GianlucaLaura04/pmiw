function pantallas() {
  fill(146, 43, 33);
  strokeWeight(4);
  stroke(245, 176, 65);
  let fondo = fondos[estado];
  let x = 0;
  let y = 130;
  if (estado === 1) {
    x = 40; y = 260;
    textIndices = [0, 1, 2, 3, 4];
  } else if (estado === 2) {
    x = 40; y = 260;
    textIndices = [5, 6, 7];
  } else if (estado === 3) {
    y = 230;
    textIndices = [8, 9, 10];
  } else if (estado === 4) {
    x = 40; y = 180;
    textIndices = [11, 12];
  } else if (estado === 5) {
    x = 40; y = 180;
    textIndices = [13, 14];
  } else if (estado === 6) {
    y = 230;
    textIndices = [15, 16, 17];
  } else if (estado === 7) {
    textIndices = [18, 19, 20, 21];
  } else if (estado === 8) {
    y = 160;
    textIndices = [22, 23, 24, 25];
  } else if (estado === 9) {
    y = 230;
    textIndices = [26, 27, 28, 29];
  } else if (estado === 10) {
    y = 160;
    textIndices = [30, 31];
  } else if (estado === 11) {
    textIndices = [32, 33, 34, 35];
  } else if (estado === 12) {
    textIndices = [36, 37, 38, 39];
  } else if (estado === 13) {
    y = 230;
    textIndices = [40, 41, 42, 43];
  } else if (estado === 15) {
    y = 160;
    textIndices = [44, 45];
  } else if (estado === 16) {
    y = 190;
    textIndices = [46, 47, 48, 49];
  } else if (estado === 17) {
    y = 200;
    textIndices = [50, 51, 52, 53, 54];
  }
  image(fondo, 0, 0);
  for (let i = 0; i < textIndices.length; i++) {
    text(txt[textIndices[i]], x, y + i * 30);
  }
}
