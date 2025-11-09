
Veamos la diferencia **clara y práctica** entre `innerHTML` y `textContent`:

---

### `textContent`

* Devuelve o establece **solo el texto** del elemento (sin interpretar HTML).
* Si el texto incluye etiquetas como `<b>`, se mostrarán **literalmente** en pantalla.
* Es **más seguro** y **más rápido** si solo necesitas texto.

**Ejemplo:**

```js
const div = document.getElementById("textoE1");
div.textContent = "<b>Hola</b> mundo";
```

Resultado visible en la página:

```
<b>Hola</b> mundo
```

*(se muestra tal cual, sin formato en negrita)*

---

### `innerHTML`

* Devuelve o establece el **contenido HTML** del elemento.
* Si el texto contiene etiquetas HTML, el navegador las **interpreta y renderiza**.
* Permite insertar elementos dinámicos (como `<b>`, `<p>`, `<span>`, etc.).
* Si el texto proviene del usuario, puede ser **peligroso** (riesgo de XSS).

**Ejemplo:**

```js
const div = document.getElementById("textoE1");
div.innerHTML = "<b>Hola</b> mundo";
```

Resultado visible:
**Hola** mundo
*(“Hola” aparece en negrita)*

---

### ⚖️ En resumen:

| Propiedad     | Interpreta HTML | Muestra texto literal | Más segura | Uso típico                              |
| ------------- | --------------- | --------------------- | ---------- | --------------------------------------- |
| `innerHTML`   | ✅ Sí            | ❌ No                  | ⚠️ Menos   | Cuando necesitas insertar HTML dinámico |
| `textContent` | ❌ No            | ✅ Sí                  | ✅ Más      | Cuando solo quieres mostrar texto       |

---

**Recomendación:**

* Usa `textContent` por defecto (seguro y rápido).
* Usa `innerHTML` solo cuando realmente quieras insertar o modificar HTML.
