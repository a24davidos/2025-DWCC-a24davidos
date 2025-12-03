"use strict";

/* 1. Crea unha variable que almacene un día da semana de luns a domingo. En función do valor da variable mostra unha mensaxe indicando se o día é laborable ou non. */

const noLaborables = ["sábado", "domingo"]

const dia = "domingo"


if (noLaborables.includes(dia.toLowerCase())) {
    console.log("O día non é laborable");
} else {
    console.log("O día é laborable");

}

/*Crea 3 variables e inicialízaas con 3 números diferentes. Mostra por pantalla o maior dos 3 números */

const num1 = 12;
const num2 = 25;
const num3 = 7;

let maior;

if (num1 >= num2 && num1 >= num3) {
    maior = num1;
} else if (num2 >= num1 && num2 >= num3) {
    maior = num2;
} else {
    maior = num3;
}

console.log("O maior número é:", maior);

/* Escribe os números pares do 0 ao 30, incluídos. */

for (let i = 0; i <= 30; i += 2) {
    console.log(i);
}

/*Escribe as potencias de 2, dende 2⁰ ata 2 20 . Para cada potencia debe saír un texto similar a “2 elevado a 0 = 1”*/

for (let i = 0; i <= 20; i++) {
    let resultado = 2 ** i
    console.log(`2 elevado a ${i} = ${resultado}`);

}

/* Inicializa unha variable a un número, calcula o seu factorial e mostra a resultado por consola. (5! = 5*4*3*2*1). */

let numero = 6;
let resultado = 1;

for (let i = numero; i > 0; i--) {
    resultado *= i;
}

console.log(resultado);

/* Cálculo do IMC (índice de masa corporal). IMC = peso (kg) / [estatura (m)] */
/* a. Almacena en variables o peso e altura de dúas persoas.
 */

let peso1 = 80;
let altura1 = 1.8;

let peso2 = 90;
let altura2 = 1.6;

/* b. Calcula o IMC das dúas persoas. */

let IMC1 = peso1 / (altura1**2)
let IMC2 = peso2 / (altura2**2)

console.log(IMC1);
console.log(IMC2);


/* Indica que persoa ten o maior IMC cunha cadea similar a: 'O IMC (25.3) da primeira persoa é maior que o da segunda persoa (22.5)!' */

if (IMC1 > IMC2){
    console.log(`O IMC(${IMC1}) da primeira persoa é maior que o da segunda persoa (${IMC2})!`);
} else{
    console.log(`O IMC(${IMC1}) da primeira persoa é menor que o da segunda persoa (${IMC2})!`);
}

/* Crea unha función que reciba como parámetro un prezo e unha porcentaxe de desconto. A función debe calcular o prezo final aplicado o desconto e devolver este valor. */

function desconto(prezo, porcentaxe){
    return prezo - (prezo * (porcentaxe/100))
}


console.log(desconto(10, 40));
