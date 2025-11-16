"use strict"

/* ● O número de ligazóns da páxina.
 */

console.log(document.querySelectorAll("a").length);

/* ● A dirección da penúltima ligazón.
 */

const ligazons = document.querySelectorAll("a")

console.log(ligazons[ligazons.length - 2].href);


/* ● O número de ligazóns que apuntan a http://proba
 */

const ligazons2 = document.querySelectorAll("a[href='http://proba']")

console.log(ligazons2.length);

//SI QUISIERA BUSCAR MAS SIMPLEMETE AÑADO OTRO []


/* ● O número de ligazóns do terceiro parágrafo.
 */

/* Modifica o estilo das ligazóns que apuntan a http://proba para que teñan o texto de cor laranxa. */


ligazons2.forEach((x) => x.style.backgroundColor="orange")