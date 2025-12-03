'use strict';

/* 1.- Crea unha variable que almacene un día da semana de luns a domingo. En función do valor da variable mostra unha mensaxe indicando se o día é laborable ou non  */

console.log("EXERCICIO 1");

const diaSemana = "luns"

switch(diaSemana.toLowerCase()){
    case "luns":
        console.log("É un día da semana")
        break
    case "martes":
        console.log("É un día da semana")
        break
    case "mercores":
        console.log("É un día da semana");
        break
    case "xoves":
        console.log("É un día da semana");
        break
    case "venres":
        console.log("É un día da semana");
        break
    case "sabado":
        console.log("É fin de semana");
        break
    case "domingo":
        console.log("É fin de semana");
        break
    default:
        console.log("Por favor introduza un día válido");
        break
}

console.log("------------------");


/* 2.- Crea 3 variables e inicialízaas con 3 números diferentes. Mostra por pantalla o maior dos 3 números. */

console.log("EXERCICIO 2");


let num1 = 1;
let num2 = 0;
let num3 = 7;

if(num1 >= num2 && num1 >=num3){
    console.log(`O maior dos números é ${num1}`);
} else if(num2 >= num1 && num2 >=num3){
    console.log(`O maior dos números é ${num2}`);
    
} else{
    console.log(`O maior dos números é ${num3}`);
}

console.log("------------------");

/* 3.- Escribe as potencias de 2, dende 2⁰ ata 2 20 . Para cada 
potencia debe saír un texto similar a “2 elevado a 0 = 1” */

console.log("EXERCICIO 3");


for (let index = 0; index <= 20; index++) {
    console.log(`2 elevado a ${index} = ${2**index}`);
    
}

console.log("------------------");

/* 5.- Inicializa unha variable a un número, calcula o seu factorial e mostra a resultado por consola. (5! = 5*4*3*2*1). */

let numero = 5
let resultado = 1

for (let index = numero; index > 0; index--) {
    resultado *= index
}

console.log(resultado);

/* Crea unha función que reciba como parámetro un prezo e unha porcentaxe de desconto. A función debe calcular o prezo final aplicado o desconto e devolver este valor. */

function desconto(prezo, porcentaxe){

    return prezo * ((100-porcentaxe)/100)

}


console.log(desconto(100, 20));
