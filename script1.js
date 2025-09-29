"use strict";

// Exercicios;

// 1.Crea unha variable que almacene un día da semana de luns a domingo. En función do valor da variable mostra unha mensaxe indicando se o día é laborable ou non

const nonLaborable = ["sábado", "domingo"];

console.log("EXERCICIO 1");

let diaSemana = "luns";

if (!(diaSemana in nonLaborable)) console.log("É laborable");
else {
  console.log("Non é laborable");
}

// 2.Crea 3 variables e inicialízaas con 3 números diferentes. Mostra por pantalla o maior dos 3 números

console.log("EXERCICIO 2");

let numero1 = 4;
let numero2 = 3;
let numero3 = 7;

let maior;

if (numero1 > numero2 && numero1 > numero3) {
  maior = numero1;
} else if (numero2 > numero1 && numero2 > numero3) {
  maior = numero2;
} else {
  maior = numero3;
}

console.log("O número maior é: " + maior);

// 3. Escribe os números pares do 0 ao 30, incluídos.

for (let i = 0; i <= 30; i += 2) {
  console.log(i);
}

//
