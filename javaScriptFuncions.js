/* 1. Crea unha función frecha que devolva o cubo dun número pasado como parámetro. */

const cubo = a => a**3;

console.log(cubo(3));

/* Crea unha función frecha á que se lle pase un array e devolva como resultado un
array cos elementos impares do array de entrada. */

const array = [10, 2, 3, 5, 7, 8, 23, 50];

const numerosImpares = arr => arr.filter(num => num % 2 !== 0)

console.log(numerosImpares(array));

/* Crea unha función frecha que sume todos os valores pasados como parámetros,
sendo estes un número indeterminado. */

const array3 = [1,2,3]

const sumarTodos = arr => arr.reduce((a, c) => a + c, 0)

console.log(sumarTodos(array3));

/* Crea unha función á que se lle pasen varios números como parámetros (un número
indeterminado de parámetros) e que devolva a media deses números. */

const media = arr => arr.reduce((a, c) => a + c, 0) / arr.length

console.log(media(array3));

/* Crea unha función frecha chamada minMax() que reciba como parámetro un array
de números e devolva un obxecto co valor mínimo e máximo do array de entrada: */

const minMax = arr => arr.reduce((a,c)=> a > c ? c : a )


console.log(minMax(array4));
