const textEngadir = document.getElementById("textinput");
const engadir = document.getElementById("engadir");
const container = document.getElementById("container");
const removeOne = document.getElementById("remove-button");
const removeAll = document.getElementById("remove-all");
const filtro = document.getElementById("filter");
const compras = document.querySelectorAll("compra")


//Función para crear tarxeta
function crearTarxeta() {
  //Collemos a referencia do que queremos meter
  const producto = textEngadir.value;
  console.log(producto);
  console.log(textEngadir.value);


  //Engado o novo div, o button e o p
  const div = document.createElement("div")
  const p = document.createElement("p")
  const button = document.createElement("button")

  // Configurar contenido y clases (mejor que usar id repetido)
  div.classList = "compra"
  p.innerText = producto
  button.classList = "remove-button"
  button.innerText = "X"
  //Creo a compra
  div.appendChild(p)
  div.appendChild(button)

  return div;

}

//Función para engadir un card non repetido
engadir.addEventListener("click", function (e) {


  //Evito que reenvie
  e.preventDefault()

  if (textEngadir.value) {
    if (!comprobarExistencia(textEngadir.value)) {
      const div = crearTarxeta();

      document.getElementById("container").prepend(div)
      textEngadir.value = "";
    }
  }

})


//Función para comprobar se xa existe un producto
function comprobarExistencia(producto) {
  const compras = document.querySelectorAll(".compra > p");

  for (const compra of compras) {
    if (compra.innerText.toLowerCase() === producto.toLowerCase()) {
      alert("Disculpa pero o producto xa existe na base de datos!")
      return true
    }
  }
  return false
}

//Función para deseleccionar
function deseleccionar() {
  const compras = document.querySelectorAll(".compra")

  for (const compra of compras) {
    compra.classList.remove("editar")
  }
}

//Seleccionar para actualizar
container.addEventListener("click", function (e) {
  const p = e.target.closest("p");
  const div = e.target.closest("div");

  if (p) {
    deseleccionar()
    div.classList.add("editar")
    textEngadir.value = p.innerText
    console.log(div.classList);

  }
})

//Actualizar
textEngadir.addEventListener("input", function (e) {
  // Selecciona la tarjeta que está en modo editar
  const editarDiv = document.querySelector(".compra.editar");
  if (editarDiv) {
    const p = editarDiv.querySelector("p");
    p.innerText = textEngadir.value;
  }
});

//Deixar de actualizar
textEngadir.addEventListener("blur", () => {
  // Solo actúa si hay una tarjeta en modo edición
  const divEditando = document.querySelector(".compra.editar");
  if (divEditando) {
    textEngadir.value = "";
    divEditando.classList.remove("editar");
  }

})

filtro.addEventListener("input", function (e) {

  console.log(filtro.value);

  const compras = document.querySelectorAll(".compra")

  for (const compra of compras) {
    if (!compra.firstElementChild.innerText.toLowerCase().includes(filtro.value.toLowerCase())) {
      compra.classList.add("hidden")
    } else {
      compra.classList.remove("hidden")
    }
  }

  console.log(compras[0].firstElementChild);

})




//Función para eliminar  un card
container.addEventListener("click", function (e) {
  //Si el target es el remove-button eliminamos la card
  if (e.target.classList == "remove-button") {
    const div = e.target.closest("div")
    div.remove()
  }

})
//Función para eliminar todos los card
removeAll.addEventListener("click", function (e) {
  const compras = document.querySelectorAll(".compra")

  compras.forEach((compra) => compra.remove())

})








