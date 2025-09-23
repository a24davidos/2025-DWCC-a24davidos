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
