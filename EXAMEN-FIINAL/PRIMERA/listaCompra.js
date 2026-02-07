"use strict";

const container = document.getElementById("container")
const textinput = document.getElementById("textinput")
let engadir = document.getElementById("engadir")
const compra = document.getElementsByClassName("compra")
const borrarTodo = document.getElementById("remove-all")
const textFilter = document.getElementById("filter")

let modoEdicion = false
let referencia = ""

//Función para crear Div
function crearDiv(entrada){
    
    // Creo div
    let div = document.createElement("div")
    div.classList.add("compra")

    // Creo p
    let p = document.createElement("p")
    p.innerText = entrada

    //Creo boton
    let button = document.createElement("button")
    button.classList.add("remove-button")
    button.innerText = "X"

    div.append(p)
    div.append(button)

    container.append(div)
};

//Función para comprobar si Existe lo que vas añadir a la lista
function comprobarExiste(params) {
    let compras = document.getElementsByClassName("compra")
    let comprasArray = Array.from(compras)

    return comprasArray.some((x) => x.children[0].innerText == params)
    
    
}

//Función para añadir elemento
engadir.addEventListener("click", (e) => {
    if(comprobarExiste(textinput.value)) return
    if(modoEdicion) return

    if(textinput.value ){
        crearDiv(textinput.value)
        textinput.value = ""
    }

})

textinput.addEventListener("keydown", (e) => {
    console.log(e.target.value);
    
});

//evento para eliminar
container.addEventListener("click", (e) => {
    if(e.target.classList.value == "remove-button"){
        const refDiv = e.target.closest("div")
        refDiv.remove()
    }
})

//Evento para eliminar todo
borrarTodo.addEventListener("click", () => {
    container.innerHTML = ""
})

//Evento para filtrar 
textFilter.addEventListener("input", (e) => {
    const texto = e.target.value.toLowerCase();
    const compras = document.querySelectorAll(".compra");

    compras.forEach(compra => {
        const textoHijo = compra.children[0].textContent.toLowerCase();

        if (!textoHijo.includes(texto)) {
            compra.classList.add("hidden");
        } else {
            compra.classList.remove("hidden");
        }
    });
});

//Evento editar
container.addEventListener("click", (e) => {

    if(e.target.tagName === "P"){
        console.log("holas");
        modoEdicion = true
        engadir.value = "Actualizar"
        referencia = e.target.closest("div")
        textinput.value = e.target.innerText
    }

})

//listener que permite editar
engadir.addEventListener("click", () => {
    if(modoEdicion){
        actualizar()
    }
})

//Función para editar
function actualizar() {
    referencia.children[0].innerText = textinput.value
    referencia = ""
    modoEdicion = false
    engadir.value =  "+ Engadir Elemento"
    textinput.value = ""
}