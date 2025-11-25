"use strict"

/* ● O elemento con id “input2”.
 */
console.log(document.getElementById("input2"));

/* ● A colección de parágrafos
 */

console.log(document.querySelectorAll("p"));

console.log(document.getElementsByTagName("p"));


/* ● Todos os parágrafos dentro do div con id “lipsum”.
 */

const div = document.getElementById("lipsum")

console.log(div.getElementsByTagName("p"));


/* ● O formulario
 */

console.log(document.getElementsByTagName("form")[0]);


/* ● Todos os inputs
 */

console.log(document.getElementsByTagName("p"))


/* ● Só os inputs con nome “sexo”.
 */

console.log(document.querySelectorAll("input[name=sexo]"));


/* ● Os items da lista con clase “important”. */

const ul = document.querySelector("ul")

console.log(ul.getElementsByClassName("important"));
