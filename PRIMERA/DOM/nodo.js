// Utilizando as diferentes propiedades para recorrer o DOM, indica, polo menos, unha
// forma de acceder aos seguintes nodos:

// o nodo < div >

console.log(document.body.childNodes[1]);
console.log(document.body.firstElementChild);
console.log(document.body.children[0]);
// o nodo < ul >

console.log(document.getElementsByTagName("ul"));

console.log(document.body.children[1].lastChild.nextSibling);

// o segundo <li>

const ulElement = document.querySelector("ul");

console.log(ulElement.firstElementChild);

// Dado un elemento calquera dunha árbore DOM:
// É certo que elemento.lastChild.nextSibling é sempre null?
// Sí, verdadero. El elemento elem.lastChild siempre es el último, no tiene nextSibling.

// ¿É certo que elemento.children[0].previousSibling é sempre null?
// No, falso. elem.children[0] es el primer hijo entre elementos, pero pueden existir nodos que no son elementos antes que él. previousSibling puede ser un nodo texto.

// Escribe o código para pintar as celas diagonais dunha táboa de vermello. Debes
// investigar en internet como cambiar a cor de fondo dunha cela mediante JavaScript.
// A táboa debería quedar similar a esta:

let filas = document.querySelector("table").rows;

for (let i = 0; i < filas.length; i++) {
  const cell = filas[i].children[i];
  cell.style.backgroundColor = "red";
}
