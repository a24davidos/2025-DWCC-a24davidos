// EXERCICIOS
// 1. Crea un obxecto chamado television coas propiedades marca, categoría (televisores), unidades (4), prezo (354.99) e un método chamado importe que devolva o prezo total das unidades (unidades x prezo

const television = {
  marca: "",
  categoría: "televisores",
  unidades: 4,
  prezo: 354.99,
  importe: function () {
    return this.unidades * this.prezo;
  },
};

console.log(`El importe ha sido de: ${television.importe()}€`);

// 2. Imaxinar que se recolle a seguinte información relativa a un xogo dun servidor:

const game = {
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Utilizando a desestruturación de obxectos crea as seguintes variables:
// ● team1: debe inicializarse co valor da propiedade team1 do obxecto inicial.
// ● draw: debe inicializarse co valor da propiedade x do obxecto inicial.
// ● team2: debe inicializarse co valor da propiedade team2 do obxecto inicial.

const {
  odds: { team1, x: draw, team2 },
} = game;

// Esta versión desesctrucuta la clase de la clase
// const { team1, x: drawm, team2 } = game.odds;

console.log(`${team1} - ${draw} - ${team2}`);

// 3. Dado o seguinte obxecto:

const juego = {
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
};

//mIRAR ESTO
for (const [index, player] of juego.scored.entries()) {
  console.log(`Gol ${index + 1} Player ${player}`);
}

// const scorers = {};
// for (const player of juego.scored)
//   scorers(player) ? scorers[player]++ : (scorers[player] = 1);
// console.log(scorers);

//1. O seguinte mapa almacena información dos eventos ocorridos durante un partido indicando o minuto no que se produciron:

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

// a. Crea un novo array chamado eventos que almacene os diferentes eventos (non o minuto) ocorridos durante o partido (sen que haxa duplicados)

const events = [...new Set(gameEvents.values())];
console.log(events);

// b. Recorre con un bucle o mapa gameEvents e mostra información de cada evento, indicando se ocorreu na primeira metade ou na segunda metade do partido, por exemplo: [PRIMEIRA PARTE] 17: GOAL
