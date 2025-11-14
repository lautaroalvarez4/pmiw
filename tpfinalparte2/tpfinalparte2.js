//https://youtu.be/XxTUpYBvwGo

let gestor;

const TIEMPO_LIMITE = 30000; 

function preload() {
    gestor = new GestorJuego();
    gestor.cargarRecursos();
}

function setup() {
    createCanvas(640, 480);
    imageMode(CENTER);
    gestor.inicializar();
}

function draw() {
    image(gestor.recursos.fondoImg, width / 2, height / 2, width, height); 
    gestor.actualizar();
    gestor.dibujar();
}

function keyPressed() {
    gestor.teclaPresionada(key);
}


function mousePressed() {
    gestor.clicBoton(mouseX, mouseY);
}


class RecursosJuego {
    constructor() {
        this.fondoImg = null;
        this.gorroImg = null;
        this.basuraImg = null;
        this.musicafondo = null;
    }

    cargar() {
        this.fondoImg = loadImage('assets/fondo.png'); 
        this.gorroImg = loadImage('assets/gorro.png');
        this.basuraImg = loadImage('assets/basura.png');
        
        soundFormats('mp3', 'ogg');
        this.musicafondo = loadSound('assets/musicafondo.mp3');
    }
}
