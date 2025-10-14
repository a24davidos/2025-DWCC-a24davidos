//1.Suma os valores da propiedade price do seguinte array de obxectos:
const objects = [{ price: 1 }, { price: 2 }, { price: 3 }];

const suma = objects.reduce(
  (accumulator, currentValue) => accumulator + currentValue.price,
  0
);

console.log(suma);

//2. Utilizando a función reduce, obtén o valor mínimo dun array de números.

const array = [2, 3, 1, 4, 6];

const reducer = (a, c) => (a > c ? (a = c) : a);

console.log(a.reduce(reducer));
