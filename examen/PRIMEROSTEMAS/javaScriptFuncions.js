"use strict"

// 1. Crea unha función frecha que devolva o cubo dun número pasado como parámetro.

const cubo = x => x**3;

console.log(cubo(4));

/* 2. Crea unha función frecha á que se lle pase un array e devolva como resultado un array cos elementos impares do array de entrada. */

const arrayEntrada = [10, 2, 3, 5, 7, 8, 23, 50];

//Así a lo feo
const numeroImpares = array => {
    let arrayPares = []
    for (let numero of arrayEntrada){
        if (numero % 2 == 0){
            arrayPares.push(numero)
        }
    }
    return arrayPares
}

console.log(numeroImpares(arrayEntrada));


//Así a lo wapo
const numeroImpares2 = arr => arr.filter(n => n % 2 == 0)

console.log(numeroImpares2(arrayEntrada));

/* 3.- Crea unha función frecha que sume todos os valores pasados como parámetros,
sendo estes un número indeterminado. */

const suma = arr => arr.reduce((a,b) => a + b, 0)

console.log(suma([1,2,3,4]));


/* 4.- Crea unha función á que se lle pasen varios números como parámetros (un número
indeterminado de parámetros) e que devolva a media deses números. */

const media = arr => ((arr.reduce((a,b) => a + b, 0)) / arr.length)

console.log(media([1,2,3,4]));

/* Crea unha función frecha chamada minMax() que reciba como parámetro un array
de números e devolva un obxecto co valor mínimo e máximo do array de entrada */

const minMax = arr => arr.reduce((a,c) => a > c ? c : a )

console.log(minMax([3,4,2,1,15]));

/* Crea unha función autoinvocada á que se lle pase a lonxitude e ancho dun rectángulo. A función debe mostrar por consola unha mensaxe indicando o valor da área do rectángulo. */

const result = (function(num1,num2){
    return num1 * num2;
})(4,3);

console.log(result);

//Crea unha función para comprobar a validez dun dni

function comprobarDNI(dni) {
  const letrasDNI = "TRWAGMYFPDXBNJZSQVHLCKE"

  if (dni.length !== 9) return false

  let numeros = dni.slice(0, 8)
  let letra = dni.slice(-1)

  let indiceLetra = (Number(numeros) % 23)

  if (letra == letrasDNI[indiceLetra])
    return true;

  return false;

}

console.log(comprobarDNI("48110559X"));


/* Crea unha función que reciba como parámetro unha cantidade enteira e faga o
desglose do número de billetes e moedas necesarios para obtela. Debe usarse o
número mínimo de billetes e moedas. */

console.log("-----------------");


function billetes(entrada) {

    const billetes = [500, 200, 100, 50, 20, 10, 5, 2,1]

    let cantidad = entrada
    let resultado = {}

    for(let billete of billetes){
        if (cantidad >= billete){
            resultado[billete] = Math.floor(cantidad/billete);
            cantidad = cantidad % billete
        }
    }

    return resultado
    

}

console.log(billetes(131));


/* 9. Crea unha función chamada buscarPatron(texto, patron) que reciba como
parámetros un texto e un patrón. A función debe devolver como resultado o número de veces que aparece o patrón no texto, tendo en conta que un carácter pode formar
parte de máis dun patrón encontrado. */

function buscarPatron(entrada, patron){

    let contador = 0;

    for(let i = 0; i <= entrada.length - patron.length; i++){
        const slice = entrada.slice(i,patron.length + i)
        if(patron === slice){
            contador ++;
        }
    };

    return contador
}

console.log(buscarPatron("000111101000ABCHA", "00"));


/* Crea unha función que reciba un array bidimensional de lonxitude variable que se
corresponda cun escenario do xogo de Buscaminas. Este array almacenará un -1 
nas posicións onde hai minas e un 0 en caso contrario. A función debe devolver un
array bidimensional onde cada posición que non teña mina, debe ter a información
do número de minas adxacentes (diagonal, horizontal e vertical). */

const arrayMinas = [
  [0, 0, -1, 0],
  [0, -1, -1, 0]
//0,0 0,1 0,2 0,3
//1,0 1,1 1,2 1,3
];

function comprobarMinas(tablero) {
  const filas = tablero.length;
  const columnas = tablero[0].length;
  const resultado = [];

  for (let i = 0; i < filas; i++) {
    resultado[i] = [];
    for (let j = 0; j < columnas; j++) {
      if (tablero[i][j] === -1) {
        resultado[i][j] = -1; // Marcamos la mina
      } else {
        let minasAdyacentes = 0;

        // Comprobamos las posiciones alrededor de la celda
        for (let x = -1; x <= 1; x++) {
          for (let y = -1; y <= 1; y++) {
            if (x === 0 && y === 0) continue; // Saltamos la propia celda

            const novaFila = i + x;
            const novaColumna = j + y;

            if (
              novaFila >= 0 &&
              novaFila < filas &&
              novaColumna >= 0 &&
              novaColumna < columnas
            ) {
              if (tablero[novaFila][novaColumna] === -1) {
                minasAdyacentes++;
              }
            }
          }
        }

        resultado[i][j] = minasAdyacentes;
      }
    }
  }

  return resultado;
}

console.log(comprobarMinas(arrayMinas));


/* 1. Suma os valores da propiedade price do seguinte array de obxectos: */

//REVISAR ESTEEE!!!!!
const objects = [{ price: 1 }, { price: 2 }, { price: 3 }];


const sumaValores = array => array.reduce((a,b) => a + b.price, 0)


console.log(sumaValores(objects));

/* 2. Utilizando a función reduce, obtén o valor mínimo dun array de números. */

const menores = [2,3,5,1,4];

const menor = arr => arr.reduce((a,c) => a > c ? c : a)

console.log(menor(menores));


//Me quede en sort!!! pagina 23

/* Exercicios: Realiza os seguintes exercicios seguindo un paradigma de programación
funcional, utilizando funcións de arrays e evitando o uso de bucles for e foreach. */

const persoas = [
{ nome: 'aaron', idade: 65, id: 1 },
{ nome: 'beth', idade: 2, id: 2 },
{ nome: 'ánxeles', idade: 13, id: 3 },
{ nome: 'daniel', idade: 3, id: 4 },
{ nome: 'ada', idade: 25, id: 5 },
{ nome: 'erea', idade: 1, id: 6 },
{ nome: 'navia', idade: 43, id: 7 },
];

/* Crea un novo array que conteña só as persoas maiores de idade.
 */
const maiorIdade = persoas.filter((x) => x.idade >= 18);

console.log(maiorIdade);

/* b. Crea un novo array que conteña os nomes (só os nomes) de todas as persoas.
 */

const soNomes = persoas.map((x) => x.nome)

console.log(soNomes);


/* c. Crea un novo array que conteña, en maiúsculas, os nomes das persoas maiores de idade.
 */

const maiusculas = array => 
    array
        .filter((x) => x.idade >= 18)
        .map((x) => x.nome.toUpperCase())

console.log(maiusculas(persoas));


/* d. Crea un novo array que conteña obxectos só co id e o nome das persoas. */
//OJOOOO CON ESTE!!


const idNome = array =>
    array.map( p => ({
        id: p.id,
        nome: p.nome
    }))


console.log(idNome(persoas));


/* 2. Dado un array cos días da semana en minúsculas: */

const diasSemana = ["luns", "martes", "mercores", "xoves", "venres", "sabado", "domingo"]

// a. Obtén un novo array cos días que empecen por “m” e móstrao por consola.

const diasM = diasSemana.filter((x) => x[0] == "m")

console.log(diasM);

/* b. Mostra unha mensaxe indicando se algún día comeza por ‘s’.
 */

const s = diasSemana.some((x) => x[0] == "s")

console.log(s);

/* c. Mostra unha mensaxe indicando se todos os días acaban en ‘s’. */

const acabado = diasSemana.every((x) => x[-1] == "s")

console.log(acabado);

/* d. Mostra por consola o primeiro día que empece por “m”. */

const primerM = diasSemana.find((x) => x[0]== "m")

console.log(primerM);

/* e. Mostra por consola a posición no array do primeiro día que empeza por “m”. */

const primerM2 =  diasSemana.findIndex((x) => x[0]== "m")

console.log(primerM2);

/* f. Crea un novo array cos días da semana en maiúsculas
 */

const novoArray = diasSemana.map((x) => x.toUpperCase())

console.log(novoArray);

/* 
Fai unha función que ordene as notas dun array pasado como parámetro. Por
exemplo, se se pasa o array [4,8,3,10,5] debe devolver [3,4,5,8,10]. Debes utilizar a
función sort e pasarlle como parámetro unha función que ti definas e que sirva para
realizar a comparación de elementos. */


const arrayNumeros = [4,8,3,10,5]

const ordenador = (a,b) => a - b;

arrayNumeros.sort(ordenador);

console.log(arrayNumeros);

/* Dado un array de números, obtén o valor máis alto. (Usa algunha das funcións para
traballar con arrays). */


const maiorDeTodos = arrayNumeros.reduce((a,c) => a < c ? c : a)

console.log(maiorDeTodos);

/* 5. Dada a seguinte información:
 */
const inventors = [
{ first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
{ first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
{ first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
{ first: "Marie", last: "Curie", year: 1867, passed: 1934 },
{ first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
{ first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
{ first: "Max", last: "Planck", year: 1858, passed: 1947 },
{ first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
{ first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
{ first: "Sarah", last: "Goode", year: 1855, passed: 1905 },
{ first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
{ first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

/* Filtra o array de inventores e crea un array só cos inventores que naceron no
século XVI. */

const inventores16 = inventors.filter((x) => x.year >= 1500 && x.year <= 1600)

console.log(inventores16);

/* Crea un array co nome completo dos inventores: ["Albert Einstein", "Isaac
Newton", ...] */


const nomeCompletoInventores = inventors.map((x) => x.first + " " + x.last)

console.log(nomeCompletoInventores);

/* Unha vez obtido o array co nome completo dos inventores do exercicio
anterior, ordénao alfabeticamente polo apelido. */

//REVISAAAR

const nomeOrdenado = nomeCompletoInventores.sort((a,b) => {
    const apelidoA = a.split(" ")[1];
    const apelidoB = b.split(" ")[1];

    return apelidoA.localeCompare(apelidoB)

});

//ejemplo para que veas como se puede encadenar:

/* const nomes = nomeCompletoInventores
    .sort((a, b) => {
        const apelidoA = a.split(" ").slice(-1)[0];
        const apelidoB = b.split(" ").slice(-1)[0];
        return apelidoA.localeCompare(apelidoB);
    })
    .map(nome => nome.split(" ")[0]); // solo el primer nombre */


console.log(nomeOrdenado);

/* d. Ordena alfabeticamente polo apelido o array de obxectos inventores inicial. */

const apartadoD = inventors.sort((a,b) => a.last.localeCompare(b.last) );
console.log(apartadoD);

/* e. Ordena o array de inventores pola data de nacemento. */

const apartadoE = inventors.sort((a,b) => a.year - b.year);

console.log(apartadoE);

/* f. Calcula a suma dos anos que viviron todos os inventores. */

const anosTotal = inventors.map((x) => x.passed - x.year).reduce((a,b) => a +b , 0)


console.log(anosTotal);

/* g. Ordena os inventores polos anos que viviron, primeiro o máis lonxevo */

const ordenarEdad = inventors.sort((a,b) => {
    const viejoA = a.passed - a.year;
    const viejoB = b.passed - b.year;

    return viejoB - viejoA
})

console.log(ordenarEdad);

/* Dada a seguinte información, obtén un obxecto con unha propiedade para cada
medio de transporte, indicando o número de veces que se repite no array. É dicir, o
resultado debería ser {car: 5, truck: 3, bike: 2, walk: 2, van: 2, pogostick: 1}. Intentar
facer o exercicio usando o método reduce */

const data = [
"car",
"car",
"truck",
"truck",
"bike",
"walk",
"car",
"van",
"bike",
"walk",
"car",
"van",
"car",
"truck",
"pogostick",
];

const exercicio6 = data.reduce((a,c) => {

    a[c] = a[c] ? a[c] + 1 : 1;

    return a

}, {})


console.log(exercicio6);
