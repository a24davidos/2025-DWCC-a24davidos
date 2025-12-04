/* 1. ¿Cal é o resultado do seguinte código? ¿Por que? */

/* let promise = new Promise(function (resolve, reject) {
  resolve(1);
  setTimeout(() => resolve(2), 1000);
});
promise.then(console.log);
 */
/* O resultado é 1, porque nada mais se construe a promesa, como JS é programación de carácter secuencial, pasa primeiro por resolve que por setTimeout. Como a promesa xa está resolta "setTimeout" non fai nada */

/* 2. Crea unha función á que se lle pase un parámetro e que devolva unha promesa. A promesa debe resolverse despois de tres segundos dende que se chamou á función e debe devolver o parámetro pasado á función. Para probala, fai unha chamada á túa función e mostra por consola o valor devolto pola promesa. */

/* function promesita(a) {
  let promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(a), 3000);
  });

  return promise;
} */

/* promesita("hola mundo").then(console.log); */

/* 3. Crea unha función que reciba un parámetro e devolva unha promesa. */

/* a. Se o parámetro non é un número, debe rexeitar a promesa inmediatamente e
devolver un Erro indicando “Erro. O parámetro non é un número”.
b. Se o parámetro é un número impar, debe resolver a promesa despois de 1
segundo e devolver “Impar”.
c. Se o parámetro é un número par, debe rexeitar a promesa despois de 2
segundos e devolver un erro co texto “Par” */

/* function promesita3(a) {
  return new Promise(function (resolve, reject) {
    if (typeof a !== "number") {
      reject(new Error("Erro. O parámetro non é un número"));
    } else if (a % 2 !== 0) {
      setTimeout(() => resolve("Impar"), 1000);
    } else {
      setTimeout(() => reject(new Error("Par")), 2000);
    }
  });
} */

// Probar con un número par

/* promesita3(2)
  .then(console.log)
  .catch((error) => console.log(error.message));

// Probar con un número impar
promesita3(3)
  .then(console.log)
  .catch((error) => console.log(error.message));

// Probar con un valor no numérico
promesita3("hola")
  .then(console.log)
  .catch((error) => console.log(error.message)); */

/* ¿Son iguais os seguintes fragmentos de código? ¿Que pasa se se produce un erro en f1? */

/* Si la promesa funciona en el primero, correra F1, pero si falla correrá f2. Si f1 lanza un error, lo pilla en f2 y lo corre */
/* promise.then(f1).catch(f2); */

/* Si la promesa funciona, corre f1 pero si falla, correra F2. Si F1 lanza un error dentro, F2 no lo recogerá */
/* promise.then(f1, f2); */

/* 2. ¿Cal é a saída do seguinte código? ¿Por que? */

// function job() {
//   return new Promise(function (resolve, reject) {
//     reject();
//   });
// }

// let promisee = job();

// promisee
//   .then(() => console.log("Success 1"))
//   .then(() => console.log("Success 2"))
//   .then(() => console.log("Success 3"))
//   .catch(() => console.log("Error 1"))
//   .then(() => console.log("Success 4"));

/* 3. Cal é a saída do seguinte código? ¿Por que? */

function job(state) {
  return new Promise(function (resolve, reject) {
    if (state) {
      resolve("success");
    } else {
      reject("error");
    }
  });
}

let promiseee = job(true);

promiseee
  .then(function (data) {
    console.log(data);
    return job(false);
  })
  .catch(function (error) {
    console.log(error);
    return "Error caught";
  })
  .then(function (data) {
    console.log(data);
    return job(true);
  })
  .catch((error) => console.log(error));
