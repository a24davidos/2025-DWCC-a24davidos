"use strict"
// 1.- Dado o seguinte código HTML, observa que o span ten unha clase css “oculto”. En primeiro lugar, engade a configuración de estilos CSS para a clase “oculto”, de tal forma que inicialmente o span non se mostre na páxina. Ademais, crea o JavaScript necesario para que ao pulsar a ligazón se faga visible o contido do span e se oculte a ligazón.

//Defino la constante
const a = document.getElementById("ligazon");

//Con función que hace uso del this
/* function correcta() {
  const span = document.getElementById("adicional").classList.remove("oculto");
  this.classList.add("oculto");
} */

//Aquí hago uso de la función "correcta"
/* a.addEventListener("click", correcta);
 */
// Con función frecha/anónima
a.addEventListener("click", () => {
  const span = document.getElementById("adicional").classList.remove("oculto");
  a.classList.add("oculto");
});

// 2.- Crea unha páxina web que teña unha caixa de texto, un botón e unha lista. Fai que ao pulsar o botón se engada o texto da caixa de texto como novo elemento da lista. Inicialmente, a páxina debería mostrar algo similar á seguinte imaxe:

// NOTA: Non engadas un formulario. De momento engade só unha caixa de texto e un botón, pois os formularios teñen un comportamento especial

//Para acceder al valor del texto así:

const engadir = document.getElementById("engadir");

engadir.addEventListener("click", () => {
  const li = document.createElement("li");
  const textoInput = document.getElementById("texto"); // Obtén el elemento input
  let valortexto = textoInput.value; // Obtén su valor
  li.innerHTML = valortexto; // Asigna el valor al elemento li
  textoInput.value = ""; // Limpia el campo de texto
  const lista = document.getElementById("lista");
  lista.append(li);

})

document.getElementById("texto").value;

/* 3. Nunha páxina HTML hai un botón ao que fai referencia a variable button do
seguinte código. Observa o seguinte código e indica que manexadores de eventos se executan: */

let button = document.getElementById("button")

button.addEventListener("click", () => console.log("1"));
button.removeEventListener("click", () => console.log("1"));
button.onclick = () => console.log(2);

/* Cuando se clicka al botón se hace un console log de 1, pero cuando se intenta eliminar el Event Listener no se puede ya que es una función anónima, y por lo tanto el listener del primer paso no se elimina, lo cual no permite que se imprima el 1.

A "onclick" no hace falta pasarle nada debido a que es una propiedad del elemento HTMLDataListElement, asi que no encesitas pasar el evento */

/* 4.- Crea un menú que se abra/colapse ao facer clic sobre el. Inicialmente o menú debe estar colapsado e ao pulsar no texto “Sweeties (click me)!” deben mostrarse as opcións do menú. */

const sweeties = document.getElementById("sweeties");

sweeties.addEventListener("click", () => {
  const menu = document.getElementById("menu")
  menu.classList.toggle("oculto");
})

/* 5.- Insire unha imaxe nunha páxina web e engádelle un listener para cada un dos seguintes eventos: click, dblclick, contextmenu, mousedown, mouseup, wheel, mouseover, mouseout, dragstart, drag, dragend. Cada vez que suceda un destes eventos mostra por consola unha mensaxe informando do evento que sucedeu. Proba os diferentes eventos e observa a orde na que suceden. */

const imagen = document.getElementById("adam");

const eventos = {
  click: "Evento: click (hizo clic)",
  dblclick: "Evento: doble clic",
  contextmenu: "Evento: clic derecho (menú contextual)",
  mousedown: "Evento: botón del ratón presionado",
  mouseup: "Evento: botón del ratón soltado",
  wheel: "Evento: rueda del ratón",
  mouseover: "Evento: ratón sobre la imagen",
  mouseout: "Evento: ratón fuera de la imagen",
  dragstart: "Evento: inicio del arrastre",
  drag: "Evento: arrastrando",
  dragend: "Evento: fin del arrastre",

};

console.log(Object.keys(eventos));

Object.keys(eventos).forEach((evento) => {
  imagen.addEventListener(evento, () => {
    console.log(eventos[evento])
  })
});

/* // Evento: click
imagen.addEventListener("click", () => {
  console.log("Evento: click (hizo clic)");
});

// Evento: doble clic
imagen.addEventListener("dblclick", () => {
  console.log("Evento: doble clic");
});

// Evento: clic derecho (menú contextual)
imagen.addEventListener("contextmenu", () => {
  console.log("Evento: clic derecho (menú contextual)");
});

// Evento: botón del ratón presionado
imagen.addEventListener("mousedown", () => {
  console.log("Evento: botón del ratón presionado");
});

// Evento: botón del ratón soltado
imagen.addEventListener("mouseup", () => {
  console.log("Evento: botón del ratón soltado");
});

// Evento: rueda del ratón
imagen.addEventListener("wheel", () => {
  console.log("Evento: rueda del ratón");
});

// Evento: ratón sobre la imagen
imagen.addEventListener("mouseover", () => {
  console.log("Evento: ratón sobre la imagen");
});

// Evento: ratón fuera de la imagen
imagen.addEventListener("mouseout", () => {
  console.log("Evento: ratón fuera de la imagen");
});

// Evento: inicio del arrastre
imagen.addEventListener("dragstart", () => {
  console.log("Evento: inicio del arrastre");
});

// Evento: arrastrando
imagen.addEventListener("drag", () => {
  console.log("Evento: arrastrando");
});

// Evento: fin del arrastre
imagen.addEventListener("dragend", () => {
  console.log("Evento: fin del arrastre");
}); */

/* 1.- Dado o seguinte código HTML:*/
/* - Cando o cursor do rato entre e saia do botón, mostra unha mensaxe por
consola indicándoo */

const buttonE1 = document.getElementById("ocultar");

buttonE1.addEventListener("mouseover", () => {
  console.log("Evento: ratón sobre texto");
})

buttonE1.addEventListener("mouseout", () => {
  console.log("Evento: Ratón saliendo")
})

/* Ao pulsar o botón debe desaparecer o div con id=texto.*/

buttonE1.addEventListener("click", function () {
  const texto = document.getElementById("textoE1");
  texto.classList.toggle("oculto");
})

/* Cando se escriba algo na caixa de texto, debe mostrarse información da
tecla pulsada no div e tamén o código da tecla pulsada. Ademais, se o div
estaba oculto, debe mostrarse. */
/* 
const inputTexto1 = document.getElementById("textoExercicio1");

const texto1 = document.getElementById("textoE1");


inputTexto1.addEventListener("keydown", function(event){
  texto1.textContent = `KeyboardEvent: key='${event.key}' | code='${event.code}'`;
  console.log("Tecla pulsada: " , event.key)
})

 */

const inputTexto1 = document.getElementById("textoExercicio1");
const texto1 = document.getElementById("textoE1");

inputTexto1.addEventListener("keydown", function () {
  setTimeout(() => {
    texto1.innerHTML = inputTexto1.value;
  }, 0);
});
