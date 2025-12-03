"use strict"

/* Utilizando as diferentes propiedades para recorrer o DOM vistas nos apartados
anteriores indica, polo menos, unha forma de acceder aos seguintes nodos dende o
elemento <body> (document.body):
● o nodo <div>
*/

console.log(document.querySelector("div"));

const div = document.querySelector("div")

console.log(div.nextElementSibling);


/* ● o nodo <ul>*/
const ul = div.nextElementSibling;

/* ● o segundo <li> */ 


console.log(ul.lastElementChild);
