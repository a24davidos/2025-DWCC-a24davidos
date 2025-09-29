"use strict";

// Exercicios;

//Como se accede ao último carácter dunha cadea?

const palabra = "carmen";

console.log(palabra.at(-1));

// Dada a seguinte constante, fai as operacións necesarias para que o primeiro carácter estea en maiúscula:

const cadea = "desenvolvemento web";

let novaCadea = cadea.at(0).toUpperCase() + cadea.substring(1);

console.log(novaCadea);

// Crea unha función denominada reverseString á que se lle pase unha cadea e devolva unha nova cadea cos caracteres da orixinal en sentido inverso

function reverseString(cadea2) {
  let reversed = "";

  for (let i = cadea2.length - 1; i >= 0; i--) {
    reversed += cadea2[i];
  }

  return reversed;
}

console.log(reverseString("Hola"));
