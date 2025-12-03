const textinput = document.getElementById("textinput")
const engadir = document.getElementById("engadir")
const container = document.getElementById("container")
const compras = document.getElementsByClassName("compra")
const removeAll = document.getElementById("remove-all")
const filter = document.getElementById("filter")

let editando = false;
let targetEdicion = "";

//True = A que esta repetido
function comprobarExistencia() {

    const arrayCompras = Array.from(compras)
    //Ollo acordate sempre de devolver!!!
    return arrayCompras.some((x) => x.firstElementChild.innerText === textinput.value)

}


function crearProducto() {

    if (editando){
        return
    }

    if(textinput.value == ""){
        return
    }

    const div = document.createElement("div")
    const p = document.createElement("p")
    const button = document.createElement("button")


    p.innerText = textinput.value
    button.classList.add("remove-button")
    button.innerText = "X"
    div.classList.add("compra")

    div.append(p)
    div.append(button)

    if (comprobarExistencia()) {
        alert("Xa existe")
    } else {
        container.append(div)
        textinput.value = ""
        gardar()
    }

}

//Método para filtrar
filter.addEventListener("input", () => {
    const arrayCompras = Array.from(compras)
    arrayCompras.forEach((compra) => {
        if (!compra.firstElementChild.innerText.includes(filter.value)) {
            compra.classList.add("hidden")
        } else {
            compra.classList.remove("hidden")
        }
    })
})

//Método para eliminar un container solo
container.addEventListener("click", (e) => {
    console.log(e.target.classList[0]);

    if (e.target.classList[0] === "remove-button") {
        const div = e.target.closest("div")
        div.remove()
    }
})



//Método para eliminar todo
removeAll.addEventListener("click", (e) => {
    const arrCompras = Array.from(compras);
    arrCompras.forEach(x => x.remove())

})

//Método para crear un producto
engadir.addEventListener("click", crearProducto)


container.addEventListener("click", (e) => {
    console.log(e.target.tagName);
    
    if (e.target.tagName === "P"){
        const div = e.target.closest("div")
        deseleccionar()
        div.classList.add("editar")
        editando = true
        textinput.value = div.children[0].innerText
        engadir.value = "+ Actualizar Elemento"
        targetEdicion = div;

    }

})

engadir.addEventListener("click", () => {
    if(editando){
        targetEdicion.children[0].innerText = textinput.value
        targetEdicion = "";
        engadir.value = "+ Engadir Elemento"
        deseleccionar()
        editando = false
        textinput.value = ""

    }
})


function deseleccionar() {
    const arrayCompras = Array.from(compras)

    arrayCompras.forEach((x) => x.classList.remove("editar"))
    

}

function gardar() {
    const arrCompras = Array.from(compras)
    
    const comprasData = arrCompras.map((compra) => {
        return {producto: compra.firstElementChild.innerText}
    })

    console.log(comprasData);
    
    localStorage.setItem("allProducts", JSON.stringify(comprasData))

    console.log("gardou con éxito!");
    

}

function  cargar(params) {
    let productos = localStorage.getItem("allProducts")

    productos = JSON.parse(productos);

    const arrayProductos = productos.map((x) => x.producto)
    console.log(arrayProductos);
    
    arrayProductos.forEach((x) => {
        const div = document.createElement("div")
        const p = document.createElement("p")
        const button = document.createElement("button")


        p.innerText = x
        button.classList.add("remove-button")
        button.innerText = "X"
        div.classList.add("compra")

        div.append(p)
        div.append(button)

        container.append(div)
    })



}


cargar()