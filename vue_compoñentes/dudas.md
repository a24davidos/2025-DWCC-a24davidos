¡Ahhh, ahora está clarísimo por qué **no te funciona**! 😅

El problema está en **la coincidencia exacta del nombre** entre cómo registras el componente global y cómo lo usas en el template.

---

## 1️⃣ Registro que hiciste en `main.js`

```js
app.component('Novocontacto', NovoContacto);
```

- Aquí lo registraste **como `Novocontacto`** (la N mayúscula, la c minúscula, todo junto).
- Vue diferencia **exactamente** los nombres en PascalCase cuando los registras globalmente.

---

## 2️⃣ Cómo lo usas en el template

```vue
<NovoContacto @novoContacto="agregarContacto" />
```

- Aquí escribiste `NovoContacto` (la C mayúscula).
- Esto **no coincide** con `Novocontacto` que registraste.
- Por eso Vue no reconoce el componente y no funciona.

---

## 3️⃣ Soluciones

### Opción A: Cambiar el nombre en `main.js` al que quieres usar

```js
app.component('NovoContacto', NovoContacto);
```

- Ahora el template `<NovoContacto />` funciona perfectamente. ✅

---

### Opción B: Cambiar el template al nombre que registraste

```vue
<Novocontacto @novoContacto="agregarContacto" />
```

- Esto también funciona, pero es más “raro” visualmente.

---

💡 **Tip:** Para evitar errores de mayúsculas/minúsculas:

- Usa **PascalCase** consistente (`NovoContacto`)
- O usa **kebab-case** en el template si quieres (`<novo-contacto />`)

---

### 4️⃣ Mi recomendación

Cambia `main.js` a:

```js
app.component('NovoContacto', NovoContacto);
```

Y deja tu template tal cual:

```vue
<NovoContacto @novoContacto="agregarContacto" />
```

✅ Con eso, Vue reconocerá el componente y el evento `$emit('novoContacto', ...)` funcionará perfectamente.

---

Si quieres, puedo dejarte **tu App.vue completamente funcional** con:

- Formulario de nuevo contacto
- Lista de contactos
- Botón de favorito
- Todo usando componentes correctamente registrados

¿Quieres que haga eso?
