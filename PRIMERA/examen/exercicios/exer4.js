"use strict"

//CODIGO HECHO POR MI PERO ESTRUCTURADO POR CHATGPT PARA ENTENDER COMO LO DEBÍA DE TENER 

// ================================
// Declaraciones globales y referencias al DOM
// ================================
let ficha;
let juegoActivo = true;

const taboleiro = document.getElementById("taboleiro");
const casillas = Array.from(document.querySelectorAll(".casilla"));
const reset = document.getElementById("reset");

// ================================
// Funciones auxiliares / utilidades
// ================================

// Genera un número aleatorio entero desde 0 hasta max-1
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Decide aleatoriamente quien empieza
function lanzarMoneda() {
    if (getRandomInt(2) == 0) {
        ficha = "O";
    } else {
        ficha = "X";
    }
    mensajeTurno();
}

// Cambia de turno entre X y O
function cambioTurno() {
    ficha = (ficha === "X") ? "O" : "X";
    mensajeTurno();
}

// Muestra en el DOM de quién es el turno
function mensajeTurno() {
    const mensajeTurno = document.getElementById("marcador");
    mensajeTurno.innerText = `Turno: ${ficha}`;
}

// Comprueba si hay victoria
function comprobarVictoria(array) {
    // Líneas horizontales
    for (let i = 0; i < 9; i += 3) {
        if (
            array[i].innerText &&
            array[i].innerText === array[i + 1].innerText &&
            array[i].innerText === array[i + 2].innerText
        ) {
            return true;
        }
    }

    // Líneas verticales
    for (let i = 0; i < 3; i++) {
        if (
            array[i].innerText &&
            array[i].innerText === array[i + 3].innerText &&
            array[i].innerText === array[i + 6].innerText
        ) {
            return true;
        }
    }

    // Diagonales
    if (
        array[0].innerText &&
        array[0].innerText === array[4].innerText &&
        array[0].innerText === array[8].innerText
    ) {
        return true;
    }

    if (
        array[6].innerText &&
        array[6].innerText === array[4].innerText &&
        array[6].innerText === array[2].innerText
    ) {
        return true;
    }

    return false;
}

// Comprueba si todas las casillas están ocupadas → empate
function comprobarEmpate(params) {
    return params.every(casilla => casilla.innerText !== "");
}

// Limpia el tablero
function limpiarJuego() {
    casillas.forEach((x) => x.innerText = "");
}

// ================================
// Función principal de inicialización del juego
// ================================
function juego() {
    limpiarJuego();
    lanzarMoneda();
}

// ================================
// Event listeners
// ================================

// Listener opcional para debug (muestra el índice de la casilla)
taboleiro.addEventListener("click", (e) => {
    console.log(e.target.dataset.index);
});

// Listener principal para jugar
taboleiro.addEventListener("click", (e) => {
    if (!e.target.innerText) {
        e.target.innerText = ficha;

        if (comprobarVictoria(casillas)) {
            alert(`${ficha} gana!!!`);
            limpiarJuego();
        } else if (comprobarEmpate(casillas)) {
            alert("Empate!!!");
            limpiarJuego();
        } else {
            cambioTurno();
        }
    }
});

// Listener para reiniciar el juego
reset.addEventListener("click", () => {
    juego();
});

//Inicio del juego
juego();
