'use strict'

console.log("Hola");

/* ● A táboa con id="age-table".
 */

const uno = document.querySelector("table")
const dos = document.getElementById("age-table")


console.log(uno);
console.log(dos);


/* ● Todos os elementos label dentro da táboa (debería haber 3).
 */

const tres = document.querySelectorAll("table label")

const cuatro = document.getElementsByTagName("label")
console.log(cuatro);

console.log(tres);

/* ● O primeiro td da táboa.
 */

console.log(uno.querySelector("td"));
console.log(document.querySelector("td"));


/* ● O formulario con name="search".
 */

console.log(document.getElementsByName("search-person")[0])

console.log(document.querySelector("form[name=search-person]"));


/* ● O primeiro input do formulario anterior.
 */ 

const formulario = document.getElementsByName("search-person")

console.log(formulario[0].querySelector("input"));


/* ● O último input do formulario do apartado anterior. */

const ultimoInput = formulario[0].querySelectorAll("input")

console.log(ultimoInput[ultimoInput.length - 1]);


