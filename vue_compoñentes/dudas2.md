¡Perfecta pregunta! 😄 Vamos a desglosarlo bien, porque los **props** se comportan distinto al `data()` de cada instancia.

---

## 1️⃣ Qué son los props

Los `props` son **datos que vienen del padre** al hijo. Por ejemplo en tu `Contact`:

```js
props: {
  nome: String,
  telefono: String,
  correo: String,
  favorito: Boolean,
}
```

- Cada instancia recibe su propio valor de `props` basado en lo que le pases desde el padre:

```vue
<Contact
	v-for="c in contactos"
	:key="c.nome"
	:nome="c.nome"
	:telefono="c.telefono"
	:correo="c.correo"
	:favorito="c.favorito"
/>
```

- `c.nome` → va a la prop `nome`
- `c.telefono` → va a la prop `telefono`
- …y así

**Importante:** aunque cada instancia recibe sus props, **el hijo **no debería modificarlas directamente\*\*, porque Vue lo considera un “anti-pattern”.

---

## 2️⃣ Diferencia con `data()`

- `data()` → cada instancia tiene su **propio estado interno mutable** (ej. `mostrarInterno`)
- `props` → vienen del padre, **solo lectura** en el hijo

Ejemplo:

```vue
<button @click="$emit('make-fav')">Fav</button>
```

- No cambiamos `favorito` directamente en el hijo
- Emitimos un evento al padre (`make-fav`)
- El padre actualiza `c.favorito` en la lista
- Vue reactiva actualiza la prop en el hijo automáticamente

---

## 3️⃣ Resumen de comportamiento

| Propiedad | Quién la controla | Mutabilidad en hijo       | Ejemplo          |
| --------- | ----------------- | ------------------------- | ---------------- |
| `data()`  | Hijo              | Mutable                   | `mostrarInterno` |
| `prop`    | Padre             | Solo lectura en el hijo   | `favorito`       |
| `$emit`   | Hijo → Padre      | Permite notificar cambios | `make-fav`       |

---

💡 **Tip práctico**:

Si necesitas que un hijo “modifique un prop”, **siempre haz `$emit` al padre** y que el padre cambie el dato. Nunca hagas `this.favorito = true` directamente dentro del hijo.

---

Si quieres, puedo hacer un **ejemplo completo con tu lista de contactos** donde:

- Cada contacto tiene `mostrarInterno` independiente
- Cada contacto puede cambiar su favorito
- Se agregan nuevos contactos dinámicamente

Así lo verías funcionando todo junto.

¿Quieres que haga eso?
