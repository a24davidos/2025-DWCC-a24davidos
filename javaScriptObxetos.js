"use strict";

// EXERCICIOS STRINGS:

/* Dada a seguinte constante, fai as operacións necesarias para que o primeiro carácter estea en maiúscula:
 */

const cadea = 'desenvolvemento web';

let novaCadea = cadea.at(0).toLocaleUpperCase() + cadea.slice(1)

console.log(novaCadea); // 'Desenvolvemento web'


/* Crea unha función denominada reverseString á que se lle pase unha cadea e
devolva unha nova cadea cos caracteres da orixinal en sentido inverso. */


function reverseString(cadena) {
    let reverso = ""
    for (let i = cadena.length; i >= 0; i--) {
        reverso += cadena[i]
    }
    return reverso
}

console.log(reverseString("Hola que tal"));

/* Crea unha función denominada enmascarar á que se lle pase unha cadea de números e devolva unha cadea da mesma lonxitude que a pasada como parámetro pero formada formada por * e as últimas 4 cifras do parámetro de entrada. */


function enmascarar(cadea) {
    return cadea.slice(-4).padStart(cadea.length, '*')
}

console.log(enmascarar("0123456789"));


/* ¿Como calcularías o número de cifras dun número enteiro positivo utilizando propiedades e métodos dos obxectos vistos ata agora? */

let numero = 1998

console.log(numero.toString().length);

/*a. Xera un número enteiro aleatorio entre 0 e 3 (incluídos).*/

console.log(Math.floor(Math.random() * 4));

/* b. Xera un número enteiro aleatorio entre 1 e 3 (incluídos). */

console.log(Math.floor(Math.random() * 3 + 1));

/* Crea unha función que devolva un número enteiro aleatorio entre os dous valores pasados como parámetros. Así, por exemplo, a seguinte instrución debe mostrar un número aleatorio entre 5 e 10 (incluídos): console.log(numeroAleatorio(5, 10)); */
Math.floor(Math.random() * (10 - 5 + 1)) + 5


/* Crea unha función á que se lle pase como parámetro o número de minutos e devolva un string indicando a súa equivalencia en horas e minutos. */

function tiempo(totalMinutos) {
    const horas = Math.floor(totalMinutos / 60)

    const minutos = totalMinutos % 60;


    return `Son ${horas} horas e ${minutos} minutos`
}

console.log(tiempo(120));

/* Crea unha función que dado o radio dun círculo, devolva a súa área. E fai outra función que reciba o radio e devolva o perímetro do círculo. Mostra por consola o resultado das funcións usando dúas cifras decimais. */


// Función para calcular el área de un círculo
function areaCirculo(radio) {
    return Math.PI * radio * radio;
}

// Función para calcular el perímetro de un círculo
function perimetroCirculo(radio) {
    return 2 * Math.PI * radio;
}

// Ejemplo de uso
const radio = 5;

console.log("Área:", areaCirculo(radio).toFixed(2));       // 78.54
console.log("Perímetro:", perimetroCirculo(radio).toFixed(2)); // 31.42


// DATAS

//Mostra o día da semana (en letra) do 25 de xullo do ano actual.

let data = new Date(2025, 6, 25)

let dia = data.getDay()

switch (dia) {
    case 0:
        console.log("Domingo");
        break;
    case 1:
        console.log("Luns");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break; 
    case 6:
        console.log("Sábado");
    default:
        console.log("Aconteceu un erro!");
        
        break;
}

//Crea unha función á que se lle pase un mes (1-12) e un ano e devolva o número de días dese mes

function diasDelMes(mes, año) {
  // new Date(año, mes, 0) devuelve el último día del mes anterior
  // Por eso pasamos mes y 0, y nos da el número de días del mes deseado
  return new Date(año, mes, 0).getDate();
}

// Ejemplos de uso
console.log(diasDelMes(2, 2024)); // 29 (febrero bisiesto)
console.log(diasDelMes(2, 2023)); // 28
console.log(diasDelMes(7, 2025)); // 31 (julio)
console.log(diasDelMes(4, 2025)); // 30 (abril)

/* 3. Crea unha función á que se lle pase unha data e que devolva true se é fin de
semana. */