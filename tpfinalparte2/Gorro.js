class Gorro {
    constructor(recursos) {
        this.recursos = recursos;
        this.tamano = 60;
        this.reiniciar();
    }

    reiniciar() {
        this.x = width / 2;
        this.y = height - 50;
        this.velocidad = 7;
    }

    actualizar() {
        if (keyIsDown(LEFT_ARROW)) {
            this.x -= this.velocidad;
        }
        if (keyIsDown(RIGHT_ARROW)) {
            this.x += this.velocidad;
        }
        this.x = constrain(this.x, this.tamano / 2, width - this.tamano / 2);
    }

    dibujar() {
        image(this.recursos.gorroImg, this.x, this.y, this.tamano, this.tamano);
    }
}
