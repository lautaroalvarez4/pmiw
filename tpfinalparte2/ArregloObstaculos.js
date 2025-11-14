class ArregloObstaculos {
    constructor(numInicial, recursos) {
        this.lista = [];
        this.numInicial = numInicial;
        this.recursos = recursos;
        this.reiniciar();
    }

    reiniciar() {
        this.lista = [];
        for (let i = 0; i < this.numInicial; i++) {
            this.lista.push(new Basura(this.recursos));
        }
    }

    actualizar() {
        for (let basura of this.lista) {
            basura.actualizar();
        }
    }

    dibujar() {
        for (let basura of this.lista) {
            basura.dibujar();
        }
    }

    verificarColision(gorro) {
        for (let basura of this.lista) {
            let distancia = dist(gorro.x, gorro.y, basura.x, basura.y);
            let radioSuma = gorro.tamano / 2 + basura.tamano / 2;
            
            if (distancia < radioSuma * 0.75) {
                return true;
            }
        }
        return false;
    }
}
