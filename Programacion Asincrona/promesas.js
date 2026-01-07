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

// then siempre necesita una función como argumento.
// Si pasas console.log → funciona, porque es una función que puede recibir el valor de la promesa.
// Si pasas console.log() → ejecutas la función inmediatamente, then recibe undefined y el valor de la promesa se pierde.



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

/*
  Explicación de cómo funciona esta promesa con setTimeout:

  1. La función promesita3(a) devuelve siempre una promesa.
  2. Dentro de la promesa usamos un "executor" con resolve y reject.
     - Si el parámetro no es un número, llamamos a reject inmediatamente.
     - Si el número es impar, usamos setTimeout para llamar a resolve("Impar") después de 1 segundo.
     - Si el número es par, usamos setTimeout para llamar a reject(new Error("Par")) después de 2 segundos.
  3. setTimeout **no devuelve un valor a la promesa**, y no hace falta usar return. 
     - Lo importante es que dentro del callback de setTimeout llamamos a resolve o reject.
     - Esto cambia el estado de la promesa (de pendiente a resuelta o rechazada) cuando el tiempo termina.
  4. Cuando la promesa se resuelve, se ejecuta el then; si se rechaza, se ejecuta el catch.
  5. Por eso podemos probar distintos casos:
     - Número par → reject después de 2s → catch se ejecuta.
     - Número impar → resolve después de 1s → then se ejecuta.
     - Valor no numérico → reject inmediato → catch se ejecuta.
*/


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

/*
  Explicación del flujo de esta promesa:

  1. La función job() devuelve una promesa que se rechaza inmediatamente (reject()).
  2. La promesa se encadena con varios then y un catch:

     promisee
       .then(Success 1)
       .then(Success 2)
       .then(Success 3)
       .catch(Error 1)
       .then(Success 4)

  3. Cómo se ejecuta paso a paso:
     - La promesa está inicialmente rechazada.
     - Todos los then antes del catch (Success 1, Success 2, Success 3) se **saltan**, porque la promesa está en estado rechazado.
     - El primer catch (Error 1) captura el rechazo y lo maneja → imprime "Error 1".
     - Después del catch, la promesa **queda resuelta**, por lo que el then siguiente (Success 4) se ejecuta normalmente → imprime "Success 4".

  4. Resultado en consola:
     Error 1
     Success 4

  Conceptos importantes:
     - Cuando una promesa se rechaza, los then posteriores se saltan hasta encontrar un catch.
     - El catch “recupera” la promesa, permitiendo que los then posteriores se ejecuten.
*/

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

  /*
  Flujo de la cadena de promesas:

  1. job(true) se resuelve → primer then imprime "success" y retorna job(false).
  2. job(false) se rechaza → el primer catch imprime "error" y devuelve "Error caught".
  3. El siguiente then recibe "Error caught" → imprime "Error caught" y retorna job(true).
  4. El último catch no se ejecuta, porque la promesa está resuelta.

  Claves:
  - then solo se ejecuta si la promesa está resuelta.
  - catch solo se ejecuta si la promesa está rechazada.
  - Un catch que devuelve un valor recupera la promesa y permite que los then siguientes se ejecuten.
*/


