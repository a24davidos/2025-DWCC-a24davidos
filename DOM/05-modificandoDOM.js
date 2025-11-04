// Engade a clase CSS "color-title" ao elemento con id "tituloPrincipal"
const titulo = document.getElementById("tituloPrincipal");

titulo.classList.add("color-title");

// Crea un novo elemento <li> coa clase CSS "item-lista" e o texto "Item 5". Engade este elemento á lista desordenada

let li = document.createElement("li");
li.innerHTML = "Item 5"; //Mirar porque esto tb se puede hacer con append
// li.append("Item 5") -> Creo que es de esta manera
li.classList.add("item-lista");

const lista = document.getElementById("lista");
lista.append(li);

// Modifica o ancho do div con id "contedor" a 800px usando JavaScript

let div = document.getElementById("contedor");

div.style.width = "900px";

// Cambia o valor do atributo "placeholder" do input a "Escribe aquí..."

let input = document.getElementById("entradaTexto");
//esto no va tienes que revisarlo
input.style.value = "Escribe aquí...";

// Selecciona a lista con id "lista" e cámbialle o tamaño da fonte a 18px

// Elimina o segundo elemento da lista (Item 2)

// Insire un novo parágrafo co texto "Texto dinámico" despois do elemento con id "mensaxe"
