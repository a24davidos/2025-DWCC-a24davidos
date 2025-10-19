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


function diaSemana(fecha) {
    if (fecha.getDay() == 0 || fecha.getDay() == 6) {
        return false;
    }

    return true;
}

const nuevaFecha = new Date(2025, 9, 19)

console.log(diaSemana(nuevaFecha));


/* Crea unha función que reciba unha data como parámetro e devolva o número de
días que pasaron dende que comezou o ano. */

function diasAño(fecha) {
    //Creamos fecha con el primer día del año 
    const inicioAño = new Date(2025, 0, 1)

    // Calculamos la diferencia en milisegundos 
    const diferencia = fecha - inicioAño;

    //Convertimos la diferncia a días 
    const diasPasados = Math.floor(diferencia / (1000 * 60 * 60 * 24))

    return diasPasados + 1;
}

let fechaNueva = new Date();

console.log("ARRAYS------------------");

/* Crea unha función que reciba como parámetros un elemento e un array. A función
debe devolver un novo array que conteña os índices onde aparece ese elemento no
array */

const numeros = [1, 3, 5, 1, 4, 1, 6, 8, 10, 1];

function indices(elemento, arrayElementos) {

    let posicion = []
    for (let i = 0; i < arrayElementos.length; i++) {
        if (elemento === numeros[i]) {
            posicion.push(i)
        }
    }
    return posicion
}

console.log(indices(1, numeros)); // (4) [0, 3, 5, 9]


/* Dado o array froitas fai os seguintes apartados co método splice: */

const froitas = ['peras', 'mazás', 'kiwis', 'plátanos',
    'mandarinas'];

/* a.Elimina as mazás.*/

/* froitas.splice(1,1)
console.log(froitas); */

/* b. Engade laranxas e sandía detrás dos plátanos,. */

/* froitas.splice(3,0, "laranxas", "sandía")
console.log(froitas);
 */

/* c. Quita os kiwis e pon no seu lugar cereixas e nésperas */

/* froitas.splice(2,1, "cereixas", "nésperas")
console.log(froitas); */

console.log("DESESTRUCTURACIÓN DE ARRAYS ----------");

/* const numeros = [1]; // array con un solo elemento

// Desestructuramos con valores por defecto
const [a, b = 10] = numeros;

console.log(a); // 1  → toma el primer elemento del array
console.log(b); // 10 → como no hay segundo elemento, usa el valor por defecto */

/* [a, , b, , c] = numeros;
console.log(`a = ${a}, b = ${b}, c = ${c}`); // a = 10, b = 30, c = 50 */

/* Imaxinar que se recolle a seguinte información relativa a un xogo dun servidor web: */

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

let players1, players2

[players1, players2] = players

console.log(players1);
console.log(players2);

/* O primeiro xogador do array é o porteiro e o resto son xogadores de campo.
Crea unha variable chamada gk que conteña o porteiro do primeiro equipo e
unha variable de tipo array chamada fieldPlayers que conteña o resto de
xogadores do equipo. */

let gk, resto;

[gk, ...resto] = players1

console.log(gk);
console.log(resto);

/* Crea un array allPlayers que conteña os xogadores dos dous equipos. */

let allPlayers;

allPlayers = [...players1, ...players2]

console.log(allPlayers);

// d. O primeiro equipo substituíu os xogadores iniciais por 'Thiago', 'Coutinho', 'Periscic'. Crea unha nova variable de tipo array chamada players1Final que conteña todos os xogadores: os iniciais e tamén os 3 novos.

let players1Final;

players1Final = [...players1, "Thiago", "Coutinho", "Periscic"];

console.log(players1Final);


/* Dado un array con nomes de variables formados por dúas palabras separadas por
“_”, fai as operacións necesarias para mostrar por consola os nomes das variables
en formato camelCase. Por exemplo, se o array de entrada é [“first_name”, “
last_NAME”], deberase mostrar por consola “firtsName” e “lastName”. */

const aName = ["first_name", "last_NAME"]


for (let nome of aName) {
    const [a, b] = nome.split('_');
    console.log(a.toLowerCase() + b.at(0).toUpperCase() + b.slice(1).toLowerCase());
}

/* const variables = ["fIrst_name", "last_NAME"];

for (const palabra of variables) {
  // Hacemos la desestructuración
  let [first, second] = palabra.toLocaleLowerCase().trim().split("_");

  const output = `${first}${second.replace(
    second[0],
    second[0].toUpperCase()
  )}`;

  console.log(output);
} */




/* Escribe o código necesario para procesar unha cadea con información de voos
como a do exemplo e mostrar a información por consola formateada como aparece
na imaxe:

/* Fixarse que a información mostrada por consola está aliñada pola dereita */

const flightsInfo = "_Delayed_Departure;scq93766109;bio2133758440;11:25+_Arrival;bio09433847 22;scq93766109;11:45+_Delayed_Arrival;svq7439299980;scq93766109;12:05+_ Departure;scq93766109;svq2323639855;12:30";


function getCode(str) {
    return str.slice(0, 3).toUpperCase()
}

for (const flight of flightsInfo.split("+")) {
    const [type, from, to, time] = flight.split(";")

    const output = (`${type.slice(1).replaceAll("_", " ")} ${getCode(from)} ${getCode(to)} (${time.replace(":", "h")})`).padStart(36)
    console.log(output);
}


console.log("OBXETOS------------------");

/* Crea un obxecto chamado television coas propiedades marca, categoría
(televisores), unidades (4), prezo (354.99) e un método chamado importe que
devolva o prezo total das unidades (unidades x prezo). */

const television = {
    marca: "Philips",
    categoria: "tv",
    unidades: 4,
    prezo: 354.99,
    importe: function () {
        return this.unidades * this.prezo
    }
}

console.log(television.importe());

/* Imaxinar que se recolle a seguinte información relativa a un xogo dun servidor: */

/* const game = {
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    }
}; */

/* const {
    odds: {team1},
    odds: {x:draw},
    odds: {team2}
} = game;

console.log(draw); */


/* 3. Dado o seguinte obxecto: */

const game = {
scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"]
};

/* Recorre o array game.scored e mostra por pantalla información do xogador
que marcou e o número de gol marcado. Exemplo: “Gol 1: Lewandowski”. */

for (let i = 0; i < game.scored.length; i++) {
  console.log(`Gol ${i + 1}: ${game.scored[i]}`);
}

/* Crea un novo obxecto chamado scorers que conteña como propiedades o
nome dos xogadores que marcaron e como valor o número de goles que
marcaron respectivamente. Neste exemplo sería algo así: {Lewandowski: 2,
Gnarby: 1, Hummels: 1} */

let scorers = {}

for (const player of game.scored){
    if (scorers[player]){
        scorers[player] += 1;
    } else {
        scorers[player] = 1;
    }
}

