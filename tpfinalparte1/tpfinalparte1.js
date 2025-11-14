//https://youtu.be/AidnCELYNMc

let pantalla = 0;
let fondos = [];
let pantallas = [];
let tiempoInicio = 0;
let musica;
let musicaEncendida = false;

function preload() {
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
  
  musica = loadSound("assets/musicafondo.mp3");
}

function setup() {
  createCanvas(640, 480);
  textFont('MyanmarText-Bold-48');

  pantallas[0] = ["boton", null, null, null, [[100, 350, 200, 50, 1, "Iniciar"], [350, 350, 200, 50, 14, "Créditos"], [260, 420, 120, 40, null, "Música"]]];

  pantallas[1] = ["tiempo", 5000, 2, "Andy se va a la universidad\nDecide guardar a sus juguetes en el ático,\nexcepto a Woody, que se lo lleva con él.", null];
  pantallas[2] = ["tiempo", 5000, 3, "Por error, los juguetes terminan siendo donados\na la guardería Sunnyside.", null];
  pantallas[3] = ["boton", null, null, "Al llegar, son recibidos por Lotso y Ken.\nLos juguetes de Andy descubren que Sunnyside no es el paraíso que creían,\nsino una prisión dirigida por Lotso.", [[100, 420, 500, 50, 4, "los juguetes de Andy deciden quedarse en la guarderia"], [60, 350, 540, 50, 7, "Los juguetes de Andy deciden escapar de la guarderia para poder regresar con Andy"]]];
  pantallas[4] = ["tiempo", 5000, 5, "Woody decide escapar de todas formas,\ndeja atrás a sus amigos y en el camino se encuentra con Bonnie,\nquien lo lleva a su casa.", null];
  pantallas[5] = ["boton", null, null, "Al hablar con los juguetes de Bonnie,\nWoody descubre la verdad de Sunnyside.", [[50, 420, 550, 50, 6, "Woody decide dejar a sus amigos atras y volver con andy para ir a la universidad con el"], [100, 350, 500, 50, 7, "Regresar a Sunnyside a rescatar a sus amigos"]]];
  pantallas[6] = ["boton", null, null, "Woody se reencuentra con Andy y se van juntos a la universidad.\nLos demás juguetes quedaron atrapados en Sunnyside para siempre.", [[200, 420, 50, 50, 0, "Fin"]]];
  pantallas[7] = ["boton", null, null, "Cuando logran escapar de la guardería,\nLotso los empuja hacia un camión de basura.\nEn el basurero, buscan la forma de volver a casa.", [[100, 420, 500, 50, 8, "caminan por el basurero en busca de la solucion"], [100, 350, 500, 50, 13, "Se dan por vencidos y deciden pasar el resto de sus dias en el basurero"]]];
  pantallas[8] = ["boton", null, null, "Al caminar por el basurero,\nlos juguetes son arrastrados hacia la trituradora,\nque amenaza con acabar con ellos.", [[100, 420, 500, 50, 9, "Deciden luchar por su vida asi poder regresar con andy"], [100, 350, 500, 50, 12, "Se dan por vencidos y dejan que la trituradora termine con ellos"]]];
  pantallas[9] = ["tiempo", 5000, 10, "Al ayudarse mutuamente, se dan cuenta que faltan los 3 marcianitos\ny deciden llamarlos para ayudar.", null];
  pantallas[10] = ["tiempo", 5000, 11, "Los marcianitos aparecen usando la garra\npara salvarlos de la trituradora a tiempo.", null];
  pantallas[11] = ["boton", null, null, "Logran escapar del basurero y regresan a la casa de Andy\njusto antes de que se vaya a la universidad.", [[300, 420, 50, 50, 0, "Fin"]]];
  pantallas[12] = ["boton", null, null, "Se dan por vencidos y dejan que la trituradora termine con ellos.", [[300, 420, 50, 50, 0, "Fin"]]];
  pantallas[13] = ["boton", null, null, "Pasaron toda su vida atrapados en el basurero,\nconocieron nuevos juguetes y se olvidaron de Andy.", [[300, 420, 50, 50, 0, "Fin"]]];
  pantallas[14] = ["boton", null, null, "Alvarez LautaroE\nDirector: Lee Unkrich, Productor: Darla K. Anderson", [[300, 420, 70, 50, 0, "Volver"]]];

  tiempoInicio = millis();
}

function draw() {
  background(0);
  image(fondos[pantalla], 0, 0, width, height);

  let config = pantallas[pantalla];
  let tipo = config[0];
  let duracion = config[1];
  let destino = config[2];
  let texto = config[3];
  let botones = config[4];

  // texto
  if (texto) {
    fill(255);
    stroke(0);
    textAlign(TOP);
    textLeading(24);
    textSize(18);
    text(texto, width / 2, 30, width - 60);
  }

  // botones
  if (tipo === "boton") {
    for (let i = 0; i < botones.length; i++) {
      let b = botones[i];
      let bx = b[0];
      let by = b[1];
      let bw = b[2];
      let bh = b[3];
      let bdestino = b[4];
      let btexto = b[5];

      fill(255, 150);
      stroke(255);
      rect(bx, by, bw, bh, 10);

      fill(0);
      noStroke();
      textAlign(CENTER, CENTER);
      textSize(14);
      text(btexto, bx + bw / 2, by + bh / 2);
    }
  } else if (tipo === "tiempo") {
    if (millis() - tiempoInicio > duracion) {
      pantalla = destino;
      tiempoInicio = millis();
    }
  }
}

function mousePressed() {
  let config = pantallas[pantalla];
  let tipo = config[0];
  let botones = config[4];

  if (tipo === "boton") {
    for (let i = 0; i < botones.length; i++) {
      let b = botones[i];
      let bx = b[0];
      let by = b[1];
      let bw = b[2];
      let bh = b[3];
      let bdestino = b[4];
      let btexto = b[5];

      if (mouseX > bx && mouseX < bx + bw &&
          mouseY > by && mouseY < by + bh) {

        // Botón música
        if (btexto === "Música") {
          if (musicaEncendida) {
            musica.pause();
            musicaEncendida = false;
          } else {
            musica.loop();
            musica.setVolume(1);
            musicaEncendida = true;
          }
        } else if (bdestino !== null) {
          pantalla = bdestino;
          tiempoInicio = millis();
        }
      }
    }
  }
}
