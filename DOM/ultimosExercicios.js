// Dada unha lista <ol> con varios elementos <li>, crea o código necesario para eliminar todos os <li> da lista.

const ol = document.querySelector("ol");

while (ol.firstChild) {
  ol.firstChild.remove();
}

// Dado o seguinte código, ¿por que segue aparecendo o “Texto” despois de borrar a táboa?
let taboa = document.getElementById("taboa");
// taboa.remove();
//Neste caso é porque estamos accedendo a taboa a través do HTMLCollection , é dicir só accede ás etiquetas, mentres que os nodos teñen a capacidade de acceder a texto e comentarios.

/* 4.- Crea un documento HTML que conteña un elemento <ul>. Dende JavaScript crea 4 elementos <li> e engádeos á lista <ul>, de tal forma que sexan visibles no navegador. */

let ul = document.querySelector("ul");

for (let i = 0; i < 4; i++) {
  let li = document.createElement("li");
  li.innerHTML = "Manuel";
  ul.append(li);
}

// 5.- Escribe o código JavaScript para inserir “<li>2</li><li>3</li>” entre os dous <li> seguintes:

const ul5 = document.getElementById("listaULExercicio5");

let li2 = document.createElement("li");
li2.innerHTML = "2";
let li3 = document.createElement("li");
li3.innerHTML = "3";

ul5.firstElementChild.after(li2);
ul5.lastElementChild.before(li3);

// 6.- Descarga os ficheiros fonte 05-modificandoDOM.html e 05-modificandoDOM.js e realiza as tarefas propostas no propio ficheiro JavaScript.
