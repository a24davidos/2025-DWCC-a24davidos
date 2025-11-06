// 1.- Dado o seguinte código HTML, observa que o span ten unha clase css “oculto”. En primeiro lugar, engade a configuración de estilos CSS para a clase “oculto”, de tal forma que inicialmente o span non se mostre na páxina. Ademais, crea o JavaScript necesario para que ao pulsar a ligazón se faga visible o contido do span e se oculte a ligazón.

//Defino la constante
const a = document.getElementById("ligazon");

//Con función que hace uso del this
function correcta() {
  const span = document.getElementById("adicional").classList.remove("oculto");
  this.classList.add("oculto");
}

//Aquí hago uso de la función "correcta"
a.addEventListener("click", correcta);

// // Con función frecha/anónima
// a.addEventListener("click", () => {
//   const span = document.getElementById("adicional").classList.remove("oculto");
//   a.classList.add("oculto");
// });

// 2.- Crea unha páxina web que teña unha caixa de texto, un botón e unha lista. Fai que ao pulsar o botón se engada o texto da caixa de texto como novo elemento da lista. Inicialmente, a páxina debería mostrar algo similar á seguinte imaxe:

// NOTA: Non engadas un formulario. De momento engade só unha caixa de texto e un botón, pois os formularios teñen un comportamento especial

//Para acceder al valor del texto así:

document.getElementById("texto").value;
