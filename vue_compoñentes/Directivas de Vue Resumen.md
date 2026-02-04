# 🌟 Resumen de directivas y conceptos clave de Vue

## 1️⃣ `v-bind` (`:`)

* **Qué hace:** enlaza atributos o props dinámicamente (unidireccional).
* **Ejemplo:**

```vue
<img :src="imagenUrl" :alt="descripcion" />
<button :disabled="contador >= 10">+1</button>
```

* Flujo: **dato → DOM/componente**.

---

## 2️⃣ `v-model`

* **Qué hace:** enlaza inputs o selects bidireccionalmente.
* **Ejemplo:**

```vue
<input type="number" v-model="contador" />
```

* Flujo: **DOM ↔ dato**.

---

## 3️⃣ `computed`

* **Qué hace:** calcula valores derivados automáticamente y se cachea.
* **Ejemplo:**

```vue
computed: {
  doble() {
    return this.contador * 2;
  }
}
```

* Para **valores derivados**, no efectos secundarios.

---

## 4️⃣ `watch`

* **Qué hace:** ejecuta código cuando un dato cambia (efectos secundarios).
* **Ejemplo:**

```vue
watch: {
  contador(newVal) {
    if(newVal >= 10) alert("¡Llegaste a 10!");
  }
}
```

* Para **acciones cuando cambian datos**, no para mostrar valores calculados.

---

## 5️⃣ `v-if` / `v-else-if` / `v-else`

* **Qué hace:** renderiza o destruye elementos según condición.
* **Ejemplo:**

```vue
<p v-if="contador >= 5">Mayor o igual a 5</p>
<p v-else>Menor que 5</p>
```

* Útil para **condiciones poco frecuentes o elementos pesados**.

---

## 6️⃣ `v-show`

* **Qué hace:** muestra u oculta elementos aplicando `display: none`.
* **Ejemplo:**

```vue
<p v-show="contador >= 5">Mayor o igual a 5</p>
```

* Útil para **cambios frecuentes**, ya que el DOM no se destruye.

---

## 7️⃣ `v-for`

* **Qué hace:** renderiza listas de arrays u objetos.
* **Ejemplo array:**

```vue
<li v-for="(item, index) in productos" :key="index">{{ item }}</li>
```

* **Ejemplo objeto:**

```vue
<li v-for="(valor, clave) in usuario" :key="clave">{{ clave }}: {{ valor }}</li>
```

---

## 8️⃣ `v-on` (`@`)

* **Qué hace:** escucha eventos del DOM o de componentes.
* **Ejemplo:**

```vue
<button @click="sumar">+1</button>
<form @submit.prevent="guardar"></form>
```

* Modifiers útiles: `.prevent`, `.stop`, `.once`, `.self`, `.capture`.

---

## 9️⃣ `v-slot` / slots

* **Qué hace:** inyecta contenido dinámico desde el padre a un componente hijo.
* **Ejemplo hijo:**

```vue
<slot name="header"></slot>
```

* **Ejemplo padre:**

```vue
<MiCard>
  <template v-slot:header><h1>Encabezado</h1></template>
</MiCard>
```

* Solo necesario cuando hay **componentes con “huecos”**.

---

## 🔹 Otros conceptos útiles

* **`:key`** → para optimizar renderizado en `v-for`.
* **`ref` / `$refs`** → acceder a elementos o componentes del DOM directamente.
* **`v-pre` / `v-once` / `v-cloak`** → optimizaciones raras.

---

💡 **Regla práctica de cuándo usar cada cosa:**

| Directiva/Concepto | Uso principal                                                       |
| ------------------ | ------------------------------------------------------------------- |
| `v-bind` (`:`)     | Enlazar atributos o props dinámicamente (unidireccional)            |
| `v-model`          | Enlazar inputs, selects o checkboxes bidireccionalmente             |
| `computed`         | Valores derivados que se muestran en la plantilla                   |
| `watch`            | Ejecutar efectos secundarios cuando un dato cambia                  |
| `v-if`             | Mostrar/ocultar elementos creando o destruyendo en DOM              |
| `v-show`           | Mostrar/ocultar elementos cambiando `display`, DOM siempre presente |
| `v-for`            | Renderizar listas de arrays u objetos                               |
| `v-on` (`@`)       | Manejar eventos del DOM o componentes                               |
| `v-slot`           | Pasar contenido dinámico desde el padre al hijo                     |
| `:key`             | Optimizar renderizado en listas dinámicas                           |

---

