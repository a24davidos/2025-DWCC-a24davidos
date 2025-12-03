"use strict"

const textinput = document.getElementById("text-input")
const filter = document.getElementById("filtro")
const container = document.getElementById("container")
const engadir = document.getElementById("engadir")
const cards = document.getElementsByClassName("card")
const buttonDeleteAll = document.getElementById("buttonDeleteAll")

let editando = false;
let divSeleccionado = null;

// Función para guardar todos los productos en localStorage
function guardarProductos() {
    const productos = Array.from(container.getElementsByClassName("card"))
        .map(card => card.firstElementChild.innerText); // obtenemos solo el texto
    localStorage.setItem("productos", JSON.stringify(productos));
}

function cargarProductos() {
    const productos = JSON.parse(localStorage.getItem("productos")) || [];
    productos.forEach(nombre => crearCard(nombre)); // reutilizamos tu función crearCard
}

//Crea un novo producto e limpa o text input
function crearCard(producto) {
    const div = document.createElement("div");
    const p = document.createElement("p")
    const input = document.createElement("input")

    //Le doy valores
    p.innerText = producto;
    input.type = "button"
    input.classList.add("buttonDelete")
    input.value = "X"
    div.classList.add("card")

    div.append(p)
    div.append(input)

    container.append(div)
    textinput.value = ""
}

//Devolve TRUE si xa existe
function comprobarDuplicado(producto) {
    const cardsArray = Array.from(cards)
    return cardsArray.some((x) => x.firstElementChild.innerText === producto)
}
//Método para filtrar
filter.addEventListener("input", () => {
    console.log(filter.value);
    const cardsArray = Array.from(cards)

    cardsArray.forEach((x) => {
        if (!x.firstElementChild.innerText.includes(filter.value)) {
            x.classList.add("hidden")
        } else {
            x.classList.remove("hidden")
        }
    })

    //Otra forma de hacerlo!
    /*     cardsArray.forEach((x) => x.firstElementChild.innerText.includes(filter.value) ? x.classList.remove("hidden") : x.classList.add("hidden") ) */


})

//Método para añadir Producto, comprueba si ya existe, si existe no lo mete
engadir.addEventListener("click", (e) => {
    if (editando) {
        return
    }
    if (textinput.value) {
        if (!comprobarDuplicado(textinput.value)) {
            crearCard(textinput.value)
        } else {
            alert("Producto duplicado!")
        }
    }
})

//Método para ELIMINAR 1 CARD
container.addEventListener("click", (e) => {
    //Si el valor de target es X, a tomar por culo
    if (e.target.value === "X") {
        const cardEliminar = e.target.closest("div")
        cardEliminar.remove()
    }
})

//Método para BORRAR TODO
buttonDeleteAll.addEventListener("click", (e) => {
    const cardsArray = Array.from(cards)
    cardsArray.forEach((x) => x.remove());
})

function deseleccionar() {
    const cardsArray = Array.from(cards);
    cardsArray.forEach((div) => div.classList.remove("selected"))

}

//Método que sirver para seleccionar
container.addEventListener("click", (e) => {
    if (e.target.tagName === "P") {
        divSeleccionado = e.target.closest("div");
        deseleccionar();
        divSeleccionado.classList.add("selected");
        engadir.value = "+ Actualizar Elemento";
        textinput.value = e.target.innerText;
        editando = true;
    }
});

//Método para actualizar
engadir.addEventListener("click", () => {
    if (editando && divSeleccionado) {
        divSeleccionado.firstElementChild.innerText = textinput.value;
        textinput.value = "";
        divSeleccionado.classList.remove("selected");
        engadir.value = "+ Engadir elemento";
        editando = false;
        divSeleccionado = null;
    }
});