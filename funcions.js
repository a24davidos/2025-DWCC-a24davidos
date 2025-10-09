//1. Crea unha función frecha que devolva o cubo dun número pasado como parámetro.

const cubo = (x) => x ** 3;

console.log(cubo(3));

// 2. Crea unha función frecha á que se lle pase un array e devolva como resultado un array cos elementos impares do array de entrada

const array = [1, 2, 3, 4, 5, 6, 7, 8];

const impares = (array) => array.filter((numero) => numero % 2 == 1);

console.log(impares(array));

// 3. Crea unha función frecha que sume todos os valores pasados como parámetros,sendo estes un número indeterminado.
// Solo funcoina en firefox
// const suma = (...a) => Math.sumPrecise(a);

const suma = (...a) =>
  a.reduce((accumulator, currentValue) => accumulator * currentValue, 1);

console.log(suma(1, 2, 3));
