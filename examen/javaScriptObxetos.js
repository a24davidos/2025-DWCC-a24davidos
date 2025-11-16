// 1.- Dada a seguinte constante, fai as operacións necesarias para que o primeiro carácter estea en maiúscula:

const cadea = 'desenvolvemento web'

console.log(cadea.at(0).toUpperCase() + cadea.slice(1));

// 2.- Crea unha función denominada reverseString á que se lle pase unha cadea e devolva unha nova cadea cos caracteres da orixinal en sentido inverso

function reverso(cadea) {
    let resultado = "";
    for (let i = cadea.length - 1; i >= 0; i--) {
        resultado += cadea[i]
    }
    return resultado
}

console.log(reverso(cadea));

/* 3.- Crea unha función denominada enmascarar á que se lle pase unha cadea de números e devolva unha cadea da mesma lonxitude que a pasada como parámetro pero formada formada por * e as últimas 4 cifras do parámetro de entrada. */

let dni = "48110559X"


function enmascarar(entrada) {
    return entrada.slice(-4).padStart(entrada.length, "*")
}

console.log(enmascarar(dni));

/* 1.- ¿Como calcularías o número de cifras dun número enteiro positivo utilizando propiedades e métodos dos obxectos vistos ata agora? */

numero = 1000

console.log(String(numero).length);


/* 1. Números aleatorios: Xera un número enteiro aleatorio entre 0 e 3 (incluídos). */

console.log(Math.round((Math.random() * 3)));

/* Xera un número enteiro aleatorio entre 1 e 3 (incluídos). */

console.log(Math.ceil(Math.random() * 3));


/* Crea unha función que devolva un número enteiro aleatorio entre os dous valores pasados como parámetros. Así, por exemplo, a seguinte instrución 
debe mostrar un número aleatorio entre 5 e 10 (incluídos): */

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

console.log(numeroAleatorio(5, 10));

/* Crea unha función á que se lle pase como parámetro o número de minutos e
devolva un string indicando a súa equivalencia en horas e minutos. */

let minutos = 1440;

function horasMinutos(minutos) {
    return `Horas: ${Math.floor(minutos / 60)} Minutos: ${minutos % 60} `
}

console.log(horasMinutos(minutos));


//DATAS:

/* 1. Mostra o día da semana (en letra) do 25 de xullo do ano actual. */

const fecha = new Date(2025, 6, 25)

console.log(fecha.getMonth());


function mesString(fecha) {
    switch (fecha.getMonth()) {
        case 0:
            console.log("xaneiro");
            break;
        case 1:
            console.log("febreiro");
            break;
        case 2:
            console.log("marzo");
            break;
        case 3:
            console.log("abril");
            break;
        case 4:
            console.log("maio");
            break;
        case 5:
            console.log("xunio");
            break;
        case 6:
            console.log("xullo");
            break;
        case 7:
            console.log("agosto");
            break;
        case 8:
            console.log("setembro");
            break;
        case 9:
            console.log("outubro");
            break;
        case 10:
            console.log("novembro");
            break;
        case 11:
            console.log("decembro");

        default:
            break;
    }
}

mesString(fecha)

/* 2.- Crea unha función á que se lle pase un mes (1-12) e un ano e devolva o número de días dese mes */

const nFecha = new Date(2025, 1, 0)


function diasDoMes(mes) {
    const fecha = new Date(2025, mes, 0)
    return fecha.getDate()
}

console.log(diasDoMes(1));

/* 4.-Crea unha función que reciba unha data como parámetro e devolva o número de días que pasaron dende que comezou o ano */

const newFecha = new Date(2025, 7, 26)

console.log(newFecha);


function diasPasados(data) {

    const mes = data.getMonth() + 1
    let dias = 0

    for (let i = 1; i < mes; i++) {
        dias += diasDoMes(i)

    }

    return dias + data.getDate()
}


console.log(diasPasados(newFecha));

// ARRAYS

/* 1. Crea unha función que reciba como parámetros un elemento e un array. A función debe devolver un novo array que conteña os índices onde aparece ese elemento no array. */

const numeros = [1, 3, 5, 1, 4, 1, 6, 8, 10, 1];

function indices(elemento, arrayElementos) {
    const array = [];
    for (let i = 0; i < arrayElementos.length; i++) {
        if (arrayElementos[i] == elemento) {
            array.push(i)
        }
    }
    return array;
}

console.log(indices(1, numeros));

/*2.- Dado o array froitas (const froitas = ['peras', 'mazás', 'kiwis', 'plátanos',
'mandarinas'];) , fai os seguintes apartados co método splice: */

const froitas = ['peras', 'mazás', 'kiwis', 'plátanos', 'mandarinas']

/* a. Elimina as mazás. */

froitas.splice(1, 1)
console.log(froitas);

/* b. Engade laranxas e sandía detrás dos plátanos,. */

froitas.splice(3, 0, "laranxas", "sandía")
console.log(froitas);


/* c. Quita os kiwis e pon no seu lugar cereixas e nésperas. */

froitas.splice(1, 1, "cereixas", "nesperas")
console.log(froitas);
console.log(froitas.join(", "));


/* 3.- Crea unha función á que se lle pase unha frase con varias palabras e devolva a mesma frase coa primeira letra de cada palabra en maiúsculas e o resto de letras en minúsculas. */

let frase = "ei tio que bien te veo cabron"

let nueva = frase.split(" ");

console.log(nueva);


function mayusculas(frase) {

    let palabras = frase.split(" ");
    let resultado = "";

    for (palabra of palabras) {
        resultado += (palabra[0].toUpperCase() + palabra.slice(1) + " ")

    }
    return resultado
}


console.log(mayusculas(frase));


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

const [players1, players2] = players;

console.log(players1, players2);

/* O primeiro xogador do array é o porteiro e o resto son xogadores de campo.
Crea unha variable chamada gk que conteña o porteiro do primeiro equipo e
unha variable de tipo array chamada fieldPlayers que conteña o resto de
xogadores do equipo. */

const [gk, ...fieldPlayers] = players1

console.log(gk);
console.log(fieldPlayers);

/* c. Crea un array allPlayers que conteña os xogadores dos dous equipos. */

const allPlayers = [...players1, ...players2]

console.log(allPlayers);

/* O primeiro equipo substituíu os xogadores iniciais por 'Thiago', 'Coutinho',
'Periscic'. Crea unha nova variable de tipo array chamada players1Final que
conteña todos os xogadores: os iniciais e tamén os 3 novos */

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisci']

console.log(players1Final);

/* Dado un array con nomes de variables formados por dúas palabras separadas por
“_”, fai as operacións necesarias para mostrar por consola os nomes das variables
en formato camelCase. Por exemplo, se o array de entrada é [“first_name”, “
last_NAME”], deberase mostrar por consola “firtsName” e “lastName”. */

const arrayEntrada = ["first_name", "last_NAME"]

for (let nome of arrayEntrada) {
    const [a, b] = nome.split("_")
    console.log(a[0].toLocaleUpperCase() + a.slice(1) + b[0].toLocaleUpperCase() + b.slice(1).toLocaleLowerCase());
}


/* Escribe o código necesario para procesar unha cadea con información de voos
como a do exemplo e mostrar a información por consola formateada como aparece
na imaxe: */

const flightsInfo = "_Delayed_Departure;scq93766109;bio2133758440;11:25+_Arrival;bio0943384722;scq93766109;11:45+_Delayed_Arrival;svq7439299980;scq93766109;12:05+_Departure;scq93766109;svq2323639855;12:30";


const informacionVuelos = flightsInfo.slice(1).split("+_");

function formatearDepartures(entrada) {
    return entrada.slice(0, 3).toLocaleUpperCase()
}

function formatearHora(entrada) {
    return `(${entrada.slice(0, 2)}h${entrada.slice(2)})`
}


for (let vuelo of informacionVuelos) {
    let [info, inicio, final, hora] = vuelo.split(";");
    let resultado = `${info.replaceAll("_", " ")} ${formatearDepartures(inicio)} ${formatearDepartures(final)} ${formatearHora(hora)}`
    console.log(resultado.padStart(34, " "));
}

/* Obxetos!!! */

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

const {odds: {team1, x:draw, team2}} = game

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

const {oddsInfo:{equipo1, x:{medio:empate}, equipo2}} = partido

console.log(equipo1, empate, equipo2);


// Dado o seguinte obxecto:

const juego = { scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"]};

let scorers = {}

for (const player of juego.scored) {
    if (scorers[player]) {
        scorers[player] += 1;
    } else {
        scorers[player] = 1;
    }
}

console.log(scorers["miguel"]);


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
const sinDuplicados = [...new Set(gameEvents.values())]

//Recorre el bucle y di si fue primera parte o segunda

for (const [key, value] of gameEvents){
    if (key < 45){
        console.log(`[PRIMEIRA PARTE] ${key}: ${value}`);
    } else{
        console.log(`[SEGUNDA PARTE] ${key}: ${value}`);
        
    }
}

