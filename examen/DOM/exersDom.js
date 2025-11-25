"use strict"

const ol = document.querySelector("ol")
const lis = ol.querySelectorAll("li")

/* lis.forEach((li) => li.remove());
 */

while (ol.firstElementChild) {
    ol.firstElementChild.remove()
}


// Devuelve un NodeList con todos los divs
const divs = document.querySelectorAll("div");

console.log(divs[0].childNodes);

/* Crea un documento HTML que conteña un elemento <ul>. Dende JavaScript crea 4
elementos <li> e engádeos á lista <ul>, de tal forma que sexan visibles no
navegador. */

const lista = document.getElementById("lista")

const li = document.createElement('li')

li.innerText = 2

lista.append(li)

/* 5. Escribe o código JavaScript para inserir “<li>2</li><li>3</li>” entre os dous <li> seguintes: */

const li3 = document.createElement('li')
li3.innerText = 3

const ul = document.getElementById("listaULExercicio5")

console.log(ul.firstElementChild.after(li));

ul.lastElementChild.before(li3)

/* 7. Dado un obxecto como o seguinte: */

let arbore = {
    Fish: {
        trout: {},
        salmon: {},
    },
    Tree: {
        Huge: {
            sequoia: {},
            oak: {},
        },
        Flowering: {
            'apple tree': {},
            magnolia: {},
        },
    },
};