### 🔹 Qué recoge estrictamente el `catch`

El `.catch()` de una promesa **recibe como argumento cualquier error que ocurra dentro de la cadena de promesas anterior**.

En detalle, eso incluye:

1. **Errores lanzados explícitamente con `throw` dentro de un `.then()`**

   ```javascript
   Promise.resolve()
     .then(() => { throw new Error("Falló"); })
     .catch(error => console.log(error)); // Captura el Error("Falló")
   ```

2. **Errores de ejecución (runtime errors) dentro de un `.then()`**

   * Por ejemplo, si intentas acceder a una propiedad de `undefined`:

   ```javascript
   Promise.resolve()
     .then(() => {
       let obj;
       console.log(obj.prop); // TypeError
     })
     .catch(error => console.log(error)); // Captura el TypeError
   ```

3. **Errores de red o fallo de la promesa original**

   * Por ejemplo, si `fetch` falla realmente por problemas de red (no HTTP 404/500, sino que no se puede conectar), la promesa se **rechaza automáticamente**:

   ```javascript
   fetch('http://direccion-que-no-existe')
     .catch(error => console.log(error)); // Captura el error de red
   ```

---

### 🔹 Qué NO recoge estrictamente

* Un **HTTP 404 o 500 no se considera un error por fetch**, así que `catch` **no se ejecuta automáticamente** en ese caso.
* Por eso en tu ejemplo:

```javascript
if (!response.ok) {
  throw new Error('Request Failed'); // Aquí sí generamos un error
}
```

* Ese `throw` es lo que hace que la promesa se “rechace” y se llame a `catch`.

---

### 🔹 Resumen en palabras claras

> El `catch` **recoge cualquier error que haga que la promesa sea rechazada**, ya sea porque:
>
> * La promesa original falla (rechazada),
> * Se lanza un `throw` dentro de un `.then()`,
> * O ocurre un error de ejecución dentro de la cadena de promesas.

---

¡Exacto! 😄 Esto es un detalle muy importante del comportamiento de las promesas. Vamos a explicarlo paso a paso con cuidado.

---

##  Lo que pasa cuando un `catch` recoge un error

1. Cuando una promesa se **rechaza** (ya sea por un `throw` o un error de red), se salta directamente al **primer `.catch()` disponible**.

2. Una vez que el `.catch()` **maneja el error**, la **promesa resultante se convierte en “resuelta” (fulfilled)**, a menos que el `catch` vuelva a `throw` algo.

3. Eso significa que después de un `.catch()`, puedes encadenar un `.then()` **porque ahora la promesa ya no está rechazada**.

---

###  Ejemplo práctico

```javascript
fetch('http://httpstat.us/404')
  .then(response => {
    if (!response.ok) {
      throw new Error('Request Failed'); // Esto rechaza la promesa
    }
    return response.json();
  })
  .catch(error => {
    console.log('Catch:', error.message); // Aquí atrapamos el error
    return { fallback: true }; // La promesa ahora se resuelve con este valor
  })
  .then(data => {
    console.log('Then después del catch:', data);
  });
```

**Salida esperada:**

```
Catch: Request Failed
Then después del catch: { fallback: true }
```

---

### Explicación visual de flujo

1. `fetch` → promesa pendiente
2. `then` → `throw` → promesa rechazada
3. `catch` → maneja el error → promesa **resuelta** con lo que devuelves
4. `then` siguiente → recibe el valor devuelto por `catch`

> 💡 Nota: si dentro del `catch` vuelves a hacer `throw`, la promesa se **rechaza otra vez**, y cualquier `.then()` después se saltará hasta el siguiente `catch`.

---

Si quieres, puedo hacer un **mini-diagrama de flujo mostrando fetch → throw → catch → then**, con flechas mostrando “rechazada” y “resuelta”, para que se vea súper visual cómo funciona.

¿Quieres que haga eso?

