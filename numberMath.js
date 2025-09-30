"use strict";

// Exercicios;

// NUMBER

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

// Crea unha función denominada enmascarar á que se lle pase unha cadea de números e devolva unha cadea da mesma lonxitude que a pasada como parámetro pero formada formada por * e as últimas 4 cifras do parámetro de entrada

function enmascarar(texto) {
  if (texto.length <= 4) return texto;

  let ultimos4 = texto.slice(-4);
  let enmascarado = ultimos4.padStart(texto.length, "*");

  return enmascarado;
}

console.log(enmascarar("48110559"));

// MATH

// Numeros aleatorios
// Xera un número enteiro aleatorio entre 0 e 3 (incluidos)
console.log(Math.floor(Math.random() * 4));
// Xera un número enteiro aleatorio entre 1 e 3 (incluidos)
console.log(Math.floor(Math.random() * 3) + 1);
// Crea unha función que devolva un número enteiro aleatorio entre os dous valores pasados como parámetros. Así, por exemplo, a  eguinte instrución debe mostrar un número aleatorio entre 5 e 10 (incluídos)
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomIntInclusive(5, 10));

// Crea unha función á que se lle pase como parámetro o número de minutos e devolva un string indicando a súa equivalencia en horas e minutos

function minutosHoras(minutos) {
  let resto = minutos % 60;

  let horas_perfectas = minutos - resto;

  return horas_perfectas / 60 + " horas e " + resto + " minutos";
}

console.log(minutosHoras(130));

// Crea unha función que dado o radio dun círculo, devolva a súa área. E fai outra función que reciba o radio e devolva o perímetro do círculo. Mostra por consola o resultado das funcións usando dúas cifras decimais.
