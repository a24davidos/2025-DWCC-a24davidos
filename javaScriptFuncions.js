/* 1. Crea unha función frecha que devolva o cubo dun número pasado como parámetro. */

const cubo = a => a ** 3;

console.log(cubo(3));

/* Crea unha función frecha á que se lle pase un array e devolva como resultado un
array cos elementos impares do array de entrada. */

const array = [10, 2, 3, 5, 7, 8, 23, 50];

const numerosImpares = arr => arr.filter(num => num % 2 !== 0)

console.log(numerosImpares(array));

/* Crea unha función frecha que sume todos os valores pasados como parámetros,
sendo estes un número indeterminado. */

const array3 = [1, 2, 3]

const sumarTodos = arr => arr.reduce((a, c) => a + c, 0)

console.log(sumarTodos(array3));

/* Crea unha función á que se lle pasen varios números como parámetros (un número
indeterminado de parámetros) e que devolva a media deses números. */

const media = arr => arr.reduce((a, c) => a + c, 0) / arr.length

console.log(media(array3));

/* Crea unha función frecha chamada minMax() que reciba como parámetro un array
de números e devolva un obxecto co valor mínimo e máximo do array de entrada: */

const minMax = arr => arr.reduce((a, c) => a > c ? c : a)


console.log(minMax(array));

/* Crea unha función autoinvocada á que se lle pase a lonxitude e ancho dun rectángulo. A función debe mostrar por consola unha mensaxe indicando o valor da área do rectángulo. */

const area = (function (a, b) {
  return a * b
})(5, 3);

console.log(area);

let dni = "4849351"

/* Crea unha función á que se lle pase un DNI (ex: 12345678w ou 87654321T) e devolva se é correcto ou non. */

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

/* Crea unha función que reciba como parámetro unha cantidade enteira e faga o desglose do número de billetes e moedas necesarios para obtela. Debe usarse o número mínimo de billetes e moedas. */

function cambio(euros) {

  const valores = [500, 200, 100, 50, 20, 10, 5, 2, 1];
  const resultado = {};

  let resto = euros;

  for (let valor of valores) {
    const num = Math.floor(resto / valor);

    if (num > 0) {
      resultado[`${valor}€`] = num;
      resto = resto % valor;

    }
  }
  return resultado;
};

console.log(cambio(1000));

/* Crea unha función chamada buscarPatron(texto, patron) que reciba como parámetros un texto e un patrón. A función debe devolver como resultado o número de veces que aparece o patrón no texto, tendo en conta que un carácter pode formar parte de máis dun patrón encontrado. Debe implementarse a función de forma manual sen utilizar as funcións proporcionadas pola linguaxe JavaScript para buscar en cadeas. Non se deben distinguir maiúsculas de minúsculas. */

function buscarPatron(texto, patron) {
  let contador = 0;
  let i = 0;

  while (i <= texto.length - patron.length) {
    let coincide = true;

    // Comprobamos carácter a carácter
    for (let j = 0; j < patron.length; j++) {
      if (texto[i + j] !== patron[j]) {
        coincide = false;
        break;
      }
    }

    if (coincide) {
      contador++;
      i++; // Avanza 1 posición (permite solapamentos)
    } else {
      i++; // Tamén avanza cando non coincide
    }
  }

  return contador;
}

let texto = "000111101000ABCHA";

console.log(buscarPatron(texto, "00"))





const inicioXornada = "07:30";
const finalXornada = "17:45";

const inicioMinutos = ((h) => {
  const [hora, min] = h.split(":");
  return (+hora * 60) + (+min);
})(inicioXornada);

const finalMinutos = ((h) => {
  const [hora, min] = h.split(":");
  return (+hora * 60) + (+min);
})(finalXornada);

function axendarReunion(horaInicio, duracionMinutos) {
  // Convertimos a hora de inicio da reunión a minutos
  const [h, m] = horaInicio.split(":");
  const inicioReunion = (+h * 60) + (+m);
  const finReunion = inicioReunion + duracionMinutos;

  // Comprobamos se comeza e remata dentro do horario laboral
  return inicioReunion >= inicioMinutos && finReunion <= finalMinutos;
}

// Probas (con assert)
console.assert(axendarReunion("07:30", 30) === true, "Erro: debería poderse axendar ás 07:30 por 30 min");
console.assert(axendarReunion("17:00", 45) === true, "Erro: debería poderse axendar ás 17:00 por 45 min");
console.assert(axendarReunion("17:30", 30) === false, "Erro: reunión remata fóra da xornada");
console.assert(axendarReunion("06:30", 60) === false, "Erro: reunión comeza antes da xornada");

console.log("Comprobacións completadas sen erros");



/* Crea unha función que reciba un array bidimensional de lonxitude variable que se
corresponda cun escenario do xogo de Buscaminas. Este array almacenará un -1 
nas posicións onde hai minas e un 0 en caso contrario. A función debe devolver un
array bidimensional onde cada posición que non teña mina, debe ter a información
do número de minas adxacentes (diagonal, horizontal e vertical). */

const arrayEntrada = [
  [0, 0, -1, 0],
  [0, -1, -1, 0]
];

function comprobarMinas(tablero) {
  const filas = tablero.length;
  const columnas = tablero[0].length;
  const resultado = [];

  for (let i = 0; i < filas; i++) {
    resultado[i] = []
    for (let j = 0; i < columnas; j++) {
      if (tablero[i][j] === -1) {
        resultado[i][j] = 1; //Colocamos la mina claro
      } else {

        let minasAdxacentes = 0;

        //Comprobamos las posiciones relativas a la posición en la que estamos 

        for (let x = -1; x <= 1; x++) {
          for (let y = -1; y <= 1; y++) {
            // Saltamos la propia celda
            if (x === 0 && y === 0) {
              continue
            }

            const novaFila = i + x;
            const novaColumna = j + y;

            if (
              novaFila >= 0 &&
              novaFila < filas &&
              novaCol >= 0 &&
              novaCol < columnas
            ) {
              if (tablero[novaFila][novaCol] === -1) {
                minasAdxacentes++;
              }

            }
          }
        }

        resultado[i][j] = minasAdxacentes;
      }
    }

  }
}


const numeros = [1, 2, 3, 4, 5];

// Usando función declarada
function log(item) {
  console.log(item);
}
numeros.forEach(log);

// Función anónima
numeros.forEach(function (item) {
  console.log(item);
});

// Función flecha
numeros.forEach(item => console.log(item));

// Con los 3 parámetros
const letters = ["a", "b", "c", "d"];
letters.forEach((element, index, array) =>
  console.log(element, index, array[index])
);

let arrayNotas = [5.2, 3.9, 6, 9.75, 7.5, 3];

const array1 = [1, 4, 9, 16];
// Pass a function to map
const map1 = array1.map((x) => x * 2);
console.log(map1);

/* Suma os valores da propiedade price do seguinte array de obxectos:*/
const objects = [{ price: 1 }, { price: 2 }, { price: 3 }];

console.log(objects);


const aver = objects.reduce((sum, obj) => sum + obj.price, 0)

console.log(aver);

/* Utilizando a función reduce, obtén o valor mínimo dun array de números. */

const numeros2 = [3, 42, 53, 2, 1, 4];

const resultado = numeros2.reduce((a, c) => a > c ? c : a)

console.log(resultado);

/* Dado o seguinte array:*/

const persoas = [
  { nome: 'aaron', idade: 65, id: 1 },
  { nome: 'beth', idade: 2, id: 2 },
  { nome: 'ánxeles', idade: 13, id: 3 },
  { nome: 'daniel', idade: 3, id: 4 },
  { nome: 'ada', idade: 25, id: 5 },
  { nome: 'erea', idade: 1, id: 6 },
  { nome: 'navia', idade: 43, id: 7 },
];

/* a. Crea un novo array que conteña só as persoas maiores de idade. */

const maiorIdade = persoas.filter(persoa => persoa.idade > 17);

console.log(maiorIdade);

/* b. Crea un novo array que conteña os nomes (só os nomes) de todas as persoas. */

const nomes = persoas.map(persona => persona.nome)

console.log(nomes);

/* c. Crea un novo array que conteña, en maiúsculas, os nomes das persoas
maiores de idade. */

const apartadoC = persoas
  .filter(persoa => persoa.idade > 17)
  .map(persoa => persoa.nome.toUpperCase())

console.log(apartadoC);

/* 2. Dado un array cos días da semana en minúsculas: */

const semana = ["luns", "martes", "mercores", "xoves", "venres", "sabado", "domingo"]

/* Obtén un novo array cos días que empecen por “m” e móstrao por consola. */

const m = semana.filter(dia => dia[0] === "m")

console.log(m);

/* Mostra unha mensaxe indicando se algún día comeza por ‘s’. */
const s = semana.some(dia => dia[0] === "s")

if (s) {
  console.log("siii");

} else {
  console.log("nooo");

}

/* Mostra por consola o primeiro día que empece por “m”.*/

const primeiroDiaM = semana.find(dia => dia[0].toLowerCase() === "m");

/* e. Mostra por consola a posición no array do primeiro día que empeza por “m”. */

const primerDiaI = semana
  .findIndex(dia => dia[0] === "m")
  
console.log(primerDiaI);

/* f. Crea un novo array cos días da semana en maiúsculas */

const diaSemanaM = semana.map(dia => dia.toUpperCase())

console.log(diaSemanaM);


/* Fai unha función que ordene as notas dun array pasado como parámetro. Por
exemplo, se se pasa o array [4,8,3,10,5] debe devolver [3,4,5,8,10]. Debes utilizar a
función sort e pasarlle como parámetro unha función que ti definas e que sirva para
realizar a comparación de elementos. */

const arrayNumeros = [4,8,3,10,5] 

const ordenar = numero => numero.sort((a,b) => a - b)

console.log(ordenar(arrayNumeros));

/* 
Dado un array de números, obtén o valor máis alto. (Usa algunha das funcións para
traballar con arrays) */

const maisAlto = arrayNumeros.reduce((a,b) => a < b ? b : a)

console.log(maisAlto);

/* 5. Dada a seguinte información: */

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

const inventoresXVI = inventors
  .filter(inventor => inventor.year >= 1500 && inventor.year < 1600)

console.log(inventoresXVI);

/* Crea un array co nome completo dos inventores: ["Albert Einstein", "Isaac
Newton", ...] */

const nombreCompleto = inventors.map(inventor => `${inventor.first} ${inventor.last}`)

console.log(nombreCompleto);

/* Unha vez obtido o array co nome completo dos inventores do exercicio
anterior, ordénao alfabeticamente polo apelido. */

const nombreCompletoSort = nombreCompleto.sort((a, b) => {
  const apellidoA = a.split(" ").slice(-1)[0]; // toma la última palabra
  const apellidoB = b.split(" ").slice(-1)[0];
  return apellidoA.localeCompare(apellidoB);
});

console.log(nombreCompletoSort);

/* Ordena alfabeticamente polo apelido o array de obxectos inventores inicial. */

const sortApelido = inventors.sort((a,b) => a.last.localeCompare(b.last));

console.log(sortApelido);

/* e. Ordena o array de inventores pola data de nacemento. */

const dataNacemento = inventors.sort((a,b) => a.year - b.year);

console.log(dataNacemento);

/* f. Calcula a suma dos anos que viviron todos os inventores. */

const anosTotal = inventors.reduce((acum, inventor) => {
  return acum + (inventor.passed - inventor.year);
}, 0);


console.log(anosTotal);

/* g. Ordena os inventores polos anos que viviron, primeiro o máis lonxevo
 */
const ordenadosPorVida = inventors.sort((a, b) => {
  const añosA = a.passed - a.year;
  const añosB = b.passed - b.year;
  return añosB - añosA; // del más longevo al menos
});

console.log(ordenadosPorVida);


//Continuar página 25