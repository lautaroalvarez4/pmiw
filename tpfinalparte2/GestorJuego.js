class GestorJuego {
    constructor() {
        this.estado = 'INICIO'; 
        this.recursos = new RecursosJuego();
        this.gorro = null;
        this.basura = null;
        this.tiempoInicio = 0; 
    
  this.musicaActiva = true;
        this.boton = {
            x: 0,
            y: 0,
            ancho: 60,
            alto: 60
        };
        
}

    cargarRecursos() {
        this.recursos.cargar();
    }

    inicializar() {
        this.gorro = new Gorro(this.recursos);
        this.basura = new ArregloObstaculos(5, this.recursos);
        
          this.boton.x = width - this.boton.ancho - 20;
        this.boton.y = 20;
        
    }

    reiniciarJuego() {
        this.estado = 'JUGANDO'; 
        this.gorro.reiniciar();
        this.basura.reiniciar();
        this.tiempoInicio = millis();
        if (this.musicaActiva) {
        if (this.recursos.musicafondo.isLoaded() && 
            !this.recursos.musicafondo.isPlaying()) {
            this.recursos.musicafondo.loop();
        }
    }
    }

    teclaPresionada(k) {
        if (this.estado === 'INICIO') {
            this.reiniciarJuego();
        } 
        else if (k === 'R' || k === 'r') {
            this.reiniciarJuego();
        }
    }

    actualizar() {
        if (this.estado === 'JUGANDO') {
            this.gorro.actualizar();
            this.basura.actualizar(this.gorro);

            if (this.basura.verificarColision(this.gorro)) {
                if (this.recursos.musicafondo.isLoaded()) {
                    this.recursos.musicafondo.play();
                } 
                this.estado = 'PERDIDO';
            }

            let tiempoTranscurrido = millis() - this.tiempoInicio;
            if (tiempoTranscurrido > TIEMPO_LIMITE) { 
                this.estado = 'GANADO';
            }
        }
    }

    dibujar() {
        switch(this.estado) {
            case 'INICIO':
                this.mostrarInstrucciones();
                break;
            case 'JUGANDO':
                this.gorro.dibujar();
                this.basura.dibujar();
                this.mostrarHUD();
                break;
            case 'GANADO':
                this.mostrarPantallaFinal("¡GANASTE! Lograste escapar de la basura.");
                break;
            case 'PERDIDO':
                this.mostrarPantallaPerdiste("¡PERDISTE! Fuiste aplastado por la basura.");
                break;
        }
    }

    mostrarHUD() {
        let tiempoRestante = ceil((TIEMPO_LIMITE - (millis() - this.tiempoInicio)) / 1000);
        
        fill(255);
        textSize(20);
        textAlign(LEFT, TOP);
        text(`Tiempo restante: ${max(0, tiempoRestante)}s`, 10, 10);
    }

    mostrarInstrucciones() {
        fill(0, 150);
        rect(0, 0, width, height);

        fill(255);
        textAlign(CENTER, CENTER);
        textSize(40);
        text("TOY STORY 3", width / 2, height / 2 - 80);

        textSize(20);
         
        text("OBJETIVO: Esquiva la basura por 30 segundos.", width / 2, height / 2);
        text("CONTROLES: Flechas Izquierda/Derecha.", width / 2, height / 2 + 40);
        text("Presiona cualquier tecla para COMENZAR", width / 2, height / 2 + 100);
        
        this.mostrarCreditos();
        this.dibujarBoton();
    }
    
    mostrarCreditos() {
        fill(180);
        textSize(14);
        textAlign(LEFT, BOTTOM);
        text("Alvarez Lautaro Comision 2", 10, height - 10);
    }

    mostrarPantallaFinal(mensaje) {
        fill(0, 150); 
        rect(0, 0, width, height);
        
        fill(0, 255, 0);
        textAlign(CENTER, CENTER);
        textSize(20);
        text(mensaje, width / 2, height / 2 - 30);
        
        fill(255);
        textSize(20);
        text("Presiona 'R' para REINICIAR", width / 2, height / 2 + 40);
    }
    
    mostrarPantallaPerdiste(mensaje) {
        fill(0, 150); 
        rect(0, 0, width, height);
        
        fill(255, 0, 0);
        textAlign(CENTER, CENTER);
        textSize(20);
        text(mensaje, width / 2, height / 2 - 30);
        
        fill(255);
        textSize(20);
        text("Presiona 'R' para REINICIAR", width / 2, height / 2 + 40);
    }

     dibujarBoton() {
        // hover boton
        let hover = mouseX > this.boton.x && 
                    mouseX < this.boton.x + this.boton.ancho &&
                    mouseY > this.boton.y && 
                    mouseY < this.boton.y + this.boton.alto;
        
        // Dibujar rectángulo del botón
        if (hover) {
            fill(0, 0, 50);
        } else {
            fill(50, 50, 200);
        }
        stroke(255);
        strokeWeight(2);
        rect(this.boton.x, this.boton.y, this.boton.ancho, this.boton.alto, 10);
        
        // Dibujar texto
        fill(255);
        noStroke();
        textAlign(CENTER, CENTER);
        textSize(14);
        
        if (this.musicaActiva) {
            text("musica", this.boton.x + this.boton.ancho / 2, this.boton.y + this.boton.alto / 2);
        } else {
            text("musica", this.boton.x + this.boton.ancho / 2, this.boton.y + this.boton.alto / 2);
        }
    }

    clicBoton(mx, my) {
        if (mx > this.boton.x && mx < this.boton.x + this.boton.ancho &&
            my > this.boton.y && my < this.boton.y + this.boton.alto) {
            this.musicaActiva = !this.musicaActiva;
            
            if (this.musicaActiva) {
                if (this.recursos.musicafondo.isLoaded()) {
                    this.recursos.musicafondo.loop();
                }
            } else {
                this.recursos.musicafondo.pause();
            }
        }
    }
}
