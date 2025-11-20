"use strict"

// 1. Crea unha función frecha que devolva o cubo dun número pasado como parámetro.

const cubo = x => x**2

console.log(cubo(3));


/* 2. Crea unha función frecha á que se lle pase un array e devolva como resultado un array cos elementos impares do array de entrada. */

const arrayEntradaa= [10, 2, 3, 5, 7, 8, 23, 50];

const obternerImpar = (arr) => arr.filter((x) => x%2 != 0)

console.log(obternerImpar(arrayEntradaa));




//Así a lo wapo


/* 3.- Crea unha función frecha que sume todos os valores pasados como parámetros,
sendo estes un número indeterminado. */

const sumarTodo = (...num) => num.reduce((a,b) => a + b , 0)

console.log(sumarTodo(1,23,4));


/* 4.- Crea unha función á que se lle pasen varios números como parámetros (un número
indeterminado de parámetros) e que devolva a media deses números. */

const mediaTodo = (...num) => num.reduce((a,b) => a + b , 0) / num.length

console.log(mediaTodo(5, 10 ,15));



/* Crea unha función frecha chamada minMax() que reciba como parámetro un array
de números e devolva un obxecto co valor mínimo e máximo do array de entrada */

const minMax = array => ({
  Min: Math.min(...array),
  Max: Math.max(...array)
})

console.log(minMax([3,4,5,6]));





/* 1. Suma os valores da propiedade price do seguinte array de obxectos: */

//REVISAR ESTEEE!!!!!

const objects = [{price:1},  {price:2}, {price: 5}]


const sumaValores = objects.reduce((a,c) => a + c.price, 0)

console.log(sumaValores);
console.log("que falla");


/* 2. Utilizando a función reduce, obtén o valor mínimo dun array de números. */

const numeritos = [2,3,1,6,78,2]

const resultad0 = numeritos.reduce((a,c) => a > c ? c : a)

console.log(resultad0);



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


const maiorIdade = persoas.filter((a) => a.idade > 17)

console.log(maiorIdade);

/* b. Crea un novo array que conteña os nomes (só os nomes) de todas as persoas.
 */

const soNome = persoas.map((x) => x.nome)

console.log(soNome);


/* c. Crea un novo array que conteña, en maiúsculas, os nomes das persoas maiores de idade.
 */

const M = persoas.filter((a) => a.idade > 17).map((x) => `${x.nome[0].toLocaleUpperCase()}${x.nome.slice(1)}`)

console.log(M);


/* d. Crea un novo array que conteña obxectos só co id e o nome das persoas. */
//OJOOOO CON ESTE!!

const OJO = persoas.map(a => ({
    id: a.id,
    nome: a.nome
}))

console.log(OJO);


/* 2. Dado un array cos días da semana en minúsculas: */


// a. Obtén un novo array cos días que empecen por “m” e móstrao por consola.




/* b. Mostra unha mensaxe indicando se algún día comeza por ‘s’.
 */



/* c. Mostra unha mensaxe indicando se todos os días acaban en ‘s’. */


/* d. Mostra por consola o primeiro día que empece por “m”. */


/* e. Mostra por consola a posición no array do primeiro día que empeza por “m”. */


/* f. Crea un novo array cos días da semana en maiúsculas
 */


/* 
Fai unha función que ordene as notas dun array pasado como parámetro. Por
exemplo, se se pasa o array [4,8,3,10,5] debe devolver [3,4,5,8,10]. Debes utilizar a
función sort e pasarlle como parámetro unha función que ti definas e que sirva para
realizar a comparación de elementos. */

const apa = [4,8,3,10,5]

function ordenar(a,b){
    return a - b
}

const ordenaditos = apa.sort(ordenar)

console.log(ordenaditos);






/* Dado un array de números, obtén o valor máis alto. (Usa algunha das funcións para
traballar con arrays). */




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



/* Crea un array co nome completo dos inventores: ["Albert Einstein", "Isaac
Newton", ...] */



/* Unha vez obtido o array co nome completo dos inventores do exercicio
anterior, ordénao alfabeticamente polo apelido. */

//REVISAAAR

const nombrecompleto = inventors.map((x) => `${x.first} ${x.last}`)

console.log(nombrecompleto);

const ordenaditoss = nombrecompleto.sort((a,b) => {

    const nombreA = a.split(" ")[1]
    const nombreB = b.split(" ")[1]

    return nombreA.localeCompare(nombreB)

}) 
console.log(ordenaditoss);


//ejemplo para que veas como se puede encadenar:



/* d. Ordena alfabeticamente polo apelido o array de obxectos inventores inicial. */



/* e. Ordena o array de inventores pola data de nacemento. */


/* f. Calcula a suma dos anos que viviron todos os inventores. */


/* g. Ordena os inventores polos anos que viviron, primeiro o máis lonxevo */



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


const datos = []

data.forEach((a) => {

    if (datos[a]){
        datos[a] += 1
    } else{
        datos[a] = 1
    }

    return datos
})

console.log(datos);



// DESESTRUCTURACIÓN 

/* 1. Imaxinar que se recolle a seguinte información relativa a un xogo dun servidor web: */

const players = [
    [
        "Neuer",
        "Pavard",
        "Martinez",
        "Alaba",
        "Davies",
        "Kimmich",
        "Goretzka",
        "Coman",
        "Muller",
        "Gnarby",
        "Lewandowski",
    ],
    [
        "Burki",
        "Schulz",
        "Hummels",
        "Akanji",
        "Hakimi",
        "Weigl",
        "Witsel",
        "Hazard",
        "Brandt",
        "Sancho",
        "Gotze",
    ],
];

/* Crea as variables players1, players2 que conteñan un array cos xogadores
de cada equipo. Así, players1 terá os xogadores do primeiro equipo e
players2 os do segundo equipo. */

const [players1, players2] = players

console.log(players1, players2);



/* O primeiro xogador do array é o porteiro e o resto son xogadores de campo.
Crea unha variable chamada gk que conteña o porteiro do primeiro equipo e
unha variable de tipo array chamada fieldPlayers que conteña o resto de
xogadores do equipo. */

const [portero, ...resto] = players1

console.log(portero, resto);


/* c. Crea un array allPlayers que conteña os xogadores dos dous equipos. */

const allPlayers = [...players1, ...players2]

console.log(allPlayers);



/* O primeiro equipo substituíu os xogadores iniciais por 'Thiago', 'Coutinho',
'Periscic'. Crea unha nova variable de tipo array chamada players1Final que
conteña todos os xogadores: os iniciais e tamén os 3 novos */




/* Dado un array con nomes de variables formados por dúas palabras separadas por
“_”, fai as operacións necesarias para mostrar por consola os nomes das variables
en formato camelCase. Por exemplo, se o array de entrada é [“first_name”, “
last_NAME”], deberase mostrar por consola “firtsName” e “lastName”. */

const arrayEntrada = ["first_name", "last_NAME"]




/* Crea un obxecto chamado television coas propiedades marca, categoría
(televisores), unidades (4), prezo (354.99) e un método chamado importe que devolva o prezo total das unidades (unidades x prezo). */

const television = {
    marca: "LG",
    unidades: 4,
    prezo: 354.99,
    importe: function () {
        return this.unidades * this.prezo;
    }
}

console.log(television.importe());

/* 2. Imaxinar que se recolle a seguinte información relativa a un xogo dun servidor: */

const game = {
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    }
};



/* ● team1: debe inicializarse co valor da propiedade team1 do obxecto inicial.
● draw: debe inicializarse co valor da propiedade x do obxecto inicial.
● team2: debe inicializarse co valor da propiedade team2 do obxecto inicial. */

const {odds:{team1, x:draw, team2}}  = game

console.log(team1, draw, team2);



// Exercicio Chatgpt
const partido = {
    oddsInfo: {
        equipo1: 1.5,
        x: { bajo: 2.0, medio: 3.0, alto: 5.0 },
        equipo2: 4.2,
    },
    lugar: 'Estadio Nacional'
};


const {oddsInfo:{equipo1, x:{alto:high}, equipo2}, lugar} = partido

console.log(equipo1, high, lugar, equipo2);

// Dado o seguinte obxecto:

const juego = { scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"]};

let scorers = {}



// MAPAS: 

const gameEvents = new Map([
[17, "GOAL"],
[36, "Substitution"],
[47, "GOAL"],
[61, "Substitution"],
[64, "Yellow card"],
[69, "Red card"],
[70, "Substitution"],
[72, "Substitution"],
[76, "GOAL"],
[80, "GOAL"],
[92, "Yellow card"],
]);

//Revisar este!!

const senDuplicar = [...new Set(gameEvents.values())]

console.log(senDuplicar);

console.log(typeof(senDuplicar));

//Recorre el bucle y di si fue primera parte o segunda


