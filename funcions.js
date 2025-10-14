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
  a.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(suma(1, 2, 3));

// 4.Crea unha función á que se lle pasen varios números como parámetros (un número indeterminado de parámetros) e que devolva a media deses números.
const media = (...a) =>
  a.reduce((accumulator, currentValue) => accumulator + currentValue, 0) /
  a.length;

console.log(media(3, 4, 5));

// 5.Crea unha función frecha chamada minMax() que reciba como parámetro un array de números e devolva un obxecto co valor mínimo e máximo do array de entrada:

//Se devuelve un objeto porque estoy utilizando los paréntesis y las llaves, así entiende que estoy devolviendo un objeto,  sería lo mismo que poner let obxecto = {min: Math.min....}, pero así lo resumes
const minMax = (numeros) => ({
  min: Math.min(...numeros),
  max: Math.max(...numeros),
});

console.log(minMax([1, 2, 3, 4, 5]));

// 6. Crea unha función autoinvocada á que se lle pase a lonxitude e ancho dun rectángulo. A función debe mostrar por consola unha mensaxe indicando o valor da área do rectángulo.

// 7. Crea unha función á que se lle pase un DNI (ex: 12345678w ou 87654321T) e devolva se é correcto ou non.

// 9. Crea unha función chamada buscarPatron(texto, patron) que reciba como
// parámetros un texto e un patrón. A función debe devolver como resultado o número
// de veces que aparece o patrón no texto, tendo en conta que un carácter pode formar
// parte de máis dun patrón encontrado.
// Debe implementarse a función de forma manual sen utilizar as funcións
// proporcionadas pola linguaxe JavaScript para buscar en cadeas.
// Non se deben distinguir maiúsculas de minúsculas.
// Exemplo: buscarPatron(“000111101000ABCHA”, “00”) debe devolver 4

function calcularMinasAdxacentes2(tableiro)