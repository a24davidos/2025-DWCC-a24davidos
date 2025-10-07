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

console.log(`${team1} - ${draw} - ${team2}`);

// 3. Dado o seguinte obxecto:

const juego = {
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
};

let i;

console.log(juego.scored);

for (i of juego.scored) {
  console.log(i);
}
