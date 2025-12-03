'use strict'


/* ● O innerHTML, innerText e textContent da etiqueta “Escolle sexo”: */

const form = document.querySelector("form");
const labels = form.querySelectorAll("label");
const labelSexo = labels[3];

console.log(labelSexo.innerHTML);
console.log(labelSexo.textContent);
console.log(labelSexo.innerText);



/* ● O valor do primeiro input de sexo */

console.log(labelSexo.children[1].value);

/* ● O valor do sexo que estea seleccionado. */

const radioMarcado = document.querySelector('input[name="sexo"]:checked');

console.log(radioMarcado.value);


/* ● O texto de cada un dos elementos <li> */

const lis = document.querySelectorAll("li")

lis.forEach((x)=> console.log(x.innerText));


/* ● Indica cantos elementos <li> hai. */

console.log(lis.length);

/* ● Indica o valor do atributo data-widget-name */

console.log(document.querySelector("div[data-widget-name]").innerText);

