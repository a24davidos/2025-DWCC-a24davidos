/* Crea unha páxina que teña un formulario con unha caixa de texto. Utilizando JavaScript, fai que cando a caixa de texto teña o foco, a súa cor de fondo cambie e cando perda o foco volva ao estilo por defecto.
Ademais, cando a caixa de texto perda o foco e estea baleira, debe escribirse por
consola unha mensaxe informando da situación. */

    
    const input = document.getElementById("item-input");

    function imprimirMensaje(e) {
        console.log(e.target.value);
    }

    function cambiarCor(e) {
        e.target.classList.add("color")
    }

    function quitarCor(e) {
        e.target.classList.remove("color")
    }

    input.addEventListener('input', imprimirMensaje)
    input.addEventListener('focus', cambiarCor)
    input.addEventListener('blur', function (e) {
        if (e.target.value == "") console.log("espabila chaval");
        quitarCor(e)
    })

/*Crea unha páxina web que conteña un formulario con varios campos: input, select,
radiobutton, checkbox, área de texto. Escribe o código JavaScript necesario para mostrar por consola todos os valores dos campos do formulario cando estes se envien */

const form = document.getElementById('item-form2');

const submit = document.querySelector("submit")

form.addEventListener("submit", function(e){
    e.preventDefault()
    console.log(document.getElementById("item-input2").value);
    console.log(document.getElementById("priority-input").value);
    console.log(document.getElementById("checkbox").checked);
    
    
    
    
})
