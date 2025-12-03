### 🔹 Métodos que **devuelven un solo elemento**

(devuelven **el primero** que cumple la condición)

* `document.querySelector("selector")`
* `document.getElementById("id")`

📦 → Devuelven **un único elemento** o `null` si no existe.

---

### 🔹 Métodos que **devuelven una lista** (colección de varios elementos)

(devuelven **todos** los que cumplan la condición)

* `document.querySelectorAll("selector")` → **NodeList**
* `document.getElementsByClassName("nombreClase")` → **HTMLCollection**
* `document.getElementsByTagName("etiqueta")` → **HTMLCollection**
* `document.forms`, `document.images`, etc. → **HTMLCollection**

📦 → Devuelven una **lista parecida a un array**, con índices (`[0]`, `[1]`, …).

---

✅ **Resumen ultra breve:**

* `querySelector` → **1 elemento**
* `querySelectorAll` → **lista (NodeList)**

¿Quieres que te añada cómo recorrer esas listas fácilmente con un bucle `for` o `forEach`?
