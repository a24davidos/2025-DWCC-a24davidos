"use strict";

// Exercicios Desestructuración Arrays

// 1. Imaxinar que se recolle a seguinte información relativa a un xogo dun servidor web:

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

// a. Crea as variables players1, players2 que conteñan un array cos xogadores de cada equipo. Así, players1 terá os xogadores do primeiro equipo e players2 os do segundo equipo.

let players1, players2;

[players1, players2] = players;

console.log(players1);

// b. O primeiro xogador do array é o porteiro e o resto son xogadores de campo. Crea unha variable chamada gk que conteña o porteiro do primeiro equipo e unha variable de tipo array chamada fieldPlayers que conteña o resto de xogadores do equipo.

let porteiro, fieldPlayers;

[porteiro, ...fieldPlayers] = players1;

console.log(porteiro);
console.log(fieldPlayers);

// c. Crea un array allPlayers que conteña os xogadores dos dous equipos

let allPlayers = [...players].flat();

console.log(allPlayers);

// d. O primeiro equipo substituíu os xogadores iniciais por 'Thiago', 'Coutinho', 'Periscic'. Crea unha nova variable de tipo array chamada players1Final que conteña todos os xogadores: os iniciais e tamén os 3 novos.

let players1Final;

players1Final = [...players1, "Thiago", "Coutinho", "Periscic"];

console.log(players1Final);

// 2. Dado un array con nomes de variables formados por dúas palabras separadas por “_”, fai as operacións necesarias para mostrar por consola os nomes das variables en formato camelCase. Por exemplo, se o array de entrada é [“first_name”, “ last_NAME”], deberase mostrar por consola “firtsName” e “lastName”

const variables = ["fIrst_name", "last_NAME"];

for (const palabra of variables) {
  // Hacemos la desestructuración
  let [first, second] = palabra.toLocaleLowerCase().trim().split("_");

  const output = `${first}${second.replace(
    second[0],
    second[0].toUpperCase()
  )}`;

  console.log(output);
}

// 3.  Escribe o código necesario para procesar unha cadea con información de voos como a do exemplo e mostrar a información por consola formateada como aparece na imaxe:
const flightsInfo =
  "_Delayed_Departure;scq93766109;bio2133758440;11:25+_Arrival;bio0943384722;scq93766109;11:45+_Delayed_Arrival;svq7439299980;scq93766109;12:05+_Departure;scq93766109;svq2323639855;12:30";

function getCOde(str) {
  return str.slice(0, 3).toUpperCase();
}

for (const flight of flightsInfo.split("+")) {
  const [type, from, to, time] = flight.split(";");
  const output = `${type.replaceAll("_", " ")} ${getCOde(from)} ${getCOde(
    to
  )} (${time.replace(":", "h")})`.padStart(36);
  console.log(output);
}
