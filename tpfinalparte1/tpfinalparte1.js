let pantalla = 0;
let fondos = [];
let pantallas = [];
let tiempoInicio = 0;
let musica;
let musicaEncendida = false; 
//https://youtu.be/NEd5QzZEf4I

function preload() {
  //  imágenes
  fondos[0] = loadImage("assets/uno.jpg");
  fondos[1] = loadImage("assets/dos.jpg");
  fondos[2] = loadImage("assets/tres.jpg");
  fondos[3] = loadImage("assets/cuatro.jpg");
  fondos[4] = loadImage("assets/cinco.jpg");
  fondos[5] = loadImage("assets/seis.png");
  fondos[6] = loadImage("assets/siete.jpg");
  fondos[7] = loadImage("assets/ocho.jpg");
  fondos[8] = loadImage("assets/nueve.jpg");
  fondos[9] = loadImage("assets/diez.jpg");
  fondos[10] = loadImage("assets/once.jpg");
  fondos[11] = loadImage("assets/doce.jpg");
  fondos[12] = loadImage("assets/trece.jpeg");
  fondos[13] = loadImage("assets/catorce.jpg");
  fondos[14] = loadImage("assets/creditos.jpeg");

  //  música
  musica = loadSound("assets/musicafondo.mp3");
}

function setup() {
  createCanvas(640, 480);
  textFont('MyanmarText-Bold-48');

  pantallas[0] = {
    tipo: "boton",
    botones: [
      { x: 100, y: 350, w: 200, h: 50, destino: 1, texto: "Iniciar" },
      { x: 350, y: 350, w: 200, h: 50, destino: 14, texto: "Créditos" },
      { x: 260, y: 420, w: 120, h: 40, destino: null, texto: "Música" }
    ]
  };

  pantallas[1] = {
    tipo: "tiempo", duracion: 5000, destino: 2,
    texto: "Andy se va a la universidad\nDecide guardar a sus juguetes en el ático,\nexcepto a Woody, que se lo lleva con él."
  };
  pantallas[2] = {
    tipo: "tiempo", duracion: 5000, destino: 3,
    texto: "Por error, los juguetes terminan siendo donados\na la guardería Sunnyside."
  };
  pantallas[3] = {
    tipo: "boton",
    texto: "Al llegar, son recibidos por Lotso y Ken.\nLos juguetes de Andy descubren que Sunnyside no es el paraíso que creían,\nsino una prisión dirigida por Lotso.",
    botones: [
      { x: 100, y: 420, w: 500, h: 50, destino: 4, texto: "los juguetes de Andy deciden quedarse en la guarderia" },
      { x: 60, y: 350, w: 540, h: 50, destino: 7, texto: "Los juguetes de Andy deciden escapar de la guarderia para poder regresar con Andy" }
    ]
  };
  pantallas[4] = {
    tipo: "tiempo", duracion: 5000, destino: 5,
    texto: "Woody decide escapar de todas formas,\ndeja atrás a sus amigos y en el camino se encuentra con Bonnie,\nquien lo lleva a su casa."
  };
  pantallas[5] = {
    tipo: "boton",
    texto: "Al hablar con los juguetes de Bonnie,\nWoody descubre la verdad de Sunnyside.",
    botones: [
      { x: 50, y: 420, w: 550, h: 50, destino: 6, texto: "Woody decide dejar a sus amigos atras y volver con andy para ir a la universidad con el " },
      { x: 100, y: 350, w: 500, h: 50, destino: 7, texto: "Regresar a Sunnyside a rescatar a sus amigos" }
    ]
  };
  pantallas[6] = {
    tipo: "boton",
    texto: "Woody se reencuentra con Andy y se van juntos a la universidad.\nLos demás juguetes quedaron atrapados en Sunnyside para siempre.",
    botones: [
      { x: 200, y: 420, w: 50, h: 50, destino: 0, texto: "Fin" }
    ]
  };
  pantallas[7] = {
    tipo: "boton",
    texto: "Cuando logran escapar de la guardería,\nLotso los empuja hacia un camión de basura.\nEn el basurero, buscan la forma de volver a casa.",
    botones: [
      { x: 100, y: 420, w: 500, h: 50, destino: 8, texto: "caminan por el basurero en busca de la solucion " },
      { x: 100, y: 350, w: 500, h: 50, destino: 13, texto: "Se dan por vencidos y deciden pasar el resto de sus dias en el basurero " }
    ]
  };
  pantallas[8] = {
    tipo: "boton",
    texto: "Al caminar por el basurero,\nlos juguetes son arrastrados hacia la trituradora,\nque amenaza con acabar con ellos.",
    botones: [
      { x: 100, y: 420, w: 500, h: 50, destino: 9, texto: "Deciden luchar por su vida asi poder regresar con andy " },
      { x: 100, y: 350, w: 500, h: 50, destino: 12, texto: "Se dan por vencidos y dejan que la trituradora termine con ellos" }
    ]
  };
  pantallas[9] = {
    tipo: "tiempo", duracion: 5000, destino: 10,
    texto: "Al ayudarse mutuamente, se dan cuenta que faltan los 3 marcianitos\ny deciden llamarlos para ayudar."
  };
  pantallas[10] = {
    tipo: "tiempo", duracion: 5000, destino: 11,
    texto: "Los marcianitos aparecen usando la garra\npara salvarlos de la trituradora a tiempo."
  };
  pantallas[11] = {
    tipo: "boton",
    texto: "Logran escapar del basurero y regresan a la casa de Andy\njusto antes de que se vaya a la universidad.",
    botones: [
      { x: 300, y: 420, w: 50, h: 50, destino: 0, texto: "Fin" }
    ]
  };
  pantallas[12] = {
    tipo: "boton",
    texto: "Se dan por vencidos y dejan que la trituradora termine con ellos.",
    botones: [
      { x: 300, y: 420, w: 50, h: 50, destino: 0, texto: "Fin" }
    ]
  };
  pantallas[13] = {
    tipo: "boton",
    texto: "Pasaron toda su vida atrapados en el basurero,\nconocieron nuevos juguetes y se olvidaron de Andy.",
    botones: [
      { x: 300, y: 420, w: 50, h: 50, destino: 0, texto: "Fin" }
    ]
  };
  pantallas[14] = {
    tipo: "boton",
    texto: "Alvarez Lautaro, Hernandez Martina\nDirector: Lee Unkrich, Productor: Darla K. Anderson",
    botones: [
      { x: 300, y: 420, w: 70, h: 50, destino: 0, texto: "Volver" }
    ]
  };

  tiempoInicio = millis();
}

function draw() {
  background(0);
  image(fondos[pantalla], 0, 0, width, height);

  let config = pantallas[pantalla];

  // texto
  if (config.texto) {
    fill(255);
    stroke(0);
    textAlign(TOP);
    textLeading(24);
    textSize(18);
    text(config.texto, width / 2, 30, width - 60);
  }

  // botones
  if (config.tipo === "boton") {
    for (let b of config.botones) {
      fill(255, 150);
      stroke(255);
      rect(b.x, b.y, b.w, b.h, 10);

      fill(0);
      noStroke();
      textAlign(CENTER, CENTER);
      textSize(14);
      text(b.texto, b.x + b.w / 2, b.y + b.h / 2);
    }
  } else if (config.tipo === "tiempo") {
    if (millis() - tiempoInicio > config.duracion) {
      pantalla = config.destino;
      tiempoInicio = millis();
    }
  }
}

function mousePressed() {
  let config = pantallas[pantalla];

  if (config.tipo === "boton") {
    for (let b of config.botones) {
      if (mouseX > b.x && mouseX < b.x + b.w &&
          mouseY > b.y && mouseY < b.y + b.h) {

        // Botón música
        if (b.texto === "Música") {
          if (musicaEncendida) {
            musica.pause();
            musicaEncendida = false;
          } else {
            musica.loop();
            musica.setVolume(1);
            musicaEncendida = true;
          }
        } else if (b.destino !== null) {
          pantalla = b.destino;
          tiempoInicio = millis();
        }
      }
    }
  }
}
