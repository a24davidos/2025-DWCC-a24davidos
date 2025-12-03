/* O elemento con id “input2” */

console.log(document.getElementById("input2"));

/* A colección de parágrafos */

console.log(document.getElementsByTagName("p"))

/* Todos os parágrafos dentro do div con id “lipsum” */

const ids = document.getElementById("lipsum")
const parrafos = ids.getElementsByTagName("p");


console.log(parrafos); 

/* O formulario */

console.log(document.querySelector("form"))

/* Todos os inputs */

console.log(document.getElementsByTagName("input"))

/*Só os inputs con nome “sexo”.*/

console.log(document.querySelectorAll("input[name='sexo']"))

/*Os items da lista con clase “important”.*/

console.log(document.querySelectorAll("li[class='important']"))