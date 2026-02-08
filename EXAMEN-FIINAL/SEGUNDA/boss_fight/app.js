const { createApp } = Vue;
createApp({
    data() {
        return {
            verde: "green",
            vidaMonstro: 100,
            vidaHumano: 100,
            especial: true,
            contador: 0,
            partidaFinalizada: false,
            perdiches: false,
            ganaches: false,
            empate: false,
        };
    }, methods: {

        novaPartida() {
            this.vidaMonstro = 100;
            this.vidaHumano = 100,
            this.especial = true,
            this.contador = 0,
            this.partidaFinalizada = false,
            this.perdiches = false,
            this.ganaches = false,
            this.empate = false

            const ul = document.getElementsByTagName("ul")[0]

            ul.innerHTML = ""
        },

        getRandomIntInclusive(min, max) {
            const minCeiled = Math.ceil(min);
            const maxFloored = Math.floor(max);
            return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
        },

        cargarEspecial() {
            if (!this.especial) {
                this.contador = this.contador + 1
                console.log(this.contador);

            }

        }
        , rexistro(valorAtaqueMonstro, valorHumano, tipoAccion) {

            const ul = document.getElementsByTagName("ul")[0]
            const liHumano = document.createElement("li")
            const liMonstro = document.createElement("li")
            console.log("llega");

            if (tipoAccion == "a") {

                liHumano.innerHTML = `<span class='log--player'>Vostede</span> ataca con <span class='log--damage'>${valorHumano}</span>`
            } else if (tipoAccion == "c") {
                liHumano.innerHTML = `<span class='log--player'>Vostede</span> recupera <span class='log--heal'>${valorHumano}</span>`
            }

            liMonstro.innerHTML = `<span class='log--monster'>Monstro</span> ataca con <span class='log--damage'>${valorAtaqueMonstro}</span>`

            ul.prepend(liHumano)
            ul.prepend(liMonstro)
        },

        ataque() {
            valorAtaqueHumano = this.getRandomIntInclusive(5, 12)
            valorAtaqueMonstro = this.getRandomIntInclusive(8, 15)

            //Atacamos al monstro:
            this.vidaMonstro = Math.max(this.vidaMonstro - valorAtaqueHumano, 0)
            //Reducimo vida humanos
            this.vidaHumano = Math.max(this.vidaHumano - valorAtaqueMonstro, 0)
            //Asi se llama al método con this.
            this.cargarEspecial()

            this.rexistro(valorAtaqueMonstro, valorAtaqueHumano, "a")
        },

        ataqueEspecial() {

            if (this.especial) {

                valorAtaqueHumano = this.getRandomIntInclusive(10, 25)
                valorAtaqueMonstro = this.getRandomIntInclusive(8, 15)

                //Atacamos al monstro:
                this.vidaMonstro = Math.max(this.vidaMonstro - valorAtaqueHumano, 0)
                //Reducimo vida humanos
                this.vidaHumano = Math.max(this.vidaHumano - valorAtaqueMonstro, 0)

                //Pasamos el especial a negativo
                this.especial = false;

                //Pasamos al registro
                this.rexistro(valorAtaqueMonstro, valorAtaqueHumano, "a")


            }
        },

        curar() {
            vAtaqueMonstruo = this.getRandomIntInclusive(10, 15)
            valorCuracion = this.getRandomIntInclusive(8, 20)

            //aumentamos vida humano
            this.vidaHumano = Math.min(this.vidaHumano + valorCuracion, 100)

            //atacamos al humano
            this.vidaHumano = Math.min(this.vidaHumano - vAtaqueMonstruo, 100)

            //cargamos el especial
            this.cargarEspecial()
            //Mandamos rexistro
            this.rexistro(vAtaqueMonstruo, valorCuracion, "c")
        },

        renderse(){
            this.partidaFinalizada = true
            alert("Rendiches!")
            this.perdiches = true
        }

    }, watch: {
        //Compruebo el ataque especial
        contador() {
            if (this.contador >= 3) {
                this.especial = true;
                this.contador = 0
            }
        },

        vidaHumano() {
            if (this.vidaHumano == 0 && this.vidaMonstro == 0) {
                this.partidaFinalizada = true
                alert("Empate")
                this.empate = true;
            } else if (this.vidaHumano == 0) {
                this.partidaFinalizada = true
                alert("Perdiche!")
                this.perdiches = true
            }

        },

        vidaMonstro() {
            if (this.vidaMonstro == 0) {
                this.partidaFinalizada = true
                alert("Ganaches!")
                this.ganaches = true;
            }
        }

    }
}).mount("#game");