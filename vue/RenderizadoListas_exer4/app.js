const { createApp } = Vue;

createApp({
    data() {
        return {
            finPartida: false,
            resultado: "",
            monstro: 100,
            vostede: 100,
            logBatalla: [],
            contador: 0,
            botonDesactivado: false
        };
    }, methods: {
        getRandomIntInclusive(min, max) {
            const minCeiled = Math.ceil(min);
            const maxFloored = Math.floor(max);
            return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
        },
        inicializar() {
            this.finPartida = false;
        },
        terminarPartida() {
            this.finPartida = true;
        },

        revisarFinPartida() {
            if (this.vostede === 0 && this.monstro === 0) {
                this.finPartida = true
                this.resultado = "empate"
            } else if (this.vostede === 0) {
                this.finPartida = true
                this.resultado = "perdiches"
            } else if (this.monstro === 0) {
                this.finPartida = true
                this.resultado = "ganaches"
            }
        },

        ataqueHumano(valor) {
            //Ataque
            this.monstro = Math.max(this.monstro - valor, 0)
            this.logBatalla.unshift(`<span class="log--player">Vostede</span> ataca con <span class="log--damage">${valor}</span>`)
        },

        ataqueMonstro(valor) {
            //Ataque
            this.vostede = Math.max(this.vostede - valor, 0);
            this.logBatalla.unshift(`<span class="log--monster">Monstro</span> ataca con <span class="log--damage">${valor}</span>`)
        },

        accionCurar() {
            const valor = this.getRandomIntInclusive(8, 20)

            this.vostede = Math.min(this.vostede + valor, 100)
            this.logBatalla.unshift(`<span class="log--player">Vostede</span> recupera <span class="log--heal">${valor}</span>`)

            this.ataqueMonstro(this.getRandomIntInclusive(8, 15))

            this.sumar()
            this.revisarFinPartida()
        },

        accionAtacar() {
            this.ataqueHumano(this.getRandomIntInclusive(5, 12))
            this.ataqueMonstro(this.getRandomIntInclusive(8, 15))

            this.sumar()
            this.revisarFinPartida()

        },

        accionEspecial() {
            this.ataqueHumano(this.getRandomIntInclusive(10, 25))
            this.ataqueMonstro(this.getRandomIntInclusive(8, 15))

            this.botonDesactivado = true
            this.contador = 0

            this.revisarFinPartida()

        },

        sumar() {
            if (this.botonDesactivado == true) {
                this.contador++
            }
        },

        renderse(){
            this.finPartida = true;
            this.resultado = "perdiches"
        },

        novaPartida(){
            this.finPartida = false;
            this.resultado = false;
            this.contador = 0;
            this.monstro = 100;
            this.vostede = 100;
            this.botonDesactivado = false
            this.logBatalla = []
        }

    }, watch: {
        //Vigilo el contador para activdar o desactivar el boton
        contador() {
            if (this.contador >= 3) {
                this.botonDesactivado = !this.botonDesactivado;
                this.contador = 0;
            }
        }
    }
}).mount("#app");