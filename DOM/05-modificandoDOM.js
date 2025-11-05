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
console.log(input);

//esto no va tienes que revisarlo
input.placeholder = "Escribe aquí...";

// Selecciona a lista con id "lista" e cámbialle o tamaño da fonte a 18px

let listaId = document.getElementById("lista");

listaId.style.fontSize = "18px";


// Elimina o segundo elemento da lista (Item 2)

let item2 = document.querySelector("#lista li:nth-child(2)");

//Otra forma de seleccionar 
/* 
let items = document.getElementsByClassName("item-lista");
let item2 = items[1]; 
*/

listaId.removeChild(item2);

// Insire un novo parágrafo co texto "Texto dinámico" despois do elemento con id "mensaxe"

let texto = document.createElement("p");
texto.innerHTML = "Texto dinámico"

let mensaxe = document.getElementById("mensaxe");

mensaxe.after(texto);



/* estática: os cambios no DOM non afectan ao contido da colección. Por
exemplo, document.querySelectorAll() devolve unha NodeList estática.
○ viva: o seu contido actualízase cada vez que se engade ou elimina un
elemento do DOM. Así, por exemplo, Node.childNodes devolve unha
NodeList viva de nodos. Sen embargo, childNodes é unha propiedade de só
lectura, xa que non se poden engadir nin eliminar elementos da colección
directamente. Para facelo haberá que utilizar os métodos apropiados de
modificación do DOM. */