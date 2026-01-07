Claro, aquí tienes unos apuntes claros y completos sobre **promesas en JavaScript** y la diferencia entre los dos casos (`then(success, error)` vs `then(...).catch(...)`), con ejemplos incluidos:

---

# Promesas en JavaScript – Manejo de éxito y error

## 1️⃣ Estados de una promesa

Una promesa puede estar **en un solo estado a la vez**:

| Estado                 | Qué ocurre                                                              |
| ---------------------- | ----------------------------------------------------------------------- |
| Resuelta (`fulfilled`) | Se ejecuta el callback de éxito (`then`)                                |
| Rechazada (`rejected`) | Se ejecuta el callback de error (`catch` o segundo parámetro de `then`) |

> Nunca se ejecutan ambos callbacks a la vez, porque la promesa ya decidió su estado.

---

## 2️⃣ Forma clásica: `then(success, error)`

```js
let promesa = new Promise((resolve, reject) => {
    if (Math.random() > 0.5) resolve("Resuelta");
    else reject(new Error("Promesa rechazada"));
});

promesa.then(
    (result) => console.log("Éxito:", result),
    (error) => console.log("Error:", error)
);
```

* **Primera función** → se ejecuta si la promesa se resuelve (`resolve`).
* **Segunda función** → se ejecuta si la promesa se rechaza (`reject`).
* **Limitación:** si dentro de la función de éxito ocurre un error (`throw`), **la segunda función no lo captura**.

```js
promesa.then(
    (result) => { 
        console.log(result); 
        throw new Error("Error dentro de then"); // ❌ No lo captura la segunda función
    },
    (error) => console.log(error)
);
```

---

## 3️⃣ Forma moderna: `then(...).catch(...)`

```js
let promesa = new Promise((resolve, reject) => {
    if (Math.random() > 0.5) resolve("Resuelta");
    else reject(new Error("Promesa rechazada"));
});

promesa
    .then((result) => {
        console.log("Éxito:", result);
        throw new Error("Error dentro de then"); // ✅ Será capturado
    })
    .catch((error) => console.log("Error capturado:", error));
```

* `then` → maneja solo el éxito.
* `catch` → captura cualquier error:

  1. Rechazo original de la promesa (`reject`).
  2. Errores que ocurren dentro de cualquier `then` anterior.

✅ Esta es la forma recomendada hoy en día, más segura y legible.

---

## 4️⃣ Diferencias clave

| Característica                         | `then(success, error)` | `then(...).catch(...)` |
| -------------------------------------- | ---------------------- | ---------------------- |
| Captura errores de la promesa original | ✅                      | ✅                      |
| Captura errores dentro de `then`       | ❌                      | ✅                      |
| Legibilidad                            | ❌ Menos clara          | ✅ Más clara            |
| Uso recomendado                        | Solo ejemplos simples  | ✅ Proyectos reales     |

---

## 5️⃣ Resumen visual del flujo

```
Promesa
  ├─ Resuelta → ejecuta success (then)
  │               └─ Si ocurre error aquí → solo catch lo captura
  └─ Rechazada → ejecuta error (catch o segundo parámetro de then)
```

* Nunca se ejecutan las dos funciones (`success` y `error`) al mismo tiempo.
* El flujo con `catch` permite **capturar cualquier error**, incluso dentro de `then`.

---

Si quieres, puedo hacer un **diagrama más gráfico con flechas y cajas** mostrando paso a paso qué callback se ejecuta según cada situación, que ayuda mucho a memorizarlo.

¿Quieres que haga ese diagrama?
