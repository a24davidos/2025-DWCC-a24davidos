// Dada unha lista <ol> con varios elementos <li>, crea o código necesario para eliminar todos os <li> da lista.

const ol = document.querySelector("ol");

//NUNCA ELIMINES CON FOR, PORQUE COMO SON COLECCIONES VIVAS, VA A TOLEAR Y NO VA FUNCIONAR BIEN EL BUCLE!!! SINO LO QUE PUEDO HACER ES UTILIZAR UNA LISTA ESTÁTICA Y AHÍ SI QUE PODRÍA HACER USO DEL FOR. CON UN FOR AL REVÉS Y UNA COLECCIÓN VIVA SI QUE PUEDES HACER QUE FUNCIONE SI EMPIEZAS POR EL FINAL
while (ol.firstChild) {
  ol.firstChild.remove();
}

// Dado o seguinte código, ¿por que segue aparecendo o “Texto” despois de borrar a táboa?
let taboa = document.getElementById("taboa");
taboa.remove();

//NESTE CASO É PORQUE O TEXTO NON FORMA PARTE DA TABOA, COMO NON É HTML CORRECTO SACAO FORA DA TÁBOA E NON SE PODE ELIMINAR

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

/* FEITOO!!! */

/* 7. Dado un obxecto como o seguinte:  Crea unha función createTree(data) que devolva unha lista ul/li coma a da imaxe da dereita, para os datos proporcionados.*/
/* REHACER!!! */

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
      "apple tree": {},
      magnolia: {},
    },
  },
};

function createTree(data) {
  if (Object.keys(data).length === 0) {
    return null;
  }

  // Creamos una lista <ul> para este nivel
  let ul = document.createElement("ul");

  // Recorremos las claves del objeto (Fish, Tree, etc.)
  for (let key in data) {
    // Creamos un <li> con el nombre de la clave
    let li = document.createElement("li");
    li.textContent = key;

    // Llamada recursiva para los hijos de esta clave
    let subTree = createTree(data[key]);

    // Si la llamada devolvió algo (no null), lo añadimos dentro del <li>
    if (subTree) {
      li.appendChild(subTree);
    }

    // Finalmente añadimos este <li> a la lista actual
    ul.appendChild(li);
  }

  // Devolvemos la <ul> creada
  return ul;
}

let container = document.getElementById("container");
container.appendChild(createTree(arbore));

/* HACER ESTOOOO!!! */
/* Escribe unha función crearCalendario(elemento, ano, mes) que engada ao
elemento pasado como parámetro un calendario
do ano e mes indicados.
O calendario debe ser unha táboa, onde cada
semana é un <tr> e cada día un <td>. A
cabeceira da táboa está creada con <th>.
Por exemplo, o calendario resultado de chamar á
función cos seguintes parámetros vese na imaxe
seguinte. Observar que se aplicaron estilos CSS
para mellorar o aspecto.
crearCalendario(calendario, 2022, 11); */

let table = document.getElementById("taboaOrdenar");
let tbody = table.querySelector("tbody");

// Obtemos TODAS as filas actuais do tbody (nun array)
let filas = Array.from(tbody.rows);

// Ordenamos as filas segundo o contido da primeira cela (columna “Nome”)
filas.sort((a, b) => {
  let nomeA = a.cells[0].textContent.toLowerCase();
  let nomeB = b.cells[0].textContent.toLowerCase();
  return nomeA.localeCompare(nomeB);
});

// Eliminamos as filas actuais e engadimos as ordenadas
tbody.innerHTML = "";
for (let fila of filas) {
  tbody.appendChild(fila);
}
