class Basura {
    constructor(recursos) {
        this.recursos = recursos;
        this.reiniciar();
    }

    reiniciar() {
        this.tamano = random(30, 70);
        this.x = random(width);
        this.y = random(-height, -50);
        this.velocidad = random(3, 7);
        this.rotacion = random(TWO_PI);
        this.velocidadRotacion = random(-0.02, 0.02);
    }

    actualizar() {
        this.y += this.velocidad;
        this.rotacion += this.velocidadRotacion;

        if (this.y > height + this.tamano) {
            this.reiniciar();
        }
    }

    dibujar() {
        push();
        translate(this.x, this.y);
        rotate(this.rotacion);
        image(this.recursos.basuraImg, 0, 0, this.tamano, this.tamano);
        pop();
    }
}
