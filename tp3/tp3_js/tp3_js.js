//https://youtu.be/jJy5a6rWAjc

let referencia;

let numCuadrados = 30;
let escala = 0.9;
let deformacion = 0.0;

function preload() {
  referencia = loadImage("referencia.jpg"); 
}

function setup() {
  createCanvas(800, 400);
  rectMode(CENTER);
}

function draw() {
  background(255);

  if (referencia) {
    image(referencia, 0, 0, width / 2, height);
  }

  push();
  translate((3 * width) / 4, height / 2);
  drawTunel(numCuadrados, escala + deformacion);
  pop();
}

function drawTunel(cantidad, factor) {
  let size = height;

  for (let i = 0; i < cantidad; i++) {
    let s = getEscala(size, factor, i);
    stroke(i % 2 === 0 ? 0 : 255);
    strokeWeight(10);

    for (let lado = 0; lado < 4; lado++) {
      let x1, y1, x2, y2;
      if (lado === 0) {
        x1 = -s / 2; y1 = -s / 2;
        x2 = s / 2;  y2 = -s / 2;
      } else if (lado === 1) {
        x1 = s / 2;  y1 = -s / 2;
        x2 = s / 2;  y2 = s / 2;
      } else if (lado === 2) {
        x1 = s / 2;  y1 = s / 2;
        x2 = -s / 2; y2 = s / 2;
      } else {
        x1 = -s / 2; y1 = s / 2;
        x2 = -s / 2; y2 = -s / 2;
      }
      line(x1, y1, x2, y2);
    }
  }
}

function getEscala(base, factor, index) {
  return base * pow(factor, index);
}

function keyPressed() {
  if (key === 'd' || key === 'D') {
    numCuadrados++;
  } else if (key === 'f' || key === 'F') {
    numCuadrados = max(5, numCuadrados - 1);
  } else if (key === 'r' || key === 'R') {
    resetValores();
  }
}

function mouseMoved() {
  deformacion = map(mouseX, width / 2, width, -0.1, 0.1);
}

function resetValores() {
  numCuadrados = 30;
  escala = 0.9;
  deformacion = 0.0;
}
