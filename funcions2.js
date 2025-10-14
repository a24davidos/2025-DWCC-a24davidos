//1.Suma os valores da propiedade price do seguinte array de obxectos:
const objects = [{ price: 1 }, { price: 2 }, { price: 3 }];

const suma = objects.reduce(
  (accumulator, currentValue) => accumulator + currentValue.price,
  0
);

console.log(suma);

//2. Utilizando a función reduce, obtén o valor mínimo dun array de números.

const array = [1, 2, 3, 4, 5];
function reducer(accumulator, currentValue, index) {
  const returns = accumulator + currentValue;
  console.log(
    `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`
  );
  return returns;
}
let resultado = array.reduce(reducer);
console.log(`Resultado = ${resultado}`);
console.log("Usando un valor inicial");
resultado = array.reduce(reducer, 0);
console.log(`Resultado = ${resultado}`);
console.log("Usando unha función frecha");
resultado = array.reduce(
  (accumulator, currentValue, index) => accumulator + currentValue,
  0
);
console.log(`Resultado = ${resultado}`);
