# Arrow Functions en JavaScript – Apuntes claros

## 1. ¿Qué es una arrow function?

Es una forma corta de escribir funciones en JavaScript.

```js
const suma = (a, b) => a + b;
```

Equivale a:

```js
function suma(a, b) {
  return a + b;
}
```

---

## 2. Paréntesis `()` en los parámetros

### 🔹 0 parámetros → obligatorios

```js
const hola = () => "Hola";
```

### 🔹 1 parámetro → opcionales

```js
const doble = x => x * 2;
// o
const doble = (x) => x * 2;
```

### 🔹 2 o más parámetros → obligatorios

```js
const suma = (a, b) => a + b;
```

---

## 3. Llaves `{}` en el cuerpo de la función

### ✅ Se usan cuando hay varias instrucciones

```js
const saludar = nombre => {
  console.log("Hola");
  console.log(nombre);
};
```

### ✅ Se usan cuando necesitas `return` explícito

```js
const cuadrado = n => {
  return n * n;
};
```

👉 **Regla importante**: si usas `{}`, tienes que escribir `return`.

---

## 4. Sin `{}` → return implícito

Si la función tiene **una sola expresión**, puedes omitir `{}` y `return`:

```js
const cuadrado = n => n * n;
```

---

## 5. Objetos y arrow functions (la duda clave)

### 📌 Un objeto SIEMPRE se escribe con `{}`

```js
const persona = { nombre: "Ana", edad: 20 };
```

---

## 6. El problema: devolver objetos sin `return`

❌ Esto **NO** funciona:

```js
const crearPersona = () => { nombre: "Ana" };
```

Motivo:

* JavaScript interpreta `{}` como un **bloque**, no como un objeto

---

## 7. Solución: envolver el objeto en `()`

✅ Forma correcta con return implícito:

```js
const crearPersona = () => ({ nombre: "Ana" });
```

👉 Los paréntesis indican que `{}` es una **expresión (objeto)**.

---

## 8. Con `{}` + `return`, NO hacen falta `()`

```js
const crearPersona = () => {
  return { nombre: "Ana" };
};
```

---

## 9. Regla mental rápida 🧠

* ❓ ¿Hay `{}` después de la flecha?

  * ✔️ Sí → necesitas `return`
  * ❌ No → return implícito

* ❓ ¿Devuelves un objeto sin `return`?

  * ✔️ Sí → usa `({})`

---

## 10. Ejemplos típicos

### `map`

```js
usuarios.map(u => ({ id: u.id, nombre: u.nombre }));
```

❌ Incorrecto:

```js
usuarios.map(u => { id: u.id });
```

---

## 11. Resumen final (chuleta)

| Caso            | Sintaxis correcta        |
| --------------- | ------------------------ |
| 1 línea         | `x => x * 2`             |
| Varias líneas   | `x => { return x * 2; }` |
| 1 parámetro     | `x => x + 1`             |
| 2+ parámetros   | `(x, y) => x + y`        |
| Devolver objeto | `x => ({ valor: x })`    |

---

📌 **Idea clave final**:

> Los objetos siempre usan `{}`, pero en arrow functions con return implícito deben ir envueltos en `()`.
