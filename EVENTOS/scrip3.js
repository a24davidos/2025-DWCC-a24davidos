'use strict';

// Engade un event listener ao boton con id "btnAccion" que mostre un alert ao facer click

const bntAccion = document.getElementById("btnAccion");

bntAccion.addEventListener("click", () => {
    alert("Me cago en dios");
} )

// Cada vez que se fai click no boton "Alternar clase" fai que se engada/elimine a clase "resaltado" no div con id "mensaxe".

const alternar = document.getElementById("btnAlternar")

alternar.addEventListener("click", ()=>{
    const mensaxe = document.getElementById("mensaxe");
    mensaxe.classList.toggle("resaltado")
})

// Mostra por consola o valor do input cando se envÃ­a o formulario

const form = document.getElementById("formulario");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const valor = document.getElementById("entradaTexto").value;
    console.log("Valor do input; ", valor);
    

})

